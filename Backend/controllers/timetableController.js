import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');
import TimeTable from '../models/TimeTable.js';
import User from '../models/User.js';

export const uploadTimetable = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // 1. READ FILE CONTENT
    let textContent = '';
    
    // Helper to extract text
    if (req.file.mimetype === 'text/plain' || req.file.originalname.endsWith('.txt')) {
        const buffer = fs.readFileSync(req.file.path);
        textContent = buffer.toString('utf8');
    } else {
        const buffer = fs.readFileSync(req.file.path);
        try {
            const data = await pdf(buffer);
            textContent = data.text;
            
            // DEBUG: Write extracted text to file to verify format
            fs.writeFileSync('debug_timetable_raw.txt', textContent);

            textContent = data.text;
        } catch (e) {
             console.error("PDF Parsing failed:", e);
             try {
                 fs.writeFileSync('pdf_debug.log', `Timestamp: ${new Date().toISOString()}\nError: ${e.message}\nStack: ${e.stack}\n\n`);
             } catch (logErr) { console.error("Log failed", logErr); }

             if (fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);
             
             return res.status(400).json({ 
                 message: 'PDF Parse Failed', 
                 errors: [
                     `Technical Error: ${e.message}`,
                     "Ensure the file is a standard Text-Based PDF.",
                     "Try using the .txt upload option if this persists."
                 ] 
             });
        }
    }

    const lines = textContent.split('\n').filter(l => l.trim());
    const parsedEntries = [];
    const errors = [];
    const logs = [];

    // DETECT FORMAT
    // Check if any line contains pipes '|'
    const isPipeFormat = lines.some(l => l.includes('|'));

    if (isPipeFormat) {
        console.log("Detected Pipe-Delimited Format");
        logs.push("Detected Pipe-Delimited Format");
        
        // PIPE PARSING LOGIC
        // Format: Day | Time | Subject | Class | Teacher | Room
        for (const line of lines) {
            const parts = line.split('|').map(part => part.trim());
            if (parts.length < 6) continue;

            const [dayRaw, timeRange, subjectName, className, teacherName, roomNo] = parts;
            
            // Validate Day
            const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const dayMatch = days.find(d => dayRaw.match(new RegExp(`^${d}`, 'i')));
            if (!dayMatch) continue;

            const times = timeRange.split('-').map(t => t.trim());
            if (times.length !== 2) {
                errors.push(`Invalid time format: ${timeRange}`);
                continue;
            }

            // Find Teacher
            const cleanTeacherName = teacherName.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.|Prof\.|Er\.)\s*/i, '');
            let teacher = await User.findOne({ 
                role: 'teacher',
                name: { $regex: new RegExp(cleanTeacherName, 'i') } 
            });

            if (!teacher) {
                // Try fuzzy match on first name
                teacher = await User.findOne({ 
                    role: 'teacher',
                    name: { $regex: new RegExp(cleanTeacherName.split(' ')[0], 'i') } 
                });
            }

            if (!teacher) {
                errors.push(`Teacher '${teacherName}' not found.`);
                continue;
            }

            parsedEntries.push({
                teacherId: teacher._id,
                day: dayRaw, // Use original string or normalized
                startTime: times[0],
                endTime: times[1],
                subjectName,
                className,
                roomNo
            });
        }

    } else {
        console.log("Detected Grid/Legend Format");
        logs.push("Detected Grid/Legend Format");

        // GRID PARSING LOGIC (Previous Implementation)
        
        // 1. Teacher Legend
        const teacherMap = {};
        const legendRegex = /\b([A-Z]{2,4})\s*[:=\-]\s*([A-Za-z\.\s]+)/g;
        lines.forEach(line => {
            const matches = [...line.matchAll(legendRegex)];
            matches.forEach(m => {
                if(m[1] && m[2]) teacherMap[m[1].trim()] = m[2].trim();
            });
        });

        // 2. Identification of Time Slots
        const timeRegex = /(\d{1,2}[:\.]\d{2})\s*[\-to]+\s*(\d{1,2}[:\.]\d{2})/g;
        let timeSlots = [];
        lines.forEach(line => {
             const matches = [...line.matchAll(timeRegex)];
             if (matches.length > timeSlots.length) {
                 timeSlots = matches.map(m => ({ 
                     start: m[1].replace('.', ':'), 
                     end: m[2].replace('.', ':') 
                 }));
             }
        });

        // 3. Grid Rows
        const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        for (const line of lines) {
            const trimmedLine = line.trim();
            const dayMatch = days.find(d => trimmedLine.toUpperCase().startsWith(d));
            if (!dayMatch) continue;
            
            const day = dayMatch;
            const rowContent = trimmedLine.replace(new RegExp(`^${day}[A-DAY]*`, 'i'), '').trim();
            
            // Regex: Subject (Code) Room?
            const cellRegex = /([A-Za-z0-9\-\&\s]+?)\(([A-Z]{2,4})\)\s*([A-Za-z0-9\-\s]*)/g;
            const cells = [...rowContent.matchAll(cellRegex)];

            if (cells.length === 0) continue;
            if (timeSlots.length === 0) {
                 errors.push("Found grid rows but no time slot header (e.g. 10:00-11:00).");
                 break;
            }

            for (let i = 0; i < cells.length; i++) {
                if (i >= timeSlots.length) break;

                const match = cells[i];
                const subject = match[1].trim();
                const teacherCode = match[2].trim();
                const room = match[3] ? match[3].trim() : 'N/A';
                const time = timeSlots[i];

                const fullTeacherName = teacherMap[teacherCode];
                if (!fullTeacherName) {
                    errors.push(`Unknown Teacher Code '${teacherCode}'.`);
                    continue;
                }

                let teacher = await User.findOne({ 
                    role: 'teacher',
                    name: { $regex: new RegExp(fullTeacherName, 'i') } 
                });
                
                if (!teacher) {
                    teacher = await User.findOne({ 
                         role: 'teacher',
                         name: { $regex: new RegExp(fullTeacherName.split(' ')[0], 'i') } 
                    });
                }

                if (!teacher) {
                    errors.push(`Teacher '${fullTeacherName}' not found in DB.`);
                    continue;
                }

                parsedEntries.push({
                    teacherId: teacher._id,
                    day,
                    startTime: time.start,
                    endTime: time.end,
                    subjectName: subject,
                    className: "IT 6th Sem", // Default for grid
                    roomNo: room || "N/A"
                });
            }
        }
    }

    // CLEANUP & RESPONSE
    if (fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);

    if (parsedEntries.length === 0) {
        return res.status(400).json({ 
            message: 'No valid entries found.',
            details: isPipeFormat ? "Is Pipe Format: Yes. Check Format: Day | Time | Subject..." : "Is Grid Format: Yes. Check Legend and cell format Subject(Code).",
            logs,
            errors
        });
    }

    await TimeTable.insertMany(parsedEntries);

    res.status(200).json({
        message: 'Timetable processed successfully',
        entriesProcessed: parsedEntries.length,
        logs,
        errors: errors.length > 0 ? errors : undefined
    });


  } catch (error) {
    if (req.file && fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);
    console.error("Upload Error:", error);
    res.status(500).json({ message: 'Server Process Error', error: error.message });
  }
};

export const getTimetableByTeacher = async (req, res) => {
    try {
        const { teacherId } = req.params;
        const timetable = await TimeTable.find({ teacherId }).sort({ day: 1, startTime: 1 });
        res.json(timetable);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getFullTimetable = async (req, res) => {
    try {
        const timetable = await TimeTable.find().populate('teacherId', 'name').sort({ day: 1, startTime: 1 });
        res.json(timetable);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getTimetableByClass = async (req, res) => {
    try {
        const { className } = req.params;
        const timetable = await TimeTable.find({
            className: { $regex: new RegExp(className, 'i') }
        }).populate('teacherId', 'name').sort({ day: 1, startTime: 1 });
        res.json(timetable);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAvailableClasses = async (req, res) => {
    try {
        const classes = await TimeTable.distinct('className');
        res.json(classes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateTimetableEntry = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedEntry = await TimeTable.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedEntry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteTimetableEntry = async (req, res) => {
    try {
        const { id } = req.params;
        await TimeTable.findByIdAndDelete(id);
        res.json({ message: 'Entry deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

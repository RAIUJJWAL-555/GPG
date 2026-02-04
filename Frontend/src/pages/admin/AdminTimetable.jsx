import { useState, useEffect } from 'react';
import api from '../../lib/axios';
import { Upload, FileText, Calendar, Clock, User, CheckCircle, AlertCircle, MapPin } from 'lucide-react';

const AdminTimetable = () => {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState({ type: '', message: '', details: [] });
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        fetchTimetable();
    }, []);

    const fetchTimetable = async () => {
        try {
            const { data } = await api.get('/admin/timetable');
            setEntries(data);
        } catch (e) {
            console.error(e);
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) {
            setStatus({ type: 'error', message: 'Please select a PDF file' });
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            setStatus({ type: 'loading', message: 'Processing PDF...' });
            const { data } = await api.post('/admin/timetable/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            if (data.errors && data.errors.length > 0) {
                setStatus({
                    type: 'warning',
                    message: `${data.message}. Processed ${data.entriesProcessed} entries with some skipped lines.`,
                    details: data.errors
                });
            } else {
                setStatus({ type: 'success', message: `${data.message}. Processed ${data.entriesProcessed} entries.` });
            }

            setFile(null);
            fetchTimetable();
        } catch (err) {
            setStatus({ type: 'error', message: err.response?.data?.message || 'Upload failed', details: err.response?.data?.errors || [] });
        }
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="relative overflow-hidden rounded-3xl bg-[#0B1C2D] text-white p-8 shadow-lg">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C7A14A] rounded-full mix-blend-multiply filter blur-3xl opacity-10 -ml-10 -mb-10"></div>

                <div className="relative z-10">
                    <h1 className="text-3xl font-bold mb-2">Timetable Management</h1>
                    <p className="text-gray-400 text-sm max-w-xl">Upload PDF schedules to automatically parse and assign classes to faculty and students.</p>
                </div>
            </div>

            {/* Upload Section */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#0B1C2D] text-white flex items-center justify-center">
                                <Upload size={20} />
                            </div>
                            <h2 className="text-xl font-bold text-[#0B1C2D]">Upload Schedule</h2>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Upload a <strong>PDF or Text file</strong> containing the weekly schedule. Ensure the file follows the standard format:
                            <br />
                            <span className="inline-block mt-2 bg-gray-50 px-3 py-1 rounded-lg border border-gray-200 font-mono text-xs text-gray-600">Day | Start-End | Subject | Class | Teacher | Room</span>
                        </p>

                        <form onSubmit={handleUpload} className="space-y-4 pt-2">
                            <div className="relative group">
                                <input
                                    type="file"
                                    accept=".pdf, .txt, application/pdf, text/plain"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                    id="file-upload"
                                />
                                <div className={`border-2 border-dashed rounded-2xl p-8 transition-all text-center ${file ? 'border-[#C7A14A] bg-[#C7A14A]/5' : 'border-gray-200 hover:border-[#0B1C2D] hover:bg-gray-50'}`}>
                                    {file ? (
                                        <div className="flex flex-col items-center gap-2">
                                            <FileText size={40} className="text-[#C7A14A]" />
                                            <span className="font-bold text-[#0B1C2D]">{file.name}</span>
                                            <span className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</span>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center gap-2">
                                            <Upload size={40} className="text-gray-300 group-hover:text-[#0B1C2D] transition-colors" />
                                            <span className="font-bold text-gray-600 group-hover:text-[#0B1C2D] transition-colors">Click to upload or drag file here</span>
                                            <span className="text-xs text-gray-400">PDF, TXT up to 10MB</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={!file || status.type === 'loading'}
                                className="w-full py-3.5 bg-[#0B1C2D] text-white rounded-xl font-bold hover:bg-[#152e48] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                            >
                                {status.type === 'loading' ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <CheckCircle size={18} /> Upload & Process
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Status Message Area */}
                    <div className="w-full md:w-1/3">
                        {status.message ? (
                            <div className={`p-6 rounded-2xl border ${status.type === 'success' ? 'bg-emerald-50 border-emerald-100 text-emerald-800' :
                                status.type === 'error' ? 'bg-red-50 border-red-100 text-red-800' :
                                    status.type === 'warning' ? 'bg-amber-50 border-amber-100 text-amber-800' :
                                        'bg-blue-50 border-blue-100 text-blue-800'
                                }`}>
                                <div className="flex items-center gap-3 font-bold mb-2">
                                    {status.type === 'success' && <CheckCircle size={20} />}
                                    {status.type === 'error' && <AlertCircle size={20} />}
                                    {status.type === 'warning' && <AlertCircle size={20} />}
                                    {status.type === 'loading' && <Clock size={20} />}
                                    Status Check
                                </div>
                                <p className="text-sm opacity-90">{status.message}</p>

                                {status.details && status.details.length > 0 && (
                                    <div className="mt-4 pt-4 border-t border-black/5">
                                        <p className="text-xs font-bold uppercase opacity-60 mb-2">Issues Found:</p>
                                        <ul className="text-xs space-y-1.5 max-h-40 overflow-y-auto">
                                            {status.details.slice(0, 10).map((err, i) => (
                                                <li key={i} className="flex gap-2">
                                                    <span className="opacity-50">•</span> {err}
                                                </li>
                                            ))}
                                            {status.details.length > 10 && <li>...and {status.details.length - 10} more.</li>}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="h-full min-h-[200px] border-2 border-dashed border-gray-100 rounded-2xl flex flex-col items-center justify-center text-center p-6 text-gray-300">
                                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                    <FileText size={24} className="opacity-50" />
                                </div>
                                <p className="text-sm font-medium">Status updates will appear here</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Entries Display */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8 border-b border-gray-50 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-[#0B1C2D]">Scheduled Classes</h2>
                    <div className="bg-[#0B1C2D]/5 text-[#0B1C2D] px-4 py-2 rounded-xl text-sm font-bold">
                        Total Entries: {entries.length}
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider font-semibold">
                            <tr>
                                <th className="px-8 py-4">Day</th>
                                <th className="px-6 py-4">Time Slot</th>
                                <th className="px-6 py-4">Subject</th>
                                <th className="px-6 py-4">Class</th>
                                <th className="px-6 py-4">Faculty</th>
                                <th className="px-8 py-4">Location</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {entries.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="px-8 py-16 text-center text-gray-400">
                                        <Calendar size={48} className="mx-auto mb-4 opacity-20" />
                                        <p>No timetable entries found in the system.</p>
                                    </td>
                                </tr>
                            ) : (
                                entries.map((entry) => (
                                    <tr key={entry._id} className="hover:bg-blue-50/30 transition-colors group">
                                        <td className="px-8 py-4">
                                            <span className="font-bold text-[#0B1C2D] text-sm uppercase bg-gray-100 px-2 py-1 rounded">{entry.day.substring(0, 3)}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                                                <Clock size={14} className="text-[#C7A14A]" />
                                                {entry.startTime} - {entry.endTime}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-[#0B1C2D]">
                                            {entry.subjectName}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="bg-[#0B1C2D]/5 text-[#0B1C2D] text-xs px-3 py-1 rounded-full font-bold">{entry.className}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-[#C7A14A]/10 text-[#C7A14A] flex items-center justify-center text-xs font-bold border border-[#C7A14A]/20">
                                                    {entry.teacherId?.name?.[0] || 'T'}
                                                </div>
                                                <span className="text-sm font-medium text-gray-700">{entry.teacherId?.name || <span className="text-red-400 italic">Unassigned</span>}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-4 text-sm text-gray-500 font-mono flex items-center gap-2">
                                            <MapPin size={14} className="opacity-50" /> {entry.roomNo}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminTimetable;

import { useEffect, useState } from 'react';
import api from '../../lib/axios';
import { useAuth } from '../../context/AuthContext';
import { Calendar, Clock, MapPin, User, Search, BookOpen } from 'lucide-react';

const StudentDashboard = () => {
    const { user } = useAuth();
    const [notices, setNotices] = useState([]);

    // Timetable States
    const [availableClasses, setAvailableClasses] = useState([]);
    const [selectedClass, setSelectedClass] = useState('');
    const [schedule, setSchedule] = useState([]);
    const [loadingSchedule, setLoadingSchedule] = useState(false);

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const [noticesRes, classesRes] = await Promise.all([
                    api.get('/common/notices'),
                    api.get('/common/timetable/classes')
                ]);
                setNotices(noticesRes.data);
                setAvailableClasses(classesRes.data);

                // Auto-select if saved previously
                const savedClass = localStorage.getItem('student_last_class');
                if (savedClass && classesRes.data.includes(savedClass)) {
                    setSelectedClass(savedClass);
                } else if (classesRes.data.length > 0) {
                    // Default to first class if none saved
                    // setSelectedClass(classesRes.data[0]); 
                }

            } catch (e) { console.error(e) }
        };
        fetchInitialData();
    }, []);

    useEffect(() => {
        if (!selectedClass) return;
        localStorage.setItem('student_last_class', selectedClass);

        const fetchSchedule = async () => {
            setLoadingSchedule(true);
            try {
                // Encode hash or special chars if any
                const { data } = await api.get(`/common/timetable/class/${encodeURIComponent(selectedClass)}`);
                setSchedule(data);
            } catch (e) {
                console.error(e);
                setSchedule([]);
            } finally {
                setLoadingSchedule(false);
            }
        };
        fetchSchedule();
    }, [selectedClass]);

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="relative overflow-hidden rounded-3xl bg-[#0B1C2D] text-white p-8 shadow-lg">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C7A14A] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -ml-10 -mb-10"></div>

                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                    <div>
                        <p className="text-[#C7A14A] font-medium mb-1">Student Portal</p>
                        <h1 className="text-3xl md:text-4xl font-bold">Welcome back, {user?.name.split(' ')[0]}</h1>
                        <p className="text-gray-400 mt-2 text-sm max-w-lg">Track your attendance, view upcoming schedules, and stay updated with the latest college notices.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl">
                        <span className="block text-xs text-gray-400 uppercase tracking-wider">Current Session</span>
                        <span className="text-lg font-bold text-[#C7A14A]">2025 - 2026</span>
                    </div>
                </div>
            </div>

            {/* Quick Stats (Placeholder) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl">85%</div>
                    <div>
                        <p className="text-gray-500 text-xs uppercase font-bold tracking-wider">Attendance</p>
                        <h3 className="text-xl font-bold text-[#0B1C2D]">Good Standing</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center font-bold text-xl">
                        <BookOpen size={20} />
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs uppercase font-bold tracking-wider">Assignments</p>
                        <h3 className="text-xl font-bold text-[#0B1C2D]">2 Pending</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-[#C7A14A]/10 text-[#C7A14A] flex items-center justify-center font-bold text-xl">
                        <Calendar size={20} />
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs uppercase font-bold tracking-wider">Events</p>
                        <h3 className="text-xl font-bold text-[#0B1C2D]">Annual Fest</h3>
                    </div>
                </div>
            </div>

            {/* Timetable Section */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-gray-50 to-white">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#0B1C2D] text-white flex items-center justify-center shadow-lg shadow-blue-900/10">
                            <Calendar size={20} />
                        </div>
                        <div>
                            <h2 className="font-bold text-xl text-[#0B1C2D]">Class Schedule</h2>
                            <p className="text-xs text-gray-500 font-medium">Weekly Timetable</p>
                        </div>
                    </div>

                    <div className="relative min-w-[240px]">
                        <select
                            value={selectedClass}
                            onChange={(e) => setSelectedClass(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0B1C2D]/10 focus:border-[#0B1C2D] appearance-none cursor-pointer shadow-sm transition-all hover:border-[#C7A14A]"
                        >
                            <option value="">Select your class...</option>
                            {availableClasses.map(cls => (
                                <option key={cls} value={cls}>{cls}</option>
                            ))}
                        </select>
                        <Search size={18} className="absolute left-3.5 top-3 text-gray-400" />
                    </div>
                </div>

                <div className="p-8 bg-gray-50/30">
                    {!selectedClass ? (
                        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-200">
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <BookOpen size={24} className="text-gray-400" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-1">No Class Selected</h3>
                            <p className="text-gray-500 text-sm">Please select your class from the dropdown above to view the timetable.</p>
                        </div>
                    ) : loadingSchedule ? (
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-40 bg-gray-100 rounded-2xl animate-pulse" />)}
                        </div>
                    ) : schedule.length > 0 ? (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => {
                                const dayClasses = schedule.filter(s => s.day.toUpperCase().startsWith(day));
                                if (dayClasses.length === 0) return null;

                                return (
                                    <div key={day} className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <div className="h-2 w-2 rounded-full bg-[#C7A14A]"></div>
                                            <h3 className="font-bold text-[#0B1C2D] text-sm uppercase tracking-widest">{dayClasses[0].day}</h3>
                                        </div>
                                        {dayClasses.map(slot => (
                                            <div key={slot._id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1 relative group overflow-hidden">
                                                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#0B1C2D]" />
                                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#C7A14A]/10 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500" />

                                                <div className="relative z-10">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <div className="bg-[#0B1C2D]/5 text-[#0B1C2D] px-2 py-1 rounded-md text-[10px] font-bold flex items-center gap-1">
                                                            <Clock size={10} /> {slot.startTime} - {slot.endTime}
                                                        </div>
                                                    </div>

                                                    <h4 className="font-bold text-[#0B1C2D] text-lg mb-3 line-clamp-1 group-hover:text-[#C7A14A] transition-colors">{slot.subjectName}</h4>

                                                    <div className="space-y-2">
                                                        <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 p-2 rounded-lg">
                                                            <User size={12} className="text-[#C7A14A]" />
                                                            <span className="font-medium">{slot.teacherId?.name || "Faculty assigned soon"}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-xs text-gray-500 px-2">
                                                            <MapPin size={12} className="text-gray-400" /> Room {slot.roomNo}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <Calendar size={48} className="mx-auto mb-4 text-gray-300" />
                            <p className="text-gray-500 font-medium">No classes scheduled for {selectedClass} yet.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Notices Section */}
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-8 w-1.5 bg-[#C7A14A] rounded-full"></div>
                    <h2 className="text-2xl font-bold text-[#0B1C2D]">Notice Board</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {notices.map(notice => (
                        <div key={notice._id} className="group bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0B1C2D]/5 rounded-full -mr-16 -mt-16 group-hover:bg-[#C7A14A]/10 transition-colors duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-red-100">
                                        Announcement
                                    </div>
                                    <span className="text-xs font-semibold text-gray-400 font-mono">
                                        {new Date(notice.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                    </span>
                                </div>

                                <h3 className="font-bold text-xl text-[#0B1C2D] mb-3 group-hover:text-[#C7A14A] transition-colors duration-300">{notice.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">{notice.description}</p>

                                {notice.attachment && (
                                    <a
                                        href={`http://localhost:5000${notice.attachment}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1C2D] hover:text-[#C7A14A] uppercase tracking-wider group/link transition-colors"
                                    >
                                        Read Full Document
                                        <BookOpen size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default StudentDashboard;

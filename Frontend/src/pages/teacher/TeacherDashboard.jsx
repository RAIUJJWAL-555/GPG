import { useEffect, useState } from 'react';
import api from '../../lib/axios';
import { useAuth } from '../../context/AuthContext';
import { Calendar, Clock, MapPin, BookOpen, User } from 'lucide-react';

const TeacherDashboard = () => {
    const { user } = useAuth();
    const [notices, setNotices] = useState([]);
    const [schedule, setSchedule] = useState([]);
    const [loadingSchedule, setLoadingSchedule] = useState(true);

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const { data } = await api.get('/common/notices');
                setNotices(data);
            } catch (e) { console.error(e) }
        };

        const fetchSchedule = async () => {
            if (!user?._id) return;
            try {
                const { data } = await api.get(`/common/timetable/teacher/${user._id}`);
                setSchedule(data);
            } catch (e) { console.error(e) }
            finally { setLoadingSchedule(false); }
        };

        fetchNotices();
        fetchSchedule();
    }, [user]);

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="relative overflow-hidden rounded-3xl bg-[#0B1C2D] text-white p-8 shadow-lg">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C7A14A] rounded-full mix-blend-multiply filter blur-3xl opacity-10 -ml-10 -mb-10"></div>

                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                    <div>
                        <p className="text-emerald-400 font-medium mb-1">Faculty Portal</p>
                        <h1 className="text-3xl md:text-4xl font-bold">Hello, {user?.name}</h1>
                        <p className="text-gray-400 mt-2 text-sm max-w-lg">Manage your classes, student attendance, and access academic notices.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl">
                        <span className="block text-xs text-gray-400 uppercase tracking-wider">Department</span>
                        <span className="text-lg font-bold text-white">Computer Science</span>
                    </div>
                </div>
            </div>

            {/* Quick Stats (Placeholder) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xl">
                        <BookOpen size={20} />
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs uppercase font-bold tracking-wider">Classes Today</p>
                        <h3 className="text-xl font-bold text-[#0B1C2D]">{schedule.length} Sessions</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl">
                        <User size={20} />
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs uppercase font-bold tracking-wider">Total Students</p>
                        <h3 className="text-xl font-bold text-[#0B1C2D]">120+</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-[#C7A14A]/10 text-[#C7A14A] flex items-center justify-center font-bold text-xl">
                        <Calendar size={20} />
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs uppercase font-bold tracking-wider">Upcoming</p>
                        <h3 className="text-xl font-bold text-[#0B1C2D]">Department Meeting</h3>
                    </div>
                </div>
            </div>

            {/* My Schedule Section */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-8 py-6 border-b border-gray-50 flex items-center gap-3 bg-gradient-to-r from-gray-50 to-white">
                    <div className="w-10 h-10 rounded-xl bg-[#0B1C2D] text-white flex items-center justify-center shadow-lg shadow-blue-900/10">
                        <Calendar size={20} />
                    </div>
                    <div>
                        <h2 className="font-bold text-xl text-[#0B1C2D]">My Teaching Schedule</h2>
                        <p className="text-xs text-gray-500 font-medium">Weekly Class Configuration</p>
                    </div>
                </div>

                <div className="p-8 bg-gray-50/30">
                    {loadingSchedule ? (
                        <div className="animate-pulse space-y-3">
                            {[1, 2].map(i => <div key={i} className="h-24 bg-gray-100 rounded-2xl"></div>)}
                        </div>
                    ) : schedule.length > 0 ? (
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {schedule.map((slot) => (
                                <div key={slot._id} className="p-5 rounded-2xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-all bg-white group relative overflow-hidden flex flex-col justify-between h-full hover:-translate-y-1">
                                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#0B1C2D]" />
                                    <div className="absolute -right-6 -top-6 w-20 h-20 bg-emerald-50 rounded-full group-hover:scale-150 transition-transform duration-500 opacity-50" />

                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-3">
                                            <span className="font-bold text-xs uppercase tracking-wider text-[#C7A14A] bg-[#C7A14A]/10 px-2 py-1 rounded-md">{slot.day}</span>
                                            <span className="bg-[#0B1C2D] text-white text-xs px-2 py-1 rounded-md font-medium flex items-center gap-1 shadow-sm">
                                                <Clock size={10} /> {slot.startTime}
                                            </span>
                                        </div>
                                        <h3 className="font-bold text-[#0B1C2D] text-lg mb-2 leading-tight group-hover:text-emerald-700 transition-colors">{slot.subjectName}</h3>
                                        <div className="space-y-2 mt-4">
                                            <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                                                <BookOpen size={14} className="text-[#0B1C2D]" />
                                                <span className="font-medium">{slot.className}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-500 px-2">
                                                <MapPin size={14} className="text-gray-400" /> Room {slot.roomNo}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 text-gray-400">
                            <Calendar size={48} className="mx-auto mb-3 text-gray-300" />
                            <p>No classes scheduled yet.</p>
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
                                        href={`https://gpg-backend-cpwk3e1wu-rai-7203e9db.vercel.app${notice.attachment}`}
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
export default TeacherDashboard;

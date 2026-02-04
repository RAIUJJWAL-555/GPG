import { useEffect, useState } from 'react';
import api from '../../lib/axios';
import { Users, UserPlus, Clock, Settings, GraduationCap, School } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const [stats, setStats] = useState({ totalTeachers: 0, totalStudents: 0, pendingTeachers: 0, pendingStudents: 0 });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const { data } = await api.get('/admin/stats');
                setStats(data);
            } catch (error) {
                console.error('Failed to fetch stats', error);
            }
        };
        fetchStats();
    }, []);

    const StatCard = ({ title, value, icon: Icon, color, subtext, link }) => (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-24 h-24 ${color} opacity-10 rounded-full -mr-8 -mt-8 group-hover:scale-110 transition-transform duration-500`} />

            <div className="relative z-10 flex justify-between items-start">
                <div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">{title}</p>
                    <h3 className="text-3xl font-bold text-[#0B1C2D]">{value}</h3>
                    {subtext && <p className="text-xs text-[#C7A14A] font-medium mt-1 animate-pulse">{subtext}</p>}
                </div>
                <div className={`w-12 h-12 rounded-xl ${color} bg-opacity-10 flex items-center justify-center text-[#0B1C2D]`}>
                    <Icon size={24} />
                </div>
            </div>
        </div>
    );

    const QuickAction = ({ title, icon: Icon, to, color }) => (
        <Link to={to} className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center gap-3 relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            <div className={`w-14 h-14 rounded-full bg-gray-50 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center text-[#0B1C2D]`}>
                <Icon size={28} strokeWidth={1.5} />
            </div>
            <span className="font-bold text-gray-700 group-hover:text-[#0B1C2D]">{title}</span>
        </Link>
    );

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="relative overflow-hidden rounded-3xl bg-[#0B1C2D] text-white p-8 shadow-lg">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C7A14A] rounded-full mix-blend-multiply filter blur-3xl opacity-10 -ml-10 -mb-10"></div>

                <div className="relative z-10">
                    <p className="text-[#C7A14A] font-medium mb-1">Administrator Control Panel</p>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Dashboard Overview</h1>
                    <p className="text-gray-400 text-sm max-w-xl">Monitor system metrics, manage user approvals, and configure college settings from one central hub.</p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Students"
                    value={stats.totalStudents}
                    icon={GraduationCap}
                    color="bg-blue-500"
                />
                <StatCard
                    title="Total Faculty"
                    value={stats.totalTeachers}
                    icon={School}
                    color="bg-emerald-500"
                />
                <StatCard
                    title="Pending Students"
                    value={stats.pendingStudents}
                    icon={UserPlus}
                    color="bg-orange-500"
                    subtext={stats.pendingStudents > 0 ? "Action Required" : null}
                />
                <StatCard
                    title="Pending Faculty"
                    value={stats.pendingTeachers}
                    icon={Users}
                    color="bg-red-500"
                    subtext={stats.pendingTeachers > 0 ? "Action Required" : null}
                />
            </div>

            {/* Quick Actions */}
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-8 w-1.5 bg-[#C7A14A] rounded-full"></div>
                    <h2 className="text-2xl font-bold text-[#0B1C2D]">Quick Actions</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <QuickAction title="Manage Students" icon={GraduationCap} to="/admin/students" color="from-blue-500 to-blue-600" />
                    <QuickAction title="Manage Teachers" icon={School} to="/admin/teachers" color="from-emerald-500 to-emerald-600" />
                    <QuickAction title="Timetable" icon={Clock} to="/admin/notices" color="from-purple-500 to-purple-600" />
                    <QuickAction title="Settings" icon={Settings} to="/admin/settings" color="from-gray-500 to-gray-600" />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

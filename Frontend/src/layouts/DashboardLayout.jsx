
import { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Menu, X, Home, Users, BookOpen, Settings, Bell, User, LogOut, ChevronRight, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SidebarLink = ({ to, icon: Icon, label, onClick }) => {
    const location = useLocation();
    const isActive = location.pathname.startsWith(to);

    return (
        <Link
            to={to}
            onClick={onClick}
            className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 overflow-hidden ${isActive ? 'text-white shadow-lg shadow-[var(--color-primary)]/30' : 'text-gray-600 hover:bg-gray-50'}`}
        >
            {isActive && (
                <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[var(--color-primary)] z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            )}
            <Icon size={20} className={`relative z-10 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-[var(--color-primary)]'}`} />
            <span className={`relative z-10 font-medium ${isActive ? 'text-white' : 'group-hover:text-gray-900'}`}>{label}</span>
            {isActive && <ChevronRight size={16} className="relative z-10 ml-auto text-[var(--color-accent)]" />}
        </Link>
    );
};

const DashboardLayout = () => {
    const { user, logout } = useAuth();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const adminLinks = [
        { to: '/admin/dashboard', icon: Home, label: 'Overview' },
        { to: '/admin/teachers', icon: Users, label: 'Teachers' },
        { to: '/admin/students', icon: BookOpen, label: 'Students' },
        { to: '/admin/notices', icon: Bell, label: 'Notices' },
        { to: '/admin/timetable', icon: Calendar, label: 'Timetable' },
        { to: '/admin/settings', icon: Settings, label: 'Settings' },
    ];

    const teacherLinks = [
        { to: '/teacher/dashboard', icon: Home, label: 'Dashboard' },
        { to: '/teacher/notices', icon: Bell, label: 'Notices' },
        { to: '/teacher/profile', icon: User, label: 'Profile' },
    ];

    const studentLinks = [
        { to: '/student/dashboard', icon: Home, label: 'Dashboard' },
        { to: '/student/notices', icon: Bell, label: 'Notices' },
        { to: '/student/profile', icon: User, label: 'Profile' },
    ];

    const links = user?.role === 'admin' ? adminLinks : user?.role === 'teacher' ? teacherLinks : studentLinks;

    return (
        <div className="flex h-screen bg-[#F8F6F2]">
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} onClick={toggleSidebar} className="fixed inset-0 bg-black z-40 lg:hidden" />
                )}
            </AnimatePresence>

            <motion.aside
                className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white/80 backdrop-blur-xl border-r border-white/20 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} shadow-2xl lg:shadow-none`}
            >
                <div className="h-full flex flex-col p-4">
                    <div className="p-4 mb-6 flex items-center justify-between bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-2xl text-white shadow-lg">
                        <div>
                            <h1 className="text-xl font-bold tracking-tight">EduManage</h1>
                            <p className="text-xs text-[var(--color-accent)] font-medium tracking-wide">COLLEGE PORTAL</p>
                        </div>
                        <button onClick={toggleSidebar} className="lg:hidden p-1 rounded-md hover:bg-white/10"><X size={20} /></button>
                    </div>

                    <nav className="flex-1 space-y-2 overflow-y-auto px-2">
                        {links.map((link) => (
                            <SidebarLink key={link.to} {...link} onClick={() => setIsSidebarOpen(false)} />
                        ))}
                    </nav>

                    <div className="mt-auto pt-4 border-t border-gray-100 px-2">
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--color-accent)] to-[var(--color-accent-light)] text-white flex items-center justify-center font-bold shadow-inner">
                                {user?.name?.[0] || 'U'}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-semibold text-sm text-[var(--color-primary)] truncate">{user?.name}</p>
                                <p className="text-xs text-gray-500 truncate capitalize">{user?.role} Account</p>
                            </div>
                        </div>
                        <button onClick={logout} className="w-full flex items-center justify-center gap-2 text-red-600 text-sm font-medium hover:bg-red-50 py-3 rounded-xl transition-colors">
                            <LogOut size={16} /> Logout
                        </button>
                    </div>
                </div>
            </motion.aside>

            <div className="flex-1 flex flex-col overflow-hidden relative">
                <header className="bg-white/80 backdrop-blur-md border-b h-16 flex items-center justify-between px-6 lg:px-8 z-20 sticky top-0">
                    <button onClick={toggleSidebar} className="lg:hidden p-2 -ml-2 rounded-lg text-gray-600 hover:bg-gray-100"><Menu size={24} /></button>
                    <div className="flex items-center gap-4 ml-auto">
                        <div className="text-sm font-medium text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
                            Welcome, <span className="text-[var(--color-primary)] font-bold">{user?.name}</span>
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-6 lg:p-8 relative">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;

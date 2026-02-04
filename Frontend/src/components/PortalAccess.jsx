import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { UserCog, GraduationCap, School } from 'lucide-react';
import GridBackground from './GridBackground';

const PortalCard = ({ title, icon: Icon, role, description }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            whileHover={{ y: -8 }}
            className={`relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group overflow-hidden`}
        >
            {/* Premium Gold Gradient Decoration */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#C7A14A]/10 to-[#F8F6F2] rounded-bl-[100px] -mr-6 -mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-125`} />

            <div className={`relative mb-6`}>
                <div className={`w-20 h-20 rounded-2xl bg-[#0B1C2D] flex items-center justify-center text-[#C7A14A] shadow-lg shadow-[#0B1C2D]/20 transform group-hover:rotate-6 transition-transform duration-300`}>
                    <Icon size={32} strokeWidth={1.5} />
                </div>
            </div>

            <h3 className="text-2xl font-bold text-[#0B1C2D] mb-3">{title}</h3>
            <p className="text-gray-500 mb-8 leading-relaxed text-sm px-2">{description}</p>

            <div className="w-full space-y-3 mt-auto relative z-10">
                <button
                    onClick={() => navigate(`/login?role=${role}&mode=login`)}
                    className={`w-full py-3.5 rounded-xl font-bold text-[#F8F6F2] bg-[#0B1C2D] hover:bg-[#132840] shadow-md hover:shadow-lg transition-all transform active:scale-95 border border-[#0B1C2D]`}
                >
                    Login to Dashboard
                </button>
                {role !== 'admin' && (
                    <button
                        onClick={() => navigate(`/login?role=${role}&mode=register`)}
                        className={`w-full py-3.5 rounded-xl font-bold bg-white border border-[#0B1C2D] text-[#0B1C2D] hover:bg-[#F8F6F2] transition-all flex items-center justify-center gap-2`}
                    >
                        Register New Account
                    </button>
                )}
            </div>
        </motion.div>
    );
};

const PortalAccess = () => {
    return (
        <GridBackground className="py-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold mb-4 border border-yellow-200">Digital Campus</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0B1C2D] mb-4">Select Your Portal</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Seamlessly access your personalized dashboard to manage academics, schedules, and administrative tasks.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    <PortalCard
                        title="Student Zone"
                        role="student"
                        icon={GraduationCap}
                        description="Access your timetable, exam results, digital library, and manage your student profile."
                    />
                    <PortalCard
                        title="Faculty Hub"
                        role="teacher"
                        icon={School}
                        description="Manage attendance, upload marks, share study materials, and track student progress."
                    />
                    <PortalCard
                        title="Admin Control"
                        role="admin"
                        icon={UserCog}
                        description="Full administrative access to manage users, notices, schedules, and site configurations."
                    />
                </div>
            </div>
        </GridBackground>
    );
};

export default PortalAccess;

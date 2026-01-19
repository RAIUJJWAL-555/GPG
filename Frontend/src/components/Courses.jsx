import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassIcons from './GlassIcons';
import { motion } from 'framer-motion';

// Course Icons as SVGs
const CivilIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
    </svg>
);

const ITIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
    </svg>
);

const ElectronicsIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 2v2h1v14a4 4 0 0 0 4 4 4 4 0 0 0 4-4V4h1V2H7zm4 14c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm2-4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm0-4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
    </svg>
);

const MechanicalIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
    </svg>
);

const InteriorIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 10.78V8c0-1.65-1.35-3-3-3h-2c0-1.65-1.35-3-3-3H5C3.35 2 2 3.35 2 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-3c1.65 0 3-1.35 3-3v-2.22z" />
    </svg>
);

const MassCommIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
    </svg>
);

const Courses = () => {
    const navigate = useNavigate();

    const courses = [
        {
            id: 'civil',
            icon: <CivilIcon />,
            color: 'orange',
            label: 'Civil Engineering',
            description: 'Build the future infrastructure'
        },
        {
            id: 'it',
            icon: <ITIcon />,
            color: 'blue',
            label: 'Information Technology',
            description: 'Master digital technologies'
        },
        {
            id: 'electronics',
            icon: <ElectronicsIcon />,
            color: 'purple',
            label: 'Electronics Engineering',
            description: 'Innovate with electronics'
        },
        {
            id: 'mechanical',
            icon: <MechanicalIcon />,
            color: 'red',
            label: 'Mechanical Engineering',
            description: 'Design mechanical systems'
        },
        {
            id: 'interior',
            icon: <InteriorIcon />,
            color: 'green',
            label: 'Interior Design',
            description: 'Create beautiful spaces'
        },
        {
            id: 'masscomm',
            icon: <MassCommIcon />,
            color: 'indigo',
            label: 'Mass Communication',
            description: 'Master media & journalism'
        },
    ];

    const handleCourseClick = (courseId) => {
        navigate(`/course/${courseId}`);
    };

    return (
        <section className="py-20 px-4" style={{ backgroundColor: '#0B1C2D' }}>
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span
                        className="inline-block text-sm font-medium tracking-widest uppercase mb-4 px-4 py-2 rounded-full"
                        style={{
                            color: '#C7A14A',
                            backgroundColor: 'rgba(199, 161, 74, 0.1)',
                            border: '1px solid rgba(199, 161, 74, 0.3)'
                        }}
                    >
                        📚 Programs Offered
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: '#F8F6F2' }}>
                        Our <span style={{ color: '#C7A14A' }}>Courses</span>
                    </h2>
                    <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
                        Explore our diverse range of diploma programs designed to shape industry-ready professionals
                    </p>
                    <div className="w-24 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: '#C7A14A' }} />
                </motion.div>

                {/* Glass Icons Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                    style={{ minHeight: '400px' }}
                >
                    <div className="grid gap-12 grid-cols-2 md:grid-cols-3 mx-auto py-8 max-w-4xl">
                        {courses.map((course, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                onClick={() => handleCourseClick(course.id)}
                                className="flex flex-col items-center cursor-pointer group"
                            >
                                <div
                                    className="relative w-24 h-24 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-2xl"
                                    style={{
                                        background: course.color === 'orange' ? 'linear-gradient(135deg, #C7A14A, #F59E0B)' :
                                            course.color === 'blue' ? 'linear-gradient(135deg, #3B82F6, #1D4ED8)' :
                                                course.color === 'purple' ? 'linear-gradient(135deg, #8B5CF6, #6D28D9)' :
                                                    course.color === 'red' ? 'linear-gradient(135deg, #EF4444, #DC2626)' :
                                                        course.color === 'green' ? 'linear-gradient(135deg, #10B981, #059669)' :
                                                            'linear-gradient(135deg, #6366F1, #4F46E5)',
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                                    }}
                                >
                                    {/* Glass effect overlay */}
                                    <div
                                        className="absolute inset-0 rounded-2xl opacity-30"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%)'
                                        }}
                                    />
                                    <span className="text-white relative z-10">
                                        {course.icon}
                                    </span>
                                </div>
                                <h3
                                    className="mt-4 text-center text-sm md:text-base font-semibold transition-colors duration-300 group-hover:text-[#C7A14A]"
                                    style={{ color: '#F8F6F2' }}
                                >
                                    {course.label}
                                </h3>
                                <p
                                    className="text-xs text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ color: '#9CA3AF' }}
                                >
                                    {course.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-8"
                >
                    <button
                        onClick={() => navigate('/courses')}
                        className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        style={{
                            backgroundColor: '#C7A14A',
                            color: '#0B1C2D'
                        }}
                    >
                        View All Courses →
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Courses;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Modern Course Icons with enhanced styling
const CivilIcon = () => (
    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
    </svg>
);

const ITIcon = () => (
    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
    </svg>
);

const ElectronicsIcon = () => (
    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 2v2h1v14a4 4 0 0 0 4 4 4 4 0 0 0 4-4V4h1V2H7zm4 14c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm2-4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm0-4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
    </svg>
);

const MechanicalIcon = () => (
    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
    </svg>
);

const InteriorIcon = () => (
    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 10.78V8c0-1.65-1.35-3-3-3h-2c0-1.65-1.35-3-3-3H5C3.35 2 2 3.35 2 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-3c1.65 0 3-1.35 3-3v-2.22z" />
    </svg>
);

const MassCommIcon = () => (
    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
    </svg>
);

const Courses = () => {
    const navigate = useNavigate();

    const courses = [
        {
            id: 'civil',
            icon: <CivilIcon />,
            gradient: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
            shadowColor: 'rgba(255, 107, 53, 0.4)',
            label: 'Civil Engineering',
            description: 'Build the future infrastructure',
            bgPattern: '🏗️'
        },
        {
            id: 'it',
            icon: <ITIcon />,
            gradient: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
            shadowColor: 'rgba(79, 70, 229, 0.4)',
            label: 'Information Technology',
            description: 'Master digital technologies',
            bgPattern: '💻'
        },
        {
            id: 'electronics',
            icon: <ElectronicsIcon />,
            gradient: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
            shadowColor: 'rgba(236, 72, 153, 0.4)',
            label: 'Electronics Engineering',
            description: 'Innovate with electronics',
            bgPattern: '⚡'
        },
        {
            id: 'mechanical',
            icon: <MechanicalIcon />,
            gradient: 'linear-gradient(135deg, #EF4444 0%, #F97316 100%)',
            shadowColor: 'rgba(239, 68, 68, 0.4)',
            label: 'Mechanical Engineering',
            description: 'Design mechanical systems',
            bgPattern: '⚙️'
        },
        {
            id: 'interior',
            icon: <InteriorIcon />,
            gradient: 'linear-gradient(135deg, #10B981 0%, #14B8A6 100%)',
            shadowColor: 'rgba(16, 185, 129, 0.4)',
            label: 'Interior Design',
            description: 'Create beautiful spaces',
            bgPattern: '🎨'
        },
        {
            id: 'masscomm',
            icon: <MassCommIcon />,
            gradient: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
            shadowColor: 'rgba(59, 130, 246, 0.4)',
            label: 'Mass Communication',
            description: 'Master media & journalism',
            bgPattern: '📡'
        },
    ];

    const handleCourseClick = (courseId) => {
        navigate(`/course/${courseId}`);
    };

    return (
        <section className="relative py-24 px-4 overflow-hidden" style={{ backgroundColor: '#0B1C2D' }}>
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.03, 0.05, 0.03],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-1/2 -left-1/4 w-96 h-96 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(199, 161, 74, 0.15) 0%, transparent 70%)',
                        filter: 'blur(60px)'
                    }}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.03, 0.06, 0.03],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute -bottom-1/2 -right-1/4 w-96 h-96 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)',
                        filter: 'blur(60px)'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase mb-6 px-6 py-3 rounded-full backdrop-blur-sm"
                        style={{
                            color: '#C7A14A',
                            backgroundColor: 'rgba(199, 161, 74, 0.08)',
                            border: '1.5px solid rgba(199, 161, 74, 0.25)',
                            boxShadow: '0 4px 20px rgba(199, 161, 74, 0.1)'
                        }}
                    >
                        <span className="text-xl">📚</span>
                        <span>Programs Offered</span>
                    </motion.span>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                        style={{ color: '#F8F6F2' }}
                    >
                        Explore Our{' '}
                        <span 
                            className="relative inline-block"
                            style={{ color: '#C7A14A' }}
                        >
                            Courses
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                                style={{
                                    background: 'linear-gradient(90deg, transparent, #C7A14A, transparent)',
                                    transformOrigin: 'left'
                                }}
                            />
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: '#9CA3AF' }}
                    >
                        Discover world-class diploma programs crafted to transform passionate learners into industry leaders
                    </motion.p>
                </motion.div>

                {/* Modern Course Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {courses.map((course, index) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.6, 
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                            onClick={() => handleCourseClick(course.id)}
                            className="group cursor-pointer"
                        >
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="relative h-full rounded-3xl p-8 overflow-hidden"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                                }}
                            >
                                {/* Animated gradient background on hover */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: course.gradient,
                                        opacity: 0.05
                                    }}
                                />

                                {/* Background Pattern */}
                                <div 
                                    className="absolute top-4 right-4 text-6xl opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                                >
                                    {course.bgPattern}
                                </div>

                                {/* Icon Container */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 overflow-hidden"
                                    style={{
                                        background: course.gradient,
                                        boxShadow: `0 10px 40px ${course.shadowColor}`
                                    }}
                                >
                                    {/* Animated shine effect */}
                                    <motion.div
                                        animate={{
                                            x: ['-100%', '100%']
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatDelay: 3,
                                            ease: "easeInOut"
                                        }}
                                        className="absolute inset-0"
                                        style={{
                                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
                                        }}
                                    />
                                    
                                    {/* Glass overlay */}
                                    <div
                                        className="absolute inset-0 rounded-2xl"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 60%)'
                                        }}
                                    />
                                    
                                    <span className="text-white relative z-10">
                                        {course.icon}
                                    </span>
                                </motion.div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3
                                        className="text-xl font-bold mb-3 group-hover:text-[#C7A14A] transition-colors duration-300"
                                        style={{ color: '#F8F6F2' }}
                                    >
                                        {course.label}
                                    </h3>
                                    
                                    <p
                                        className="text-sm leading-relaxed mb-6"
                                        style={{ color: '#9CA3AF' }}
                                    >
                                        {course.description}
                                    </p>

                                    {/* Learn More Link */}
                                    <motion.div
                                        className="flex items-center gap-2 text-sm font-semibold"
                                        style={{ color: '#C7A14A' }}
                                    >
                                        <span>Learn More</span>
                                        <motion.svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </motion.svg>
                                    </motion.div>
                                </div>

                                {/* Bottom gradient line */}
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background: course.gradient
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <motion.button
                        onClick={() => navigate('/courses')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-10 py-4 rounded-full font-bold text-lg overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, #C7A14A 0%, #F59E0B 100%)',
                            color: '#0B1C2D',
                            boxShadow: '0 10px 40px rgba(199, 161, 74, 0.3)'
                        }}
                    >
                        {/* Animated background */}
                        <motion.div
                            className="absolute inset-0"
                            animate={{
                                background: [
                                    'linear-gradient(135deg, #C7A14A 0%, #F59E0B 100%)',
                                    'linear-gradient(135deg, #F59E0B 0%, #C7A14A 100%)',
                                    'linear-gradient(135deg, #C7A14A 0%, #F59E0B 100%)'
                                ]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        
                        <span className="relative z-10 flex items-center gap-2">
                            View All Courses
                            <motion.svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                animate={{ x: [0, 4, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </motion.svg>
                        </span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Courses;

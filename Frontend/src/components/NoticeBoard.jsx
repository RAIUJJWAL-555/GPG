import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GridBackground from './GridBackground';

const NoticeBoard = () => {
    const [activeNotice, setActiveNotice] = useState(0);

    const notices = [
        {
            id: 1,
            title: "Admission Open 2026-27",
            date: "18 Jan 2026",
            category: "Admission",
            isNew: true,
            description: "Applications are invited for admission to various courses for the academic session 2026-27. Last date to apply: 28th Feb 2026.",
            icon: "📚"
        },
        {
            id: 2,
            title: "Annual Function Schedule",
            date: "15 Jan 2026",
            category: "Event",
            isNew: true,
            description: "Annual function will be held on 25th February 2026. All students are requested to participate actively.",
            icon: "🎭"
        },
        {
            id: 3,
            title: "Semester Exam Timetable",
            date: "12 Jan 2026",
            category: "Exam",
            isNew: false,
            description: "Semester examination timetable for all courses has been published. Students can download from the exam portal.",
            icon: "📝"
        },
        {
            id: 4,
            title: "Scholarship Applications",
            date: "10 Jan 2026",
            category: "Scholarship",
            isNew: false,
            description: "Government scholarship applications are now open for eligible students. Submit documents before 31st January.",
            icon: "🎓"
        },
        {
            id: 5,
            title: "Sports Day Announcement",
            date: "08 Jan 2026",
            category: "Sports",
            isNew: false,
            description: "Annual Sports Day will be celebrated on 20th February. Registration for various sports events is now open.",
            icon: "🏆"
        },
        {
            id: 6,
            title: "Library Timing Update",
            date: "05 Jan 2026",
            category: "General",
            isNew: false,
            description: "Library will remain open from 8 AM to 8 PM during the examination period for student convenience.",
            icon: "📖"
        }
    ];

    const getCategoryColor = (category) => {
        const colors = {
            'Admission': '#10B981',
            'Event': '#8B5CF6',
            'Exam': '#EF4444',
            'Scholarship': '#F59E0B',
            'Sports': '#3B82F6',
            'General': '#6B7280'
        };
        return colors[category] || '#C7A14A';
    };

    return (
        <GridBackground className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span
                        className="inline-block text-sm font-medium tracking-widest uppercase mb-4 px-4 py-2 rounded-full"
                        style={{
                            color: '#C7A14A',
                            backgroundColor: 'rgba(199, 161, 74, 0.1)',
                            border: '1px solid rgba(199, 161, 74, 0.3)'
                        }}
                    >
                        📢 Latest Updates
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#0B1C2D' }}>
                        Notice <span style={{ color: '#C7A14A' }}>Board</span>
                    </h2>
                    <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
                        Stay updated with the latest announcements, events, and important information
                    </p>
                    <div className="w-24 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: '#C7A14A' }} />
                </motion.div>

                {/* Notice Board Layout */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Notice Display */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <div
                            className="rounded-3xl p-8 h-full relative overflow-hidden"
                            style={{
                                backgroundColor: '#0B1C2D',
                                boxShadow: '0 25px 50px -12px rgba(11, 28, 45, 0.25)'
                            }}
                        >
                            {/* Decorative elements */}
                            <div
                                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10"
                                style={{ backgroundColor: '#C7A14A' }}
                            />
                            <div
                                className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl opacity-10"
                                style={{ backgroundColor: '#C7A14A' }}
                            />

                            {/* Header */}
                            <div className="flex items-center justify-between mb-6 relative z-10">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                                        style={{ backgroundColor: 'rgba(199, 161, 74, 0.2)' }}
                                    >
                                        📋
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold" style={{ color: '#F8F6F2' }}>Featured Notice</h3>
                                        <p className="text-sm" style={{ color: '#9CA3AF' }}>Important announcement</p>
                                    </div>
                                </div>
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{
                                        backgroundColor: getCategoryColor(notices[activeNotice].category),
                                        color: 'white'
                                    }}
                                >
                                    {notices[activeNotice].category}
                                </span>
                            </div>

                            {/* Active Notice Content */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeNotice}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative z-10"
                                >
                                    <div className="flex items-start gap-4 mb-6">
                                        <span className="text-5xl">{notices[activeNotice].icon}</span>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <h4 className="text-2xl md:text-3xl font-bold" style={{ color: '#F8F6F2' }}>
                                                    {notices[activeNotice].title}
                                                </h4>
                                                {notices[activeNotice].isNew && (
                                                    <span
                                                        className="px-2 py-0.5 rounded text-xs font-bold animate-pulse"
                                                        style={{ backgroundColor: '#C7A14A', color: '#0B1C2D' }}
                                                    >
                                                        NEW
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm" style={{ color: '#9CA3AF' }}>
                                                📅 Published: {notices[activeNotice].date}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-lg leading-relaxed mb-8" style={{ color: '#D1D5DB' }}>
                                        {notices[activeNotice].description}
                                    </p>
                                    <button
                                        className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                                        style={{
                                            backgroundColor: '#C7A14A',
                                            color: '#0B1C2D'
                                        }}
                                    >
                                        Read More →
                                    </button>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation Dots */}
                            <div className="flex justify-center gap-2 mt-8 relative z-10">
                                {notices.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveNotice(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeNotice ? 'w-8' : ''
                                            }`}
                                        style={{
                                            backgroundColor: index === activeNotice ? '#C7A14A' : 'rgba(255,255,255,0.3)'
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Notice List */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: '#0B1C2D' }}>
                            <span>📌</span> All Notices
                        </h3>

                        <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                            {notices.map((notice, index) => (
                                <motion.div
                                    key={notice.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    onClick={() => setActiveNotice(index)}
                                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border-2 ${index === activeNotice
                                        ? 'border-[#C7A14A] shadow-lg'
                                        : 'border-transparent hover:border-[#C7A14A]/30'
                                        }`}
                                    style={{
                                        backgroundColor: index === activeNotice ? 'white' : 'rgba(255,255,255,0.5)'
                                    }}
                                >
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">{notice.icon}</span>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h4
                                                    className="font-semibold text-sm line-clamp-1"
                                                    style={{ color: '#0B1C2D' }}
                                                >
                                                    {notice.title}
                                                </h4>
                                                {notice.isNew && (
                                                    <span
                                                        className="px-1.5 py-0.5 rounded text-[10px] font-bold"
                                                        style={{ backgroundColor: '#C7A14A', color: '#0B1C2D' }}
                                                    >
                                                        NEW
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span
                                                    className="text-xs px-2 py-0.5 rounded-full"
                                                    style={{
                                                        backgroundColor: getCategoryColor(notice.category) + '20',
                                                        color: getCategoryColor(notice.category)
                                                    }}
                                                >
                                                    {notice.category}
                                                </span>
                                                <span className="text-xs" style={{ color: '#9CA3AF' }}>
                                                    {notice.date}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* View All Button */}
                        <button
                            className="w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg mt-4"
                            style={{
                                backgroundColor: '#0B1C2D',
                                color: '#F8F6F2'
                            }}
                        >
                            View All Notices →
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Custom Scrollbar Styles */}
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(199, 161, 74, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #C7A14A;
                    border-radius: 10px;
                }
                .line-clamp-1 {
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </GridBackground>
    );
};

export default NoticeBoard;

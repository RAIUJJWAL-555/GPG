import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import GridBackground from '../components/GridBackground';
import { motion } from 'framer-motion';

const CoursesPage = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('all');

    const courses = [
        // PG Diploma Courses
        {
            id: 'pgdwd',
            name: 'P G Diploma in Web Designing',
            category: 'pg-diploma',
            duration: '1 Year',
            intake: '75',
            eligibility: 'Graduation Passed',
            icon: '🌐',
            color: '#3B82F6'
        },
        {
            id: 'pgdchn',
            name: 'P G Diploma in Computer Hardware & Networking',
            category: 'pg-diploma',
            duration: '1 Year',
            intake: '75',
            eligibility: 'Graduation Passed',
            icon: '🖥️',
            color: '#8B5CF6'
        },
        {
            id: 'pgdiot',
            name: 'PG Diploma in Internet of Things',
            category: 'pg-diploma',
            duration: '1 Year',
            intake: '75',
            eligibility: 'Graduation Passed',
            icon: '📡',
            color: '#06B6D4'
        },
        {
            id: 'pgdcs',
            name: 'PG Diploma in Cyber Security',
            category: 'pg-diploma',
            duration: '1 Year',
            intake: '75',
            eligibility: 'Graduation Passed',
            icon: '🔐',
            color: '#EF4444'
        },
        // Diploma Courses
        {
            id: 'masscomm',
            name: 'Diploma in Journalism and Mass Communication',
            category: 'diploma',
            duration: '2 Years',
            intake: '75',
            eligibility: 'Graduation Passed',
            icon: '📺',
            color: '#F59E0B'
        },
        {
            id: 'civil',
            name: 'Civil Engineering',
            category: 'diploma',
            duration: '3 Years',
            intake: '67',
            eligibility: 'High School 35% With Science and Math',
            icon: '🏗️',
            color: '#F97316'
        },
        {
            id: 'electronics',
            name: 'Electronics Engineering',
            category: 'diploma',
            duration: '3 Years',
            intake: '67',
            eligibility: 'High School 35% With Science and Math',
            icon: '📡',
            color: '#A855F7'
        },
        {
            id: 'interior',
            name: 'Interior Design and Decoration',
            category: 'diploma',
            duration: '3 Years',
            intake: '67',
            eligibility: 'High School 35% With Science and Math',
            icon: '🎨',
            color: '#10B981'
        },
        {
            id: 'mech-auto',
            name: 'Mechanical Engineering (Automobile)',
            category: 'diploma',
            duration: '3 Years',
            intake: '67',
            eligibility: 'High School 35% With Science and Math',
            icon: '🚗',
            color: '#EF4444'
        },
        {
            id: 'mech-cad',
            name: 'Mechanical Engineering (Computer Aided Design)',
            category: 'diploma',
            duration: '3 Years',
            intake: '67',
            eligibility: 'High School 35% With Science and Math',
            icon: '⚙️',
            color: '#6366F1'
        },
        {
            id: 'mech-prod',
            name: 'Mechanical Engineering (Production)',
            category: 'diploma',
            duration: '3 Years',
            intake: '67',
            eligibility: 'High School 35% With Science and Math',
            icon: '🔧',
            color: '#EC4899'
        },
        {
            id: 'it',
            name: 'Information Technology',
            category: 'diploma',
            duration: '3 Years',
            intake: '67',
            eligibility: 'High School 35% With Science and Math',
            icon: '💻',
            color: '#3B82F6'
        },
    ];

    const categories = [
        { id: 'all', label: 'All Courses', icon: '📚' },
        { id: 'pg-diploma', label: 'PG Diploma', icon: '🎓' },
        { id: 'diploma', label: 'Diploma', icon: '📜' },
    ];

    const filteredCourses = activeCategory === 'all'
        ? courses
        : courses.filter(c => c.category === activeCategory);

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#F8F6F2' }}>


            {/* Hero Section */}
            <div className="pt-40 pb-16 px-4" style={{ backgroundColor: '#0B1C2D' }}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
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
                    <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#F8F6F2' }}>
                        Our <span style={{ color: '#C7A14A' }}>Courses</span>
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
                        {courses.length} programs designed to shape industry-ready professionals.
                        Choose your path to a successful career.
                    </p>
                    <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#C7A14A' }} />
                </motion.div>
            </div>

            {/* Category Filter */}
            <GridBackground
                className="py-8 px-4 sticky top-20 z-40"
                showGrid={false}
                style={{ borderBottom: '1px solid rgba(11, 28, 45, 0.1)' }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat.id ? 'scale-105 shadow-lg' : 'hover:scale-105'
                                    }`}
                                style={{
                                    backgroundColor: activeCategory === cat.id ? '#C7A14A' : 'white',
                                    color: activeCategory === cat.id ? '#0B1C2D' : '#0B1C2D',
                                    border: '1px solid rgba(199, 161, 74, 0.3)',
                                    position: 'relative',
                                    zIndex: 10
                                }}
                            >
                                <span className="mr-2">{cat.icon}</span>
                                {cat.label}
                                <span
                                    className="ml-2 px-2 py-0.5 rounded-full text-xs"
                                    style={{
                                        backgroundColor: activeCategory === cat.id ? 'rgba(11, 28, 45, 0.2)' : 'rgba(199, 161, 74, 0.2)',
                                        color: activeCategory === cat.id ? '#0B1C2D' : '#C7A14A'
                                    }}
                                >
                                    {cat.id === 'all' ? courses.length : courses.filter(c => c.category === cat.id).length}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </GridBackground>

            {/* Courses Grid */}
            <GridBackground className="py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredCourses.map((course, index) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                onClick={() => navigate(`/course/${course.id}`)}
                                className="group cursor-pointer rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                style={{ position: 'relative', zIndex: 10 }}
                            >
                                {/* Header with Icon */}
                                <div
                                    className="p-6 flex items-center gap-4"
                                    style={{ backgroundColor: course.color }}
                                >
                                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                        {course.icon}
                                    </div>
                                    <div className="flex-1">
                                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-white/20 text-white uppercase">
                                            {course.category.replace('-', ' ')}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="text-lg font-bold mb-3 line-clamp-2" style={{ color: '#0B1C2D', minHeight: '56px' }}>
                                        {course.name}
                                    </h3>

                                    {/* Info Grid */}
                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(199, 161, 74, 0.1)' }}>
                                            <p className="text-xs" style={{ color: '#6B7280' }}>Duration</p>
                                            <p className="font-semibold text-sm" style={{ color: '#0B1C2D' }}>{course.duration}</p>
                                        </div>
                                        <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(199, 161, 74, 0.1)' }}>
                                            <p className="text-xs" style={{ color: '#6B7280' }}>Intake</p>
                                            <p className="font-semibold text-sm" style={{ color: '#0B1C2D' }}>{course.intake} Seats</p>
                                        </div>
                                    </div>

                                    {/* Eligibility */}
                                    <div className="p-3 rounded-lg mb-4" style={{ backgroundColor: 'rgba(11, 28, 45, 0.05)' }}>
                                        <p className="text-xs mb-1" style={{ color: '#6B7280' }}>📋 Eligibility</p>
                                        <p className="text-xs font-medium" style={{ color: '#0B1C2D' }}>{course.eligibility}</p>
                                    </div>

                                    {/* View Button */}
                                    <button
                                        className="w-full py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 group-hover:shadow-lg"
                                        style={{
                                            backgroundColor: '#0B1C2D',
                                            color: '#F8F6F2'
                                        }}
                                    >
                                        View Details →
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </GridBackground>

            {/* Stats */}
            <section className="py-16 px-4" style={{ backgroundColor: '#0B1C2D' }}>
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { value: '12', label: 'Total Courses' },
                        { value: '4', label: 'PG Diploma Programs' },
                        { value: '8', label: 'Diploma Programs' },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#C7A14A' }}>{stat.value}</h3>
                            <p style={{ color: '#9CA3AF' }}>{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <GridBackground className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
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
                            ✨ Our Excellence
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#0B1C2D' }}>
                            Why Choose <span style={{ color: '#C7A14A' }}>Our Programs?</span>
                        </h2>
                        <p className="text-lg max-w-3xl mx-auto mb-6" style={{ color: '#6B7280' }}>
                            We are committed to providing world-class technical education that combines academic excellence 
                            with practical industry experience. Our programs are designed to transform students into skilled 
                            professionals ready to excel in their chosen fields.
                        </p>
                        <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#C7A14A' }} />
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { 
                                icon: '🎓', 
                                title: 'AICTE Approved Programs', 
                                desc: 'All our courses are approved by the All India Council for Technical Education (AICTE) and recognized by the Government of India, ensuring your degree holds national and international value.',
                                gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                            },
                            { 
                                icon: '👨‍🏫', 
                                title: 'Expert Faculty Team', 
                                desc: 'Learn from industry veterans and experienced academicians with decades of combined expertise. Our faculty members bring real-world insights and cutting-edge knowledge to every classroom.',
                                gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                            },
                            { 
                                icon: '🔬', 
                                title: 'State-of-the-Art Labs', 
                                desc: 'Access modern laboratories equipped with the latest technology and industry-standard tools. Our facilities provide hands-on experience with equipment used in leading companies worldwide.',
                                gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                            },
                            { 
                                icon: '💼', 
                                title: 'Comprehensive Placement Support', 
                                desc: 'Benefit from our dedicated placement cell that provides 100% placement assistance, career counseling, interview preparation, and connections with top recruiters across various industries.',
                                gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
                            },
                            { 
                                icon: '🏆', 
                                title: 'Industry Partnerships', 
                                desc: 'Collaborate with leading companies through internships, live projects, and industry visits. Our strong corporate partnerships ensure you gain practical exposure and networking opportunities.',
                                gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
                            },
                            { 
                                icon: '📚', 
                                title: 'Comprehensive Curriculum', 
                                desc: 'Study a carefully crafted curriculum that balances theoretical knowledge with practical skills. Regular updates ensure you learn the most current technologies and industry best practices.',
                                gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                                style={{ 
                                    position: 'relative', 
                                    zIndex: 10,
                                    border: '1px solid rgba(199, 161, 74, 0.1)'
                                }}
                            >
                                {/* Gradient accent bar */}
                                <div 
                                    className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                                    style={{ background: item.gradient }}
                                />
                                
                                {/* Icon with gradient background */}
                                <div 
                                    className="w-16 h-16 rounded-xl flex items-center justify-center text-4xl mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                                    style={{ 
                                        background: item.gradient,
                                        boxShadow: '0 4px 15px rgba(199, 161, 74, 0.2)'
                                    }}
                                >
                                    {item.icon}
                                </div>
                                
                                <h3 className="text-xl font-bold mb-3" style={{ color: '#0B1C2D' }}>
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mt-16 p-8 rounded-2xl"
                        style={{
                            background: 'linear-gradient(135deg, #0B1C2D 0%, #1a3a52 100%)',
                            position: 'relative',
                            zIndex: 10
                        }}
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { value: '25+', label: 'Years of Excellence' },
                                { value: '5000+', label: 'Alumni Network' },
                                { value: '95%', label: 'Placement Rate' },
                                { value: '50+', label: 'Industry Partners' },
                            ].map((stat, index) => (
                                <div key={index} className="group">
                                    <h3 
                                        className="text-4xl md:text-5xl font-bold mb-2 transition-transform duration-300 group-hover:scale-110" 
                                        style={{ color: '#C7A14A' }}
                                    >
                                        {stat.value}
                                    </h3>
                                    <p className="text-sm md:text-base" style={{ color: '#9CA3AF' }}>
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </GridBackground>

            <Footer />
        </div>
    );
};

export default CoursesPage;

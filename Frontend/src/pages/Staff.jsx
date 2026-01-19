import Header from '@/Section/Header';
import Footer from '@/components/Footer';
import StaffCard from '@/components/StaffCard';
import StaffModal from '@/components/StaffModal';
import GridBackground from '@/components/GridBackground';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import staff images
import principle from '../assets/staffPics/principle.png';
// Civil
import civil1 from '../assets/staffPics/civil1.png';
import civil2 from '../assets/staffPics/civil2.png';
import civil3 from '../assets/staffPics/civil3.png';
// IT
import it from '../assets/staffPics/it.png';
import it1 from '../assets/staffPics/it1.png';
import it3 from '../assets/staffPics/it3.png';
import it4 from '../assets/staffPics/it4.png';
import it5 from '../assets/staffPics/it5.png';
import it6 from '../assets/staffPics/it6.png';
import it7 from '../assets/staffPics/it7.png';
import it8 from '../assets/staffPics/it8.png';
import it9 from '../assets/staffPics/it9.png';
import it10 from '../assets/staffPics/it10.png';
import abhiSir from '../assets/staffPics/abhisekhsir.png'
// Electronics
import electronics from '../assets/staffPics/electronics.png';
import electronics1 from '../assets/staffPics/electronics1.png';
import electronics2 from '../assets/staffPics/electronics2.png';
import electronics3 from '../assets/staffPics/electronics3.png';
import electronics4 from '../assets/staffPics/electronics4.png';
import electronics5 from '../assets/staffPics/electronics5.png';
import electronics8 from '../assets/staffPics/electronics8.png';
// Mechanical
import mechanical from '../assets/staffPics/Mechanical.png';
// Interior Design
import interior1 from '../assets/staffPics/Interior_Design_and_Decoration1.png';
import interior2 from '../assets/staffPics/Interior_Design_and_Decoration2.png';
// Mass Communication
import massCom from '../assets/staffPics/Mass_Communication.png';
import massCom1 from '../assets/staffPics/Mass_Communication1.png';
import massCom3 from '../assets/staffPics/Mass_Communication3.png';
// Sciences
import science from '../assets/staffPics/Faculties_of_Sciences_and_Others.png';
import science1 from '../assets/staffPics/Faculties_of_Sciences_and_Others1.png';
import science2 from '../assets/staffPics/Faculties_of_Sciences_and_Others2.png';
import science3 from '../assets/staffPics/Faculties_of_Sciences_and_Others3.png';
import science4 from '../assets/staffPics/Faculties_of_Sciences_and_Others4.png';
// Workshop Staff
import workshop from '../assets/staffPics/Workshop_Staff.png';
import workshop1 from '../assets/staffPics/Workshop_Staff1.png';
import workshop2 from '../assets/staffPics/Workshop_Staff2.png';
import workshop3 from '../assets/staffPics/Workshop_Staff3.png';
import workshop4 from '../assets/staffPics/Workshop_Staff4.png';
import workshop5 from '../assets/staffPics/Workshop_Staff5.png';
import workshop6 from '../assets/staffPics/Workshop_Staff6.png';
import workshop7 from '../assets/staffPics/Workshop_Staff7.png';
import workshop8 from '../assets/staffPics/Workshop_Staff8.png';
// Ministerial Staff
import ministerial from '../assets/staffPics/Ministerial_Staff.png';
import ministerial1 from '../assets/staffPics/Ministerial_Staff1.png';
import ministerial2 from '../assets/staffPics/Ministerial_Staff2.png';
import ministerial3 from '../assets/staffPics/Ministerial_Staff3.png';
import ministerial4 from '../assets/staffPics/Ministerial_Staff4.png';
import ministerial5 from '../assets/staffPics/Ministerial_Staff5.png';
// Class-4 Staff
import class4 from '../assets/staffPics/Class-4_Staff.png';
import class4_1 from '../assets/staffPics/Class-4_Staff1.png';
import class4_2 from '../assets/staffPics/Class-4_Staff2.png';
import class4_3 from '../assets/staffPics/Class-4_Staff3.png';
import class4_4 from '../assets/staffPics/Class-4_Staff4.png';
import class4_5 from '../assets/staffPics/Class-4_Staff5.png';

const Staff = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedStaff, setSelectedStaff] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = (staff) => {
        setSelectedStaff(staff);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedStaff(null);
    };

    // Staff data - Principal
    const leadership = [
        {
            name: "Principal",
            designation: "Principal",
            department: "Administration",
            image: principle,
            email: "principal@gpghaziabad.ac.in",
            phone: "+91 XXXXXXXXXX"
        }
    ];

    // Department-wise faculty
    const departments = [
        {
            name: "Department of Civil Engineering",
            icon: "🏗️",
            faculty: [
                { name: "Mr. Shailendra Pratap Singh", designation: "HOD", department: "Civil Engineering", image: civil1 },
                { name: "Mr. Rahul Singh", designation: "Lecturer Civil", department: "Civil Engineering", image: civil2 },
                { name: "Mrs. Garima Singh", designation: "Lecturer Civil", department: "Civil Engineering", image: civil3 },
            ]
        },
        {
            name: "Department of Information Technology",
            icon: "💻",
            faculty: [
                { name: "Ms. Fatema Siddiqua", designation: "HOD", department: "Information Technology", image: it },
                { name: "Mrs. Anamika ", designation: "Lecturer Information Technology", department: "Information Technology", image: it1 },
                { name: "Mr. Abhishek Chandra", designation: "Lecturer CHN", department: "Information Technology", image: abhiSir },
                { name: "Mr. Amit Patel", designation: "Lecturer Computer", department: "Information Technology", image: it3 },
                { name: "Mrs. Akanksha Singh", designation: "Lecturer Web Designing", department: "Information Technology", image: it4 },
                { name: "Mrs. Priyanka Bauddha", designation: "Lecturer Web Designing", department: "Information Technology", image: it5 },
                { name: "Mr. Shashank Chandra", designation: "Lecturer Web Designing", department: "Information Technology", image: it6 },
                { name: "Mr. Jai Gurudev Ji", designation: "Lecturer CHN", department: "Information Technology", image: it7 },
                { name: "Ms. Neha Chaudhary", designation: "Lecturer CHN", department: "Information Technology", image: it8 },
                { name: "Mrs. Madhu Nirwan", designation: "Computer instructor", department: "Information Technology", image: it10 },
            ]
        },
        {
            name: "Department of Electronics Engineering",
            icon: "📡",
            faculty: [
                { name: "Mr. Vivek Kumar", designation: "HOD", department: "Electronics Engineering", image: electronics },
                { name: "Mrs. Geeta Awasthi", designation: "Lecturer Electronics", department: "Electronics Engineering", image: electronics1 },
                { name: "Mrs. Alka Yadav", designation: "Lecturer Electronics", department: "Electronics Engineering", image: electronics2 },
                { name: "Mrs. Anjana Yadav", designation: "Lecturer Electronics", department: "Electronics Engineering", image: electronics3 },
                { name: "Mrs. Richa Shukla", designation: "Lecturer Electronics", department: "Electronics Engineering", image: electronics4 },
                { name: "Mrs. Ishita Pathak", designation: "Lecturer Electronics", department: "Electronics Engineering", image: electronics5 },
                { name: "Mrs. Shiwangni Chandra", designation: "Lecturer Electronics", department: "Electronics Engineering", image: electronics8 },
            ]
        },
        {
            name: "Department of Mechanical Engineering",
            icon: "⚙️",
            faculty: [
                { name: "Mrs. Naznin Khan", designation: "HOD", department: "Mechanical Engineering", image: mechanical },
            ]
        },
        {
            name: "Interior Design and Decoration",
            icon: "🎨",
            faculty: [
                { name: "Mr. Pankaj Jaiswal", designation: "Lecturer IDD", department: "Interior Design", image: interior1 },
                { name: "Mr. Mukesh Singh", designation: "Lecturer IDD", department: "Interior Design", image: interior2 },
            ]
        },
        {
            name: "Mass Communication",
            icon: "📺",
            faculty: [
                { name: "Mr. Md. Afsar Ali Raeni", designation: "Lecturer Mass Comm.", department: "Mass Communication", image: massCom },
                { name: "Ms. Sandhya Yadav", designation: "Lecturer Mass Comm.", department: "Mass Communication", image: massCom1 },
                { name: "Mrs. Surabhi Yadav", designation: "Lecturer Mass Comm.", department: "Mass Communication", image: massCom3 },
            ]
        },
        {
            name: "Faculties of Sciences and Others",
            icon: "🔬",
            faculty: [
                { name: "Faculty Member", designation: "Professor", department: "Sciences", image: science },
                { name: "Faculty Member 1", designation: "Assistant Professor", department: "Sciences", image: science1 },
                { name: "Faculty Member 2", designation: "Lecturer", department: "Sciences", image: science2 },
                { name: "Faculty Member 3", designation: "Lecturer", department: "Sciences", image: science3 },
                { name: "Faculty Member 4", designation: "Lecturer", department: "Sciences", image: science4 },
            ]
        },
        {
            name: "Workshop Staff",
            icon: "🔧",
            faculty: [
                { name: "Staff Member", designation: "Superintendent", department: "Workshop", image: workshop },
                { name: "Staff Member 1", designation: "Foreman", department: "Workshop", image: workshop1 },
                { name: "Staff Member 2", designation: "Technician", department: "Workshop", image: workshop2 },
                { name: "Staff Member 3", designation: "Technician", department: "Workshop", image: workshop3 },
                { name: "Staff Member 4", designation: "Technician", department: "Workshop", image: workshop4 },
                { name: "Staff Member 5", designation: "Helper", department: "Workshop", image: workshop5 },
                { name: "Staff Member 6", designation: "Helper", department: "Workshop", image: workshop6 },
                { name: "Staff Member 7", designation: "Helper", department: "Workshop", image: workshop7 },
                { name: "Staff Member 8", designation: "Helper", department: "Workshop", image: workshop8 },
            ]
        },
        {
            name: "Ministerial Staff",
            icon: "📋",
            faculty: [
                { name: "Staff Member", designation: "Head Clerk", department: "Administration", image: ministerial },
                { name: "Staff Member 1", designation: "Senior Clerk", department: "Administration", image: ministerial1 },
                { name: "Staff Member 2", designation: "Accountant", department: "Accounts", image: ministerial2 },
                { name: "Staff Member 3", designation: "Clerk", department: "Administration", image: ministerial3 },
                { name: "Staff Member 4", designation: "Clerk", department: "Administration", image: ministerial4 },
                { name: "Staff Member 5", designation: "Junior Clerk", department: "Administration", image: ministerial5 },
            ]
        },
        {
            name: "Class-4 Staff",
            icon: "🧹",
            faculty: [
                { name: "Staff Member", designation: "Peon", department: "Support Staff", image: class4 },
                { name: "Staff Member 1", designation: "Peon", department: "Support Staff", image: class4_1 },
                { name: "Staff Member 2", designation: "Sweeper", department: "Support Staff", image: class4_2 },
                { name: "Staff Member 3", designation: "Gardener", department: "Support Staff", image: class4_3 },
                { name: "Staff Member 4", designation: "Helper", department: "Support Staff", image: class4_4 },
                { name: "Staff Member 5", designation: "Helper", department: "Support Staff", image: class4_5 },
            ]
        }
    ];

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#0B1C2D' }}>
            <Header />

            {/* Hero Section */}
            <div className="pt-40 pb-16 px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-12"
                >
                    <span
                        className="inline-block- text-sm font-medium tracking-widest uppercase mb-4 px-4 py-2 rounded-full"
                        style={{
                            color: '#C7A14A',
                            backgroundColor: 'rgba(199, 161, 74, 0.1)',
                            border: '1px solid rgba(199, 161, 74, 0.3)'
                        }}
                    >
                        👨‍🏫 Our Team
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#F8F6F2' }}>
                        Meet Our <span style={{ color: '#C7A14A' }}>Faculty & Staff</span>
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: '#9CA3AF' }}>
                        Dedicated educators and support staff shaping the future with passion, expertise, and commitment.
                    </p>
                    <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#C7A14A' }} />
                </motion.div>
            </div>

            {/* Principal Section */}
            <GridBackground className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0B1C2D' }}>
                            Our <span style={{ color: '#C7A14A' }}>Leadership</span>
                        </h2>
                        <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: '#C7A14A' }} />
                    </motion.div>

                    <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                        {/* Principal Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            {leadership.map((staff, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    onClick={() => handleCardClick(staff)}
                                >
                                    <StaffCard {...staff} />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Principal's Message */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="max-w-2xl"
                        >
                            <div
                                className="text-center py-12 px-8 rounded-2xl relative overflow-hidden"
                                style={{ backgroundColor: 'rgba(11, 28, 45, 0.03)', border: '1px solid rgba(199, 161, 74, 0.2)' }}
                            >
                                <blockquote className="relative">
                                    <span
                                        className="absolute -top-6 -left-2 text-8xl font-serif opacity-20"
                                        style={{ color: '#C7A14A' }}
                                    >
                                        "
                                    </span>
                                    <p
                                        className="text-lg md:text-xl italic font-medium leading-relaxed relative z-10"
                                        style={{ color: '#0B1C2D' }}
                                    >
                                        Our mission is to provide a transformative educational experience that empowers students to become lifelong learners and responsible global citizens. We believe in nurturing both academic excellence and character.
                                    </p>
                                    <span
                                        className="absolute -bottom-10 -right-2 text-8xl font-serif opacity-20"
                                        style={{ color: '#C7A14A' }}
                                    >
                                        "
                                    </span>
                                    <footer className="mt-8">
                                        <div className="w-16 h-1 mx-auto mb-4 rounded-full" style={{ backgroundColor: '#C7A14A' }} />
                                        <cite className="not-italic font-bold text-lg" style={{ color: '#0B1C2D' }}>
                                            Dr. JanaBeg Loni
                                        </cite>
                                        <p
                                            className="text-sm uppercase tracking-widest mt-1 font-semibold"
                                            style={{ color: '#C7A14A' }}
                                        >
                                            Principal's Message
                                        </p>
                                    </footer>
                                </blockquote>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </GridBackground>

            {/* Department Tabs */}
            <section className="py-8 px-4 sticky top-20 z-40" style={{ backgroundColor: '#0B1C2D' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                        {departments.map((dept, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${activeTab === index
                                    ? 'scale-105 shadow-lg'
                                    : 'hover:scale-105'
                                    }`}
                                style={{
                                    backgroundColor: activeTab === index ? '#C7A14A' : 'rgba(199, 161, 74, 0.1)',
                                    color: activeTab === index ? '#0B1C2D' : '#C7A14A',
                                    border: '1px solid rgba(199, 161, 74, 0.3)'
                                }}
                            >
                                <span className="mr-1">{dept.icon}</span>
                                <span className="hidden md:inline">{dept.name.replace('Department of ', '')}</span>
                                <span className="md:hidden">{dept.name.replace('Department of ', '').split(' ')[0]}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Active Department Faculty */}
            <GridBackground className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <span className="text-4xl mb-4 block">{departments[activeTab].icon}</span>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#0B1C2D' }}>
                            {departments[activeTab].name}
                        </h2>
                        <p className="text-sm mb-4" style={{ color: '#6B7280' }}>
                            {departments[activeTab].faculty.length} Members
                        </p>
                        <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: '#C7A14A' }} />
                    </motion.div>

                    <motion.div
                        key={`faculty-${activeTab}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-wrap justify-center gap-8"
                    >
                        {departments[activeTab].faculty.map((staff, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => handleCardClick(staff)}
                            >
                                <StaffCard {...staff} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </GridBackground>

            {/* All Departments Quick View */}
            <section className="py-16 px-4" style={{ backgroundColor: '#0B1C2D' }}>
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#F8F6F2' }}>
                            All <span style={{ color: '#C7A14A' }}>Departments</span>
                        </h2>
                        <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: '#C7A14A' }} />
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {departments.map((dept, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                onClick={() => {
                                    setActiveTab(index);
                                    window.scrollTo({ top: 600, behavior: 'smooth' });
                                }}
                                className="p-4 rounded-xl text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                                style={{
                                    backgroundColor: 'rgba(199, 161, 74, 0.1)',
                                    border: '1px solid rgba(199, 161, 74, 0.2)'
                                }}
                            >
                                <span className="text-3xl block mb-2">{dept.icon}</span>
                                <h3 className="text-sm font-semibold" style={{ color: '#F8F6F2' }}>
                                    {dept.name.replace('Department of ', '')}
                                </h3>
                                <p className="text-xs mt-1" style={{ color: '#C7A14A' }}>
                                    {dept.faculty.length} Members
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4" style={{ backgroundColor: 'rgba(199, 161, 74, 0.1)' }}>
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#C7A14A' }}>
                            {departments.reduce((acc, dept) => acc + dept.faculty.length, 0) + 1}+
                        </h3>
                        <p style={{ color: '#0B1C2D' }}>Total Staff</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#C7A14A' }}>10</h3>
                        <p style={{ color: '#0B1C2D' }}>Departments</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#C7A14A' }}>50+</h3>
                        <p style={{ color: '#0B1C2D' }}>Teaching Faculty</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#C7A14A' }}>25+</h3>
                        <p style={{ color: '#0B1C2D' }}>Years Avg Experience</p>
                    </motion.div>
                </div>
            </section>

            {/* Staff Modal */}
            <StaffModal
                staff={selectedStaff}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />

            <Footer />
        </div>
    );
}

export default Staff;

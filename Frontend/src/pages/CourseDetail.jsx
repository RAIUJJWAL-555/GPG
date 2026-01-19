import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Section/Header';
import Footer from '../components/Footer';
import StaffCard from '../components/StaffCard';
import StaffModal from '../components/StaffModal';
import { motion } from 'framer-motion';

// Import staff images
import civil1 from '../assets/staffPics/civil1.png';
import civil2 from '../assets/staffPics/civil2.png';
import civil3 from '../assets/staffPics/civil3.png';
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
import electronics from '../assets/staffPics/electronics.png';
import electronics1 from '../assets/staffPics/electronics1.png';
import electronics2 from '../assets/staffPics/electronics2.png';
import electronics3 from '../assets/staffPics/electronics3.png';
import electronics4 from '../assets/staffPics/electronics4.png';
import electronics5 from '../assets/staffPics/electronics5.png';
import electronics8 from '../assets/staffPics/electronics8.png';
import mechanical from '../assets/staffPics/Mechanical.png';
import interior1 from '../assets/staffPics/Interior_Design_and_Decoration1.png';
import interior2 from '../assets/staffPics/Interior_Design_and_Decoration2.png';
import massCom from '../assets/staffPics/Mass_Communication.png';
import massCom1 from '../assets/staffPics/Mass_Communication1.png';
import massCom3 from '../assets/staffPics/Mass_Communication3.png';

const CourseDetail = () => {
    const { courseId } = useParams();
    const navigate = useNavigate();
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

    // Course data with faculty
    const coursesData = {
        civil: {
            name: "Civil Engineering",
            icon: "🏗️",
            color: "#F59E0B",
            duration: "3 Years",
            intake: "60 Students",
            description: "Civil Engineering is one of the oldest and most versatile engineering disciplines. Our diploma program prepares students for designing, constructing, and maintaining infrastructure projects including roads, bridges, buildings, water supply systems, and more.",
            highlights: [
                "CAD/CAM Lab with latest software",
                "Surveying equipment & instruments",
                "Materials testing laboratory",
                "Industry partnerships for internships",
                "Site visits & practical training"
            ],
            subjects: ["Engineering Drawing", "Surveying", "Building Construction", "Structural Engineering", "Concrete Technology", "Estimating & Costing"],
            faculty: [
                { name: "Mr. Shailendra Pratap Singh", designation: "HOD", department: "Civil Engineering", image: civil1 },
                { name: "Mr. Rahul Singh", designation: "Lecturer Civil", department: "Civil Engineering", image: civil2 },
                { name: "Mrs. Garima Singh", designation: "Lecturer Civil", department: "Civil Engineering", image: civil3 },
            ]
        },
        it: {
            name: "Information Technology",
            icon: "💻",
            color: "#3B82F6",
            duration: "3 Years",
            intake: "60 Students",
            description: "Information Technology program focuses on developing skilled professionals in computer applications, web development, database management, and networking. Students learn cutting-edge technologies used in the IT industry.",
            highlights: [
                "Modern computer labs",
                "Web development & programming",
                "Database management systems",
                "Networking & cybersecurity basics",
                "Industry-relevant projects"
            ],
            subjects: ["Programming in C/C++", "Web Technologies", "Database Management", "Computer Networks", "Software Engineering", "Python Programming"],
            faculty: [
                { name: "Ms. Fatema Siddiqua", designation: "HOD", department: "Information Technology", image: it },
                { name: "Mrs. Anamika", designation: "Lecturer Information Technology", department: "Information Technology", image: it1 },
                { name: "Mr. Amit Patel", designation: "Lecturer Computer", department: "Information Technology", image: it3 },
                { name: "Mrs. Akanksha Singh", designation: "Lecturer Web Designing", department: "Information Technology", image: it4 },
                { name: "Mrs. Priyanka Bauddha", designation: "Lecturer Web Designing", department: "Information Technology", image: it5 },
                { name: "Mr. Shashank Chandra", designation: "Lecturer Web Designing", department: "Information Technology", image: it6 },
                { name: "Mr. Jai Gurudev Ji", designation: "Lecturer CHN", department: "Information Technology", image: it7 },
                { name: "Ms. Neha Chaudhary", designation: "Lecturer CHN", department: "Information Technology", image: it8 },
                { name: "Mr. Abhishek Chandra", designation: "Lecturer CHN", department: "Information Technology", image: it9 },
                { name: "Mrs. Madhu Nirwan", designation: "Computer Instructor", department: "Information Technology", image: it10 },
            ]
        },
        electronics: {
            name: "Electronics Engineering",
            icon: "📡",
            color: "#8B5CF6",
            duration: "3 Years",
            intake: "60 Students",
            description: "Electronics Engineering program trains students in electronic circuits, communication systems, and embedded systems. Students gain hands-on experience with electronic equipment and learn to design and troubleshoot electronic systems.",
            highlights: [
                "Electronics & communication lab",
                "Microprocessor & microcontroller lab",
                "PCB design & fabrication",
                "Signal processing training",
                "Industry visits & workshops"
            ],
            subjects: ["Electronic Devices", "Digital Electronics", "Communication Systems", "Microprocessors", "Control Systems", "Industrial Electronics"],
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
        mechanical: {
            name: "Mechanical Engineering",
            icon: "⚙️",
            color: "#EF4444",
            duration: "3 Years",
            intake: "60 Students",
            description: "Mechanical Engineering is the backbone of manufacturing and production industries. Our program covers design, manufacturing, thermal engineering, and maintenance of mechanical systems and machinery.",
            highlights: [
                "Fully equipped workshop",
                "CAD/CAM facilities",
                "Thermal & fluid mechanics lab",
                "Manufacturing processes training",
                "Industrial training programs"
            ],
            subjects: ["Engineering Mechanics", "Thermodynamics", "Manufacturing Processes", "Machine Design", "Automobile Engineering", "Refrigeration & AC"],
            faculty: [
                { name: "Mrs. Naznin Khan", designation: "HOD", department: "Mechanical Engineering", image: mechanical },
            ]
        },
        interior: {
            name: "Interior Design & Decoration",
            icon: "🎨",
            color: "#10B981",
            duration: "3 Years",
            intake: "40 Students",
            description: "Interior Design program develops creative professionals who can transform spaces into functional and aesthetically pleasing environments. Students learn design principles, space planning, and material selection.",
            highlights: [
                "Design studio facilities",
                "3D modeling & rendering",
                "Material library access",
                "Live project experience",
                "Portfolio development"
            ],
            subjects: ["Design Fundamentals", "Space Planning", "Material Science", "Furniture Design", "Lighting Design", "3D Visualization"],
            faculty: [
                { name: "Mr. Pankaj Jaiswal", designation: "Lecturer IDD", department: "Interior Design", image: interior1 },
                { name: "Mr. Mukesh Singh", designation: "Lecturer IDD", department: "Interior Design", image: interior2 },
            ]
        },
        masscomm: {
            name: "Mass Communication",
            icon: "📺",
            color: "#6366F1",
            duration: "3 Years",
            intake: "40 Students",
            description: "Mass Communication program prepares students for careers in journalism, advertising, public relations, and media production. Students learn about various media platforms and develop communication skills.",
            highlights: [
                "Media production studio",
                "Audio-visual editing lab",
                "Photography equipment",
                "Field reporting experience",
                "Industry internships"
            ],
            subjects: ["Journalism Basics", "Advertising", "Public Relations", "Media Production", "Photography", "Digital Media"],
            faculty: [
                { name: "Mr. Md. Afsar Ali Raeni", designation: "Lecturer Mass Comm.", department: "Mass Communication", image: massCom },
                { name: "Ms. Sandhya Yadav", designation: "Lecturer Mass Comm.", department: "Mass Communication", image: massCom1 },
                { name: "Mrs. Surabhi Yadav", designation: "Lecturer Mass Comm.", department: "Mass Communication", image: massCom3 },
            ]
        }
    };

    const course = coursesData[courseId];

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0B1C2D' }}>
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4" style={{ color: '#F8F6F2' }}>Course Not Found</h1>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-3 rounded-full font-semibold"
                        style={{ backgroundColor: '#C7A14A', color: '#0B1C2D' }}
                    >
                        Go Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#F8F6F2' }}>
            <Header />

            {/* Hero Section */}
            <div
                className="pt-32 pb-20 px-4"
                style={{ backgroundColor: '#0B1C2D' }}
            >
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        {/* Back Button */}
                        <button
                            onClick={() => navigate(-1)}
                            className="mb-8 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                            style={{
                                backgroundColor: 'rgba(199, 161, 74, 0.1)',
                                color: '#C7A14A',
                                border: '1px solid rgba(199, 161, 74, 0.3)'
                            }}
                        >
                            ← Back
                        </button>

                        {/* Icon */}
                        <div
                            className="w-24 h-24 mx-auto rounded-2xl flex items-center justify-center text-5xl mb-6"
                            style={{
                                backgroundColor: course.color,
                                boxShadow: `0 20px 40px ${course.color}40`
                            }}
                        >
                            {course.icon}
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#F8F6F2' }}>
                            {course.name}
                        </h1>

                        {/* Quick Info */}
                        <div className="flex flex-wrap justify-center gap-4 mt-6">
                            <span
                                className="px-4 py-2 rounded-full text-sm font-medium"
                                style={{ backgroundColor: 'rgba(199, 161, 74, 0.2)', color: '#C7A14A' }}
                            >
                                ⏱️ Duration: {course.duration}
                            </span>
                            <span
                                className="px-4 py-2 rounded-full text-sm font-medium"
                                style={{ backgroundColor: 'rgba(199, 161, 74, 0.2)', color: '#C7A14A' }}
                            >
                                👥 Intake: {course.intake}
                            </span>
                            <span
                                className="px-4 py-2 rounded-full text-sm font-medium"
                                style={{ backgroundColor: 'rgba(199, 161, 74, 0.2)', color: '#C7A14A' }}
                            >
                                👨‍🏫 Faculty: {course.faculty.length}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* About Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0B1C2D' }}>
                                About the <span style={{ color: '#C7A14A' }}>Program</span>
                            </h2>
                            <div className="w-16 h-1 rounded-full mb-6" style={{ backgroundColor: '#C7A14A' }} />
                            <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
                                {course.description}
                            </p>
                        </motion.div>

                        {/* Highlights */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0B1C2D' }}>
                                Program <span style={{ color: '#C7A14A' }}>Highlights</span>
                            </h2>
                            <div className="w-16 h-1 rounded-full mb-6" style={{ backgroundColor: '#C7A14A' }} />
                            <ul className="space-y-3">
                                {course.highlights.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 p-3 rounded-lg"
                                        style={{ backgroundColor: 'rgba(199, 161, 74, 0.1)' }}
                                    >
                                        <span
                                            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                                            style={{ backgroundColor: '#C7A14A', color: '#0B1C2D' }}
                                        >
                                            ✓
                                        </span>
                                        <span style={{ color: '#0B1C2D' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Subjects Section */}
            <section className="py-16 px-4" style={{ backgroundColor: '#0B1C2D' }}>
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#F8F6F2' }}>
                            Key <span style={{ color: '#C7A14A' }}>Subjects</span>
                        </h2>
                        <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#C7A14A' }} />
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {course.subjects.map((subject, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="px-5 py-3 rounded-full font-medium"
                                style={{
                                    backgroundColor: 'rgba(199, 161, 74, 0.1)',
                                    color: '#C7A14A',
                                    border: '1px solid rgba(199, 161, 74, 0.3)'
                                }}
                            >
                                {subject}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Faculty Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#0B1C2D' }}>
                            Meet Our <span style={{ color: '#C7A14A' }}>Faculty</span>
                        </h2>
                        <p className="text-base" style={{ color: '#6B7280' }}>
                            Dedicated educators shaping the future of {course.name}
                        </p>
                        <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: '#C7A14A' }} />
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {course.faculty.map((staff, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                onClick={() => handleCardClick(staff)}
                            >
                                <StaffCard {...staff} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="py-16 px-4"
                style={{ backgroundColor: 'rgba(199, 161, 74, 0.1)' }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#0B1C2D' }}>
                        Ready to Join <span style={{ color: '#C7A14A' }}>{course.name}?</span>
                    </h2>
                    <p className="mb-8" style={{ color: '#6B7280' }}>
                        Take the first step towards your career in {course.name}. Apply now!
                    </p>
                    <button
                        className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        style={{ backgroundColor: '#C7A14A', color: '#0B1C2D' }}
                    >
                        Apply Now →
                    </button>
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
};

export default CourseDetail;

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Section/Header';
import Footer from '../components/Footer';
import StaffCard from '../components/StaffCard';
import StaffModal from '../components/StaffModal';
import GridBackground from '../components/GridBackground';
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
        if (staff.name) {
            setSelectedStaff(staff);
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedStaff(null);
    };

    // All courses data with faculty
    const coursesData = {
        // PG Diploma Courses
        pgdwd: {
            name: "PG Diploma in Web Designing",
            icon: "🌐",
            color: "#3B82F6",
            duration: "1 Year",
            intake: "75 Students",
            eligibility: "Graduation Passed",
            category: "PG Diploma",
            description: "This program is designed to develop skilled web designers who can create modern, responsive, and user-friendly websites. Students learn HTML, CSS, JavaScript, UI/UX design principles, and modern web development frameworks.",
            highlights: [
                "HTML5, CSS3, JavaScript training",
                "Responsive web design techniques",
                "UI/UX design principles",
                "Modern frameworks (React, Bootstrap)",
                "Portfolio development",
                "Live project experience"
            ],
            subjects: ["HTML & CSS", "JavaScript", "Responsive Design", "UI/UX Fundamentals", "React.js Basics", "Web Graphics", "CMS Development", "SEO Basics"],
            careers: ["Web Designer", "Frontend Developer", "UI Developer", "Freelance Web Developer"],
            faculty: [
                { name: null, designation: "Faculty", department: "Web Designing", image: null },
                { name: null, designation: "Faculty", department: "Web Designing", image: null },
            ]
        },
        pgdchn: {
            name: "PG Diploma in Computer Hardware & Networking",
            icon: "🖥️",
            color: "#8B5CF6",
            duration: "1 Year",
            intake: "75 Students",
            eligibility: "Graduation Passed",
            category: "PG Diploma",
            description: "This comprehensive program covers computer hardware assembly, troubleshooting, network administration, and IT infrastructure management. Students gain hands-on experience with real hardware and networking equipment.",
            highlights: [
                "PC assembly & troubleshooting",
                "Network design & implementation",
                "Server administration",
                "Cisco networking basics",
                "Hardware lab with latest equipment",
                "Industry certifications preparation"
            ],
            subjects: ["Computer Hardware", "Operating Systems", "Networking Fundamentals", "Server Administration", "Network Security", "Cisco Routing", "Troubleshooting", "Cloud Basics"],
            careers: ["Hardware Engineer", "Network Administrator", "IT Support Specialist", "System Administrator"],
            faculty: [
                { name: null, designation: "Faculty", department: "CHN", image: null },
                { name: null, designation: "Faculty", department: "CHN", image: null },
            ]
        },
        pgdiot: {
            name: "PG Diploma in Internet of Things",
            icon: "📡",
            color: "#06B6D4",
            duration: "1 Year",
            intake: "75 Students",
            eligibility: "Graduation Passed",
            category: "PG Diploma",
            description: "Explore the world of connected devices with our IoT program. Learn to design, develop, and deploy IoT solutions using sensors, microcontrollers, and cloud platforms.",
            highlights: [
                "Arduino & Raspberry Pi programming",
                "Sensor integration",
                "Cloud IoT platforms",
                "Smart home automation projects",
                "Industrial IoT applications",
                "Data analytics for IoT"
            ],
            subjects: ["IoT Fundamentals", "Embedded Systems", "Sensor Technology", "Wireless Communication", "Cloud Platforms", "IoT Security", "Data Analytics", "Project Development"],
            careers: ["IoT Developer", "Embedded Systems Engineer", "Smart Systems Designer", "IoT Solutions Architect"],
            faculty: [
                { name: null, designation: "Faculty", department: "IoT", image: null },
                { name: null, designation: "Faculty", department: "IoT", image: null },
            ]
        },
        pgdcs: {
            name: "PG Diploma in Cyber Security",
            icon: "🔐",
            color: "#EF4444",
            duration: "1 Year",
            intake: "75 Students",
            eligibility: "Graduation Passed",
            category: "PG Diploma",
            description: "Learn to protect digital assets and infrastructure from cyber threats. This program covers ethical hacking, penetration testing, security auditing, and incident response.",
            highlights: [
                "Ethical hacking techniques",
                "Penetration testing",
                "Security audit procedures",
                "Incident response training",
                "Cryptography fundamentals",
                "Industry certification prep (CEH, CompTIA)"
            ],
            subjects: ["Network Security", "Ethical Hacking", "Cryptography", "Malware Analysis", "Penetration Testing", "Security Auditing", "Digital Forensics", "Cyber Laws"],
            careers: ["Cyber Security Analyst", "Ethical Hacker", "Security Consultant", "Penetration Tester"],
            faculty: [
                { name: null, designation: "Faculty", department: "Cyber Security", image: null },
                { name: null, designation: "Faculty", department: "Cyber Security", image: null },
            ]
        },
        // Diploma Courses
        masscomm: {
            name: "Diploma in Journalism and Mass Communication",
            icon: "📺",
            color: "#F59E0B",
            duration: "2 Years",
            intake: "75 Students",
            eligibility: "Graduation Passed",
            category: "Diploma",
            description: "Prepare for a career in media and journalism. This program covers print, broadcast, and digital media, along with advertising and public relations.",
            highlights: [
                "Print journalism training",
                "TV & radio production",
                "Digital media skills",
                "Photography & videography",
                "Advertising & PR basics",
                "Media studio facilities"
            ],
            subjects: ["Print Journalism", "Broadcast Journalism", "Digital Media", "Photography", "Advertising", "Public Relations", "Media Laws", "Content Writing"],
            careers: ["Journalist", "News Anchor", "Content Writer", "PR Executive", "Digital Media Manager"],
            faculty: [
                { name: "Mr. Md. Afsar Ali Raeni", designation: "Lecturer Mass Comm.", department: "Mass Communication", image: massCom },
                { name: "Ms. Sandhya Yadav", designation: "Lecturer Mass Comm.", department: "Mass Communication", image: massCom1 },
                { name: "Mrs. Surabhi Yadav", designation: "Lecturer Mass Comm.", department: "Mass Communication", image: massCom3 },
            ]
        },
        civil: {
            name: "Civil Engineering",
            icon: "🏗️",
            color: "#F97316",
            duration: "3 Years",
            intake: "67 Students",
            eligibility: "High School 35% With Science and Math",
            category: "Diploma",
            description: "Civil Engineering is one of the oldest and most versatile engineering disciplines. Our diploma program prepares students for designing, constructing, and maintaining infrastructure projects including roads, bridges, buildings, water supply systems, and more.",
            highlights: [
                "CAD/CAM Lab with latest software",
                "Surveying equipment & instruments",
                "Materials testing laboratory",
                "Industry partnerships for internships",
                "Site visits & practical training",
                "Government project exposure"
            ],
            subjects: ["Engineering Drawing", "Surveying", "Building Construction", "Structural Engineering", "Concrete Technology", "Estimating & Costing", "Highway Engineering", "Environmental Engineering"],
            careers: ["Site Engineer", "Surveyor", "Construction Supervisor", "Quantity Surveyor", "CAD Technician"],
            faculty: [
                { name: "Mr. Shailendra Pratap Singh", designation: "HOD", department: "Civil Engineering", image: civil1 },
                { name: "Mr. Rahul Singh", designation: "Lecturer Civil", department: "Civil Engineering", image: civil2 },
                { name: "Mrs. Garima Singh", designation: "Lecturer Civil", department: "Civil Engineering", image: civil3 },
            ]
        },
        electronics: {
            name: "Electronics Engineering",
            icon: "📡",
            color: "#A855F7",
            duration: "3 Years",
            intake: "67 Students",
            eligibility: "High School 35% With Science and Math",
            category: "Diploma",
            description: "Electronics Engineering program trains students in electronic circuits, communication systems, and embedded systems. Students gain hands-on experience with electronic equipment and learn to design and troubleshoot electronic systems.",
            highlights: [
                "Electronics & communication lab",
                "Microprocessor & microcontroller lab",
                "PCB design & fabrication",
                "Signal processing training",
                "Industry visits & workshops",
                "Modern test equipment"
            ],
            subjects: ["Electronic Devices", "Digital Electronics", "Communication Systems", "Microprocessors", "Control Systems", "Industrial Electronics", "PCB Design", "Embedded Systems"],
            careers: ["Electronics Technician", "PCB Designer", "Service Engineer", "Quality Control Engineer"],
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
        interior: {
            name: "Interior Design and Decoration",
            icon: "🎨",
            color: "#10B981",
            duration: "3 Years",
            intake: "67 Students",
            eligibility: "High School 35% With Science and Math",
            category: "Diploma",
            description: "Interior Design program develops creative professionals who can transform spaces into functional and aesthetically pleasing environments. Students learn design principles, space planning, and material selection.",
            highlights: [
                "Design studio facilities",
                "3D modeling & rendering",
                "Material library access",
                "Live project experience",
                "Portfolio development",
                "Industry internships"
            ],
            subjects: ["Design Fundamentals", "Space Planning", "Material Science", "Furniture Design", "Lighting Design", "3D Visualization", "Color Theory", "History of Design"],
            careers: ["Interior Designer", "Space Planner", "Furniture Designer", "Design Consultant", "Visual Merchandiser"],
            faculty: [
                { name: "Mr. Pankaj Jaiswal", designation: "Lecturer IDD", department: "Interior Design", image: interior1 },
                { name: "Mr. Mukesh Singh", designation: "Lecturer IDD", department: "Interior Design", image: interior2 },
            ]
        },
        'mech-auto': {
            name: "Mechanical Engineering (Automobile)",
            icon: "🚗",
            color: "#EF4444",
            duration: "3 Years",
            intake: "67 Students",
            eligibility: "High School 35% With Science and Math",
            category: "Diploma",
            description: "Specialized program focusing on automobile engineering covering vehicle design, manufacturing, maintenance, and repair of automotive systems.",
            highlights: [
                "Automobile workshop",
                "Engine testing lab",
                "Vehicle maintenance training",
                "Industry collaborations",
                "Latest vehicle technology exposure",
                "EV technology basics"
            ],
            subjects: ["Automobile Engineering", "IC Engines", "Vehicle Dynamics", "Automotive Electrical", "Vehicle Maintenance", "Transmission Systems", "Chassis & Suspension", "EV Fundamentals"],
            careers: ["Automobile Engineer", "Service Manager", "Vehicle Inspector", "Auto Parts Specialist"],
            faculty: [
                { name: "Mrs. Naznin Khan", designation: "HOD", department: "Mechanical Engineering", image: mechanical },
                { name: null, designation: "Faculty", department: "Mechanical (Auto)", image: null },
                { name: null, designation: "Faculty", department: "Mechanical (Auto)", image: null },
            ]
        },
        'mech-cad': {
            name: "Mechanical Engineering (Computer Aided Design)",
            icon: "⚙️",
            color: "#6366F1",
            duration: "3 Years",
            intake: "67 Students",
            eligibility: "High School 35% With Science and Math",
            category: "Diploma",
            description: "This specialization combines mechanical engineering with computer-aided design tools. Students learn to use CAD/CAM software for designing mechanical components and systems.",
            highlights: [
                "CAD/CAM lab with licensed software",
                "AutoCAD, SolidWorks, CATIA training",
                "CNC machine programming",
                "3D printing & prototyping",
                "Industry-standard practices",
                "Design project portfolio"
            ],
            subjects: ["AutoCAD", "SolidWorks", "CATIA", "CNC Programming", "Machine Design", "Manufacturing Processes", "3D Modeling", "CAM Operations"],
            careers: ["CAD Designer", "CAM Programmer", "Design Engineer", "CNC Operator", "Product Designer"],
            faculty: [
                { name: "Mrs. Naznin Khan", designation: "HOD", department: "Mechanical Engineering", image: mechanical },
                { name: null, designation: "Faculty", department: "Mechanical (CAD)", image: null },
                { name: null, designation: "Faculty", department: "Mechanical (CAD)", image: null },
            ]
        },
        'mech-prod': {
            name: "Mechanical Engineering (Production)",
            icon: "🔧",
            color: "#EC4899",
            duration: "3 Years",
            intake: "67 Students",
            eligibility: "High School 35% With Science and Math",
            category: "Diploma",
            description: "Production engineering focuses on manufacturing processes, quality control, and industrial management. Students learn to optimize production systems and maintain quality standards.",
            highlights: [
                "Fully equipped workshop",
                "CNC & conventional machines",
                "Quality control lab",
                "Industrial visits",
                "Lean manufacturing training",
                "Six Sigma basics"
            ],
            subjects: ["Manufacturing Processes", "Production Planning", "Quality Control", "Industrial Management", "Tool Engineering", "Metrology", "Lean Manufacturing", "Safety Engineering"],
            careers: ["Production Engineer", "Quality Inspector", "Plant Supervisor", "Process Engineer"],
            faculty: [
                { name: "Mrs. Naznin Khan", designation: "HOD", department: "Mechanical Engineering", image: mechanical },
                { name: null, designation: "Faculty", department: "Mechanical (Prod)", image: null },
                { name: null, designation: "Faculty", department: "Mechanical (Prod)", image: null },
            ]
        },
        it: {
            name: "Information Technology",
            icon: "💻",
            color: "#3B82F6",
            duration: "3 Years",
            intake: "67 Students",
            eligibility: "High School 35% With Science and Math",
            category: "Diploma",
            description: "Information Technology program focuses on developing skilled professionals in computer applications, web development, database management, and networking. Students learn cutting-edge technologies used in the IT industry.",
            highlights: [
                "Modern computer labs",
                "Web development & programming",
                "Database management systems",
                "Networking & cybersecurity basics",
                "Industry-relevant projects",
                "Soft skills training"
            ],
            subjects: ["Programming in C/C++", "Web Technologies", "Database Management", "Computer Networks", "Software Engineering", "Python Programming", "Java Basics", "Cloud Computing"],
            careers: ["Software Developer", "Web Developer", "Database Administrator", "IT Support Engineer"],
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
        // Lateral Entry Courses
        'civil-lateral': {
            name: "Civil Engineering [Lateral Entry]",
            icon: "🏗️",
            color: "#F97316",
            duration: "2 Years",
            intake: "6 Students",
            eligibility: "Intermediate Passed or ITI 2 Year",
            category: "Lateral Entry",
            description: "Direct entry into second year of Civil Engineering diploma for students who have completed intermediate or 2-year ITI course.",
            highlights: [
                "Direct 2nd year admission",
                "Intensive 2-year program",
                "Same curriculum as regular diploma",
                "Full practical exposure",
                "Industry internship",
                "Placement assistance"
            ],
            subjects: ["Structural Engineering", "Concrete Technology", "Estimating & Costing", "Highway Engineering", "Environmental Engineering", "Construction Management"],
            careers: ["Site Engineer", "Surveyor", "Construction Supervisor", "Quantity Surveyor"],
            faculty: [
                { name: "Mr. Shailendra Pratap Singh", designation: "HOD", department: "Civil Engineering", image: civil1 },
                { name: "Mr. Rahul Singh", designation: "Lecturer Civil", department: "Civil Engineering", image: civil2 },
                { name: "Mrs. Garima Singh", designation: "Lecturer Civil", department: "Civil Engineering", image: civil3 },
            ]
        },
        'electronics-lateral': {
            name: "Electronics Engineering [Lateral Entry]",
            icon: "📡",
            color: "#A855F7",
            duration: "2 Years",
            intake: "6 Students",
            eligibility: "Intermediate Passed or ITI 2 Year",
            category: "Lateral Entry",
            description: "Direct entry into second year of Electronics Engineering diploma for students with relevant background.",
            highlights: [
                "Direct 2nd year admission",
                "Advanced electronics training",
                "Lab practical sessions",
                "Project-based learning",
                "Industry exposure",
                "Certification prep"
            ],
            subjects: ["Communication Systems", "Microprocessors", "Control Systems", "Industrial Electronics", "PCB Design", "Embedded Systems"],
            careers: ["Electronics Technician", "PCB Designer", "Service Engineer", "Quality Control Engineer"],
            faculty: [
                { name: "Mr. Vivek Kumar", designation: "HOD", department: "Electronics Engineering", image: electronics },
                { name: "Mrs. Geeta Awasthi", designation: "Lecturer Electronics", department: "Electronics Engineering", image: electronics1 },
                { name: "Mrs. Alka Yadav", designation: "Lecturer Electronics", department: "Electronics Engineering", image: electronics2 },
            ]
        },
        'mech-auto-lateral': {
            name: "Mechanical Engineering (Automobile) [Lateral Entry]",
            icon: "🚗",
            color: "#EF4444",
            duration: "2 Years",
            intake: "6 Students",
            eligibility: "Intermediate Passed or ITI 2 Year",
            category: "Lateral Entry",
            description: "Direct entry into second year of Mechanical (Automobile) Engineering diploma.",
            highlights: [
                "Direct 2nd year admission",
                "Automobile specialization",
                "Workshop training",
                "Vehicle maintenance skills",
                "Industry internship",
                "EV exposure"
            ],
            subjects: ["Vehicle Dynamics", "Automotive Electrical", "Vehicle Maintenance", "Transmission Systems", "Chassis & Suspension", "EV Fundamentals"],
            careers: ["Automobile Engineer", "Service Manager", "Vehicle Inspector"],
            faculty: [
                { name: "Mrs. Naznin Khan", designation: "HOD", department: "Mechanical Engineering", image: mechanical },
                { name: null, designation: "Faculty", department: "Mechanical", image: null },
            ]
        },
        'mech-cad-lateral': {
            name: "Mechanical Engineering (CAD) [Lateral Entry]",
            icon: "⚙️",
            color: "#6366F1",
            duration: "2 Years",
            intake: "6 Students",
            eligibility: "Intermediate Passed or ITI 2 Year",
            category: "Lateral Entry",
            description: "Direct entry into second year of Mechanical (CAD) Engineering diploma with focus on design software.",
            highlights: [
                "Direct 2nd year admission",
                "CAD software mastery",
                "CNC programming",
                "3D modeling projects",
                "Industry-standard tools",
                "Design portfolio"
            ],
            subjects: ["SolidWorks Advanced", "CATIA", "CNC Programming", "Machine Design", "3D Modeling", "CAM Operations"],
            careers: ["CAD Designer", "CAM Programmer", "Design Engineer", "CNC Operator"],
            faculty: [
                { name: "Mrs. Naznin Khan", designation: "HOD", department: "Mechanical Engineering", image: mechanical },
                { name: null, designation: "Faculty", department: "Mechanical", image: null },
            ]
        },
        'mech-prod-lateral': {
            name: "Mechanical Engineering (Production) [Lateral Entry]",
            icon: "🔧",
            color: "#EC4899",
            duration: "2 Years",
            intake: "6 Students",
            eligibility: "Intermediate Passed or ITI 2 Year",
            category: "Lateral Entry",
            description: "Direct entry into second year of Mechanical (Production) Engineering diploma focusing on manufacturing.",
            highlights: [
                "Direct 2nd year admission",
                "Production specialization",
                "Quality control training",
                "Workshop experience",
                "Industrial visits",
                "Lean manufacturing"
            ],
            subjects: ["Production Planning", "Quality Control", "Industrial Management", "Tool Engineering", "Lean Manufacturing", "Safety Engineering"],
            careers: ["Production Engineer", "Quality Inspector", "Plant Supervisor"],
            faculty: [
                { name: "Mrs. Naznin Khan", designation: "HOD", department: "Mechanical Engineering", image: mechanical },
                { name: null, designation: "Faculty", department: "Mechanical", image: null },
            ]
        },
        'it-lateral': {
            name: "Information Technology [Lateral Entry] (CAD)",
            icon: "💻",
            color: "#3B82F6",
            duration: "2 Years",
            intake: "6 Students",
            eligibility: "Intermediate Passed or ITI 2 Year",
            category: "Lateral Entry",
            description: "Direct entry into second year of Information Technology diploma with CAD specialization.",
            highlights: [
                "Direct 2nd year admission",
                "IT with CAD focus",
                "Programming & design",
                "Database management",
                "Project development",
                "Placement support"
            ],
            subjects: ["Database Management", "Computer Networks", "Software Engineering", "Python Programming", "CAD Tools", "Cloud Computing"],
            careers: ["Software Developer", "CAD Specialist", "IT Support Engineer"],
            faculty: [
                { name: "Ms. Fatema Siddiqua", designation: "HOD", department: "Information Technology", image: it },
                { name: "Mrs. Anamika", designation: "Lecturer Information Technology", department: "Information Technology", image: it1 },
                { name: "Mr. Amit Patel", designation: "Lecturer Computer", department: "Information Technology", image: it3 },
            ]
        }
    };

    const course = coursesData[courseId];

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0B1C2D' }}>
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4" style={{ color: '#F8F6F2' }}>Course Not Found</h1>
                    <p className="mb-6" style={{ color: '#9CA3AF' }}>The course you're looking for doesn't exist.</p>
                    <button
                        onClick={() => navigate('/courses')}
                        className="px-6 py-3 rounded-full font-semibold"
                        style={{ backgroundColor: '#C7A14A', color: '#0B1C2D' }}
                    >
                        View All Courses
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
                className="pt-40 pb-20 px-4"
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
                            onClick={() => navigate('/courses')}
                            className="mb-8 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                            style={{
                                backgroundColor: 'rgba(199, 161, 74, 0.1)',
                                color: '#C7A14A',
                                border: '1px solid rgba(199, 161, 74, 0.3)'
                            }}
                        >
                            ← Back to Courses
                        </button>

                        {/* Category Badge */}
                        <span
                            className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-6"
                            style={{ backgroundColor: course.color, color: 'white' }}
                        >
                            {course.category}
                        </span>

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

                        <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: '#F8F6F2' }}>
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
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Eligibility Banner */}
            <section className="py-6 px-4" style={{ backgroundColor: course.color }}>
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-lg font-semibold text-white">
                        📋 Eligibility: {course.eligibility}
                    </p>
                </div>
            </section>

            {/* About Section */}
            <GridBackground className="py-16 px-4">
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
            </GridBackground>

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
                                transition={{ duration: 0.3, delay: index * 0.05 }}
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
            <GridBackground className="py-16 px-4">
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
                                className={staff.name ? 'cursor-pointer' : 'cursor-default'}
                            >
                                <StaffCard
                                    name={staff.name || "Faculty Member"}
                                    designation={staff.designation}
                                    department={staff.department}
                                    image={staff.image}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </GridBackground>

            {/* Career Options */}
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
                            Career <span style={{ color: '#C7A14A' }}>Opportunities</span>
                        </h2>
                        <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#C7A14A' }} />
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {course.careers.map((career, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="px-6 py-4 rounded-xl text-center"
                                style={{ backgroundColor: 'rgba(199, 161, 74, 0.1)' }}
                            >
                                <span className="text-2xl block mb-2">💼</span>
                                <p className="font-semibold" style={{ color: '#F8F6F2' }}>{career}</p>
                            </motion.div>
                        ))}
                    </div>
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

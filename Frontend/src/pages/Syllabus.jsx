import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Section/Header';
import Footer from '../components/Footer';
import GridBackground from '../components/GridBackground';

import ItPdf from '../assets/Pdf/It.pdf';
import CivilPdf from '../assets/Pdf/civil.pdf';
import ElectronicsPdf from '../assets/Pdf/electronics.pdf';
import MechanicalPdf from '../assets/Pdf/mechanical.pdf';

// Use same icons as courses for consistency, or generic document icons
const DownloadIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

const Syllabus = () => {
    const departments = [
        {
            id: 'civil',
            label: 'Civil Engineering',
            color: 'orange',
            description: 'Structural Analysis, Concrete Technology, Soil Mechanics',
            pdf: CivilPdf
        },
        {
            id: 'it',
            label: 'Information Technology',
            color: 'blue',
            description: 'Web Development, DBMS, Networking, Java',
            pdf: ItPdf
        },
        {
            id: 'electronics',
            label: 'Electronics Engineering',
            color: 'purple',
            description: 'Digital Electronics, Microprocessors, Communication Systems',
            pdf: ElectronicsPdf
        },
        {
            id: 'mechanical',
            label: 'Mechanical Engineering',
            color: 'red',
            description: 'Thermodynamics, Fluid Mechanics, Machine Design',
            pdf: MechanicalPdf
        },
        {
            id: 'interior',
            label: 'Interior Design',
            color: 'green',
            description: 'Design Principles, CAD, Furniture Design',
            pdf: null
        },
        {
            id: 'masscomm',
            label: 'Mass Communication',
            color: 'indigo',
            description: 'Journalism, Broadcasting, Media Laws',
            pdf: null
        },
    ];

    const handleDownload = (dept, pdf) => {
        if (!pdf) {
            alert(`Syllabus for ${dept} is coming soon!`);
            return;
        }
        // Direct download using an invisible anchor tag or simply opening in new tab
        const link = document.createElement('a');
        link.href = pdf;
        link.download = `${dept}_Syllabus.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F8F6F2' }}>
            <Header />
            
            <main className="flex-grow">
                <GridBackground className="pt-24 pb-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
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
                                📚 Academic Curriculum
                            </span>
                            <h1 className="text-3xl md:text-5xl font-bold mb-4 mt-4" style={{ color: '#0B1C2D' }}>
                                Course <span style={{ color: '#C7A14A' }}>Syllabus</span>
                            </h1>
                            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#4B5563' }}>
                                Download the detailed syllabus for your department to stay updated with the academic curriculum.
                            </p>
                            <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#C7A14A' }} />
                        </motion.div>

                        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {departments.map((dept, index) => (
                                <motion.div
                                    key={dept.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div 
                                            className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl`}
                                            style={{
                                                background: dept.color === 'orange' ? 'linear-gradient(135deg, #C7A14A, #F59E0B)' :
                                                    dept.color === 'blue' ? 'linear-gradient(135deg, #3B82F6, #1D4ED8)' :
                                                        dept.color === 'purple' ? 'linear-gradient(135deg, #8B5CF6, #6D28D9)' :
                                                            dept.color === 'red' ? 'linear-gradient(135deg, #EF4444, #DC2626)' :
                                                                dept.color === 'green' ? 'linear-gradient(135deg, #10B981, #059669)' :
                                                                    'linear-gradient(135deg, #6366F1, #4F46E5)',
                                            }}
                                        >
                                            {dept.label.charAt(0)}
                                        </div>
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-gray-100 text-gray-500">
                                            Active
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold mb-2" style={{ color: '#0B1C2D' }}>{dept.label}</h3>
                                    <p className="text-sm text-gray-500 mb-6 h-10">{dept.description}</p>
                                    
                                    <button
                                        onClick={() => handleDownload(dept.label, dept.pdf)}
                                        className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 font-medium transition-all duration-300 ${dept.pdf ? 'group-hover:-translate-y-1' : 'opacity-50 cursor-not-allowed'}`}
                                        style={{
                                            backgroundColor: '#0B1C2D',
                                            color: '#F8F6F2'
                                        }}
                                        disabled={!dept.pdf}
                                    >
                                        <DownloadIcon />
                                        {dept.pdf ? 'Download PDF' : 'Coming Soon'}
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </GridBackground>
            </main>
            
            <Footer />
        </div>
    );
};

export default Syllabus;

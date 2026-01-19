import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Section/Header';
import Footer from '../components/Footer';
import GridBackground from '../components/GridBackground';
import placementImg1 from '../assets/PhotoshopExtension_Image.png';
import placementImg2 from '../assets/PhotoshopExtension_Image (1).png';
import rahulSirImg from '../assets/staffPics/civil2.png';
import fatemaMamImg from '../assets/staffPics/it.png';

const TopRecruiters = [
    { name: "Hero", logo: "https://logo.clearbit.com/heromotocorp.com" },
    { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
    { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
    { name: "HCL", logo: "https://logo.clearbit.com/hcltech.com" },
    { name: "Tech Mahindra", logo: "https://logo.clearbit.com/techmahindra.com" },
    { name: "L&T", logo: "https://logo.clearbit.com/larsentoubro.com" },
];

const PlacementCell = () => {
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
                                🎓 Career Opportunities
                            </span>
                            <h1 className="text-3xl md:text-5xl font-bold mb-4 mt-4" style={{ color: '#0B1C2D' }}>
                                Training & <span style={{ color: '#C7A14A' }}>Placement Cell</span>
                            </h1>
                            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#4B5563' }}>
                                Bridges the gap between academia and industry, ensuring our students are career-ready.
                            </p>
                            <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#C7A14A' }} />
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                            {[
                                { label: "Placement Rate", value: "85%", icon: "📈", color: "blue" },
                                { label: "Highest Package", value: "8 LPA", icon: "💰", color: "green" },
                                { label: "Recruiters", value: "50+", icon: "🤝", color: "purple" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.15 }}
                                    className="bg-white rounded-2xl p-8 shadow-xl text-center border border-gray-100 hover:shadow-2xl transition-all"
                                >
                                    <div className="text-4xl mb-4">{stat.icon}</div>
                                    <h3 className="text-4xl font-bold mb-2" style={{ color: '#0B1C2D' }}>{stat.value}</h3>
                                    <p className="text-gray-500 font-medium">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mb-20">
                            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: '#0B1C2D' }}>
                                Our Top <span style={{ color: '#C7A14A' }}>Recruiters</span>
                            </h2>
                            <div className="flex flex-wrap justify-center gap-6">
                                {TopRecruiters.map((company, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-white px-8 py-4 rounded-xl shadow-md border border-gray-100 flex items-center gap-4"
                                    >
                                        <img src={company.logo} alt={company.name} className="w-10 h-10 object-contain" />
                                        <span className="font-semibold text-gray-700">{company.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-20">
                             <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: '#0B1C2D' }}>
                                Placement <span style={{ color: '#C7A14A' }}>Highlights</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <motion.div 
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                                >
                                    <img src={placementImg1} alt="Placement Activity 1" className="w-full h-full object-cover" />
                                </motion.div>
                                <motion.div 
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                                >
                                    <img src={placementImg2} alt="Placement Activity 2" className="w-full h-full object-cover" />
                                </motion.div>
                            </div>
                        </div>

                        <div className="mb-20">
                            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center" style={{ color: '#0B1C2D' }}>
                                Message from <span style={{ color: '#C7A14A' }}>Placement Officers</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <motion.div 
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative"
                                >
                                    <div className="text-6xl text-gray-100 absolute top-4 right-4 font-serif">"</div>
                                    <p className="text-gray-600 italic mb-6 relative z-10 text-lg leading-relaxed">
                                        "Our goal is not just to provide jobs, but to shape careers. We strive to bridge the gap between industry requirements and student skills through continuous training and development programs."
                                    </p>
                                    <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-100">
                                            <img src={rahulSirImg} alt="Mr. Rahul Singh" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg" style={{ color: '#0B1C2D' }}>Mr. Rahul Singh</h4>
                                            <p className="text-sm text-gray-500 font-medium">Training & Placement Officer</p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative"
                                >
                                    <div className="text-6xl text-gray-100 absolute top-4 right-4 font-serif">"</div>
                                    <p className="text-gray-600 italic mb-6 relative z-10 text-lg leading-relaxed">
                                        "We believe in the potential of every student. Our team works tirelessly to bring the best opportunities and companies to campus, ensuring a bright future for our graduates."
                                    </p>
                                    <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-pink-100">
                                            <img src={fatemaMamImg} alt="Ms. Fatema Siddique" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg" style={{ color: '#0B1C2D' }}>Ms. Fatema Siddique</h4>
                                            <p className="text-sm text-gray-500 font-medium">Training & Placement Officer</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#0B1C2D' }}>
                                        Contact Placement Officer
                                    </h2>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                                                👤
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-gray-800">Mr. Rahul Singh</h4>
                                                <p className="text-gray-500">Training & Placement Officer</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 flex-shrink-0">
                                                👤
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-gray-800">Ms. Fatema Siddique</h4>
                                                <p className="text-gray-500">Training & Placement Officer</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                                                📧
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-gray-800">Email</h4>
                                                <p className="text-gray-500">placement@gpg.edu.in</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
                                                📞
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-gray-800">Phone</h4>
                                                <p className="text-gray-500">+91 98765 43210</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                    <h3 className="font-bold text-lg mb-4 text-gray-800">For Students</h3>
                                    <p className="text-gray-600 mb-6">
                                        Register yourself on the placement portal to get updates on upcoming drives and interviews.
                                    </p>
                                    <button 
                                        className="w-full py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                                        style={{ backgroundColor: '#0B1C2D', color: '#F8F6F2' }}
                                    >
                                        Student Registration
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </GridBackground>
            </main>

            <Footer />
        </div>
    );
};

export default PlacementCell;

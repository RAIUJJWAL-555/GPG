import React from 'react';
import Header from '../Section/Header';
import Footer from '../components/Footer';
import GridBackground from '../components/GridBackground';
import { motion } from 'framer-motion';
import aboutImg from '../assets/clgimage/gpg_hd_img.jpeg';
import buildingImg from '../assets/clgimage/gpg_building.jpeg';
import campusImg2 from '../assets/clgimage/gpg_hd_2.jpeg';
import buildingImg2 from '../assets/clgimage/gpg_building_2.jpeg';
import hostelImg from '../assets/clgimage/gpg_hostel_img1.jpg';

const AboutUs = () => {
    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F8F6F2' }}>
            <Header />
            <main className="flex-grow pt-28 mt-12">
                <GridBackground>
                    {/* Hero Section */}
                    <div className="text-center mb-16 px-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold mb-4"
                            style={{ color: '#0B1C2D' }}
                        >
                            Our <span style={{ color: '#C7A14A' }}>Legacy</span>
                        </motion.h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Government Polytechnic Ghaziabad: Shaping the Future of Technical Education Since 1981
                        </p>
                    </div>

                    {/* Content Section */}
                    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                            {/* Image Composition */}
                             <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative pl-8 pb-8"
                            >
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 z-10">
                                    <img
                                        src={aboutImg}
                                        alt="Campus View"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 w-3/5 rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                                     <img
                                        src={buildingImg}
                                        alt="College Building"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="absolute -z-10 top-[-20px] left-[10px] w-full h-full border-2 border-[#C7A14A] rounded-2xl opacity-60"></div>
                            </motion.div>

                            {/* History/Text */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-bold mb-6 text-[#0B1C2D]">A Rich History of Excellence</h2>
                                <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                                    Established in 1981, Government Polytechnic Ghaziabad stands as a beacon of technical education in Uttar Pradesh. For over four decades, we have been committed to nurturing young minds and equipping them with the skills necessary to thrive in the ever-evolving industrial landscape.
                                </p>
                                <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                                    Situated in the heart of Ghaziabad, a major industrial hub of the National Capital Region, our institute benefits from close ties with the industry, providing our students with unique opportunities for practical learning and placement.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    We offer diverse diploma programs in Engineering and Technology, constantly updating our curriculum to align with modern technological advancements. Our alumni are successfully contributing to various sectors globally, carrying forward the legacy of their alma mater.
                                </p>
                            </motion.div>
                        </div>

                        {/* Vision & Mission */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#0B1C2D]"
                            >
                                <h3 className="text-2xl font-bold mb-4 text-[#0B1C2D]">Our Vision</h3>
                                <p className="text-gray-600">
                                    To be a center of excellence in technical education, producing globally competent professionals with strong ethical values and a commitment to sustainable development and nation-building.
                                </p>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#C7A14A]"
                            >
                                <h3 className="text-2xl font-bold mb-4 text-[#0B1C2D]">Our Mission</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                    <li>Provide quality technical education through state-of-the-art infrastructure.</li>
                                    <li>Foster innovation, critical thinking, and entrepreneurship among students.</li>
                                    <li>Strengthen industry-institute interaction for better employability.</li>
                                    <li>Inculcate professional ethics and social responsibility.</li>
                                </ul>
                            </motion.div>
                        </div>

                        {/* Campus Highlights / Infrastructure */}
                        <div className="mt-20">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold mb-4 text-[#0B1C2D]">State-of-the-Art <span style={{ color: '#C7A14A' }}>Infrastructure</span></h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    We provide a conducive environment for learning and development with modern facilities, well-equipped labs, and comfortable residential accommodations.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    { img: campusImg2, title: "Modern Campus", desc: "A sprawling campus with lush greenery and modern architecture." },
                                    { img: buildingImg2, title: "Academic Blocks", desc: "Spacious classrooms and advanced laboratories for practical learning." },
                                    { img: hostelImg, title: "Student Hostel", desc: "Safe and comfortable residential facilities for students." },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group relative rounded-xl overflow-hidden shadow-lg h-80"
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                                            <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </GridBackground>
            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;

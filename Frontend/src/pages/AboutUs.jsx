import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import GridBackground from '../components/GridBackground';
import { motion, AnimatePresence } from 'framer-motion';
import aboutImg from '../assets/clgimage/gpg_hd_img.jpeg';
import buildingImg from '../assets/clgimage/gpg_building.jpeg';
import campusImg2 from '../assets/clgimage/gpg_hd_2.jpeg';
import buildingImg2 from '../assets/clgimage/gpg_building_2.jpeg';
import hostelImg from '../assets/clgimage/gpg_hostel_img1.jpg';
import lib1 from '../assets/Libimage/lib1.png';
import lib2 from '../assets/Libimage/lib2.png';

const MiniCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Auto-rotate every 4 seconds

        return () => clearInterval(timer);
    }, [images.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] group">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                />
            </AnimatePresence>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Navigation Arrows - Only show if more than 1 image */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={goToPrevious}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10"
                        aria-label="Previous image"
                    >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10"
                        aria-label="Next image"
                    >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${
                                    index === currentIndex
                                        ? 'w-8 h-2 bg-[#C7A14A]'
                                        : 'w-2 h-2 bg-white/60 hover:bg-white/80'
                                }`}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

const AboutUs = () => {
    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F8F6F2' }}>
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

                            {/* Detailed Sections in Zig-Zag Pattern */}
                            <div className="mt-12 space-y-24">
                                {/* Modern Campus - Image Left */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                                >
                                    <MiniCarousel images={[campusImg2, aboutImg]} />
                                    <div>
                                        <span className="inline-block text-[#C7A14A] font-bold tracking-wider uppercase mb-2 text-sm">
                                            01 / Campus
                                        </span>
                                        <h3 className="text-3xl font-bold mb-4 text-[#0B1C2D]">Modern Campus</h3>
                                        <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                                            Our sprawling campus is a perfect blend of natural beauty and modern architecture. Spread across acres of lush greenery, the campus provides a serene and inspiring environment for learning and personal growth.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#C7A14A] text-xl">✓</span>
                                                <span className="text-gray-600">Eco-friendly infrastructure with sustainable design principles</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#C7A14A] text-xl">✓</span>
                                                <span className="text-gray-600">Well-maintained gardens and recreational spaces</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#C7A14A] text-xl">✓</span>
                                                <span className="text-gray-600">24/7 security with CCTV surveillance</span>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* Academic Blocks - Image Right */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                                >
                                    <div className="order-2 lg:order-1">
                                        <span className="inline-block text-[#C7A14A] font-bold tracking-wider uppercase mb-2 text-sm">
                                            02 / Academics
                                        </span>
                                        <h3 className="text-3xl font-bold mb-4 text-[#0B1C2D]">Academic Blocks</h3>
                                        <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                                            Our state-of-the-art academic blocks are equipped with modern classrooms, advanced laboratories, and cutting-edge technology to facilitate hands-on learning and practical skill development.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#C7A14A] text-xl">✓</span>
                                                <span className="text-gray-600">Smart classrooms with digital learning tools</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#C7A14A] text-xl">✓</span>
                                                <span className="text-gray-600">Specialized labs for each engineering discipline</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#C7A14A] text-xl">✓</span>
                                                <span className="text-gray-600">Workshop facilities with modern machinery</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="order-1 lg:order-2">
                                        <MiniCarousel images={[buildingImg2, buildingImg]} />
                                    </div>
                                </motion.div>

                                {/* Student Hostel - Image Left */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                                >
                                    <MiniCarousel images={[hostelImg]} />
                                    <div>
                                        <span className="inline-block text-[#C7A14A] font-bold tracking-wider uppercase mb-2 text-sm">
                                            03 / Accommodation
                                        </span>
                                        <h3 className="text-3xl font-bold mb-4 text-[#0B1C2D]">Student Hostel</h3>
                                        <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                                            Our comfortable and secure hostel facilities provide a home away from home for students. With modern amenities and a supportive environment, students can focus on their studies while enjoying a vibrant campus life.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#C7A14A] text-xl">✓</span>
                                                <span className="text-gray-600">Separate hostels for boys and girls with 24/7 security</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#C7A14A] text-xl">✓</span>
                                                <span className="text-gray-600">Nutritious mess facilities with hygienic food</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#C7A14A] text-xl">✓</span>
                                                <span className="text-gray-600">Recreation rooms, Wi-Fi, and study areas</span>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* Library - Image Right */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                                >
                                    <div className="order-2 lg:order-1">
                                        <span className="inline-block text-[#C7A14A] font-bold tracking-wider uppercase mb-2 text-sm">
                                            04 / Library
                                        </span>
                                        <h3 className="text-3xl font-bold mb-4 text-[#0B1C2D]">Resourceful Library</h3>
                                        <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                                            Our library is a treasure trove of knowledge, featuring an extensive collection of textbooks, reference books, journals, and digital resources. It provides a quiet and comfortable space for students to explore, research, and expand their academic horizons.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#C7A14A] text-xl">✓</span>
                                                <span className="text-gray-600">Extensive collection of technical and general literature</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#C7A14A] text-xl">✓</span>
                                                <span className="text-gray-600">Digital library access with high-speed internet</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#C7A14A] text-xl">✓</span>
                                                <span className="text-gray-600">Quiet reading zones and group study areas</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="order-1 lg:order-2">
                                        <MiniCarousel images={[lib1, lib2]} />
                                    </div>
                                </motion.div>
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

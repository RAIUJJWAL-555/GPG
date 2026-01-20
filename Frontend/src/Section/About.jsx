import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/clgimage/gpg_hd_img.jpeg';
import buildingImg from '../assets/clgimage/gpg_building.jpeg';

const About = () => {
    return (
        <section className="py-20 px-4 md:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
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
                                alt="Government Polytechnic Ghaziabad Campus"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>

                        {/* Secondary Image */}
                        <div className="absolute bottom-0 left-0 w-1/2 rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                             <img
                                src={buildingImg}
                                alt="College Building"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -z-10 top-[-20px] left-[10px] w-full h-full border-2 border-[#C7A14A] rounded-2xl opacity-60"></div>
                         <div className="absolute -z-10 bottom-[20px] right-[-20px] w-32 h-32 bg-[#C7A14A]/10 rounded-full blur-xl"></div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block text-[#C7A14A] font-bold tracking-wider uppercase mb-2 text-sm">
                            About Us
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#0B1C2D] leading-tight">
                            Excellence in <span className="text-[#C7A14A]">Technical Education</span> Since 1981
                        </h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            Government Polytechnic Ghaziabad, established in 1981, is a premier technical institution committed to transforming students into skilled professionals. Located in the industrial hub of Ghaziabad, we offer state-of-the-art facilities and a curriculum designed to meet industry standards.
                        </p>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                             Our mission is to provide quality technical education that empowers students with practical skills, innovation, and ethical values, preparing them to contribute effectively to the nation's growth.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                             <div className="border-l-4 border-[#C7A14A] pl-4">
                                <h4 className="font-bold text-xl text-[#0B1C2D]">40+ Years</h4>
                                <p className="text-sm text-gray-500">Of Legacy</p>
                             </div>
                             <div className="border-l-4 border-[#0B1C2D] pl-4">
                                <h4 className="font-bold text-xl text-[#0B1C2D]">100%</h4>
                                <p className="text-sm text-gray-500">Committed Faculty</p>
                             </div>
                        </div>

                         <a
                            href="/pages/about" /* Assuming we might have a detailed page later, or just link to generic About */
                            className="inline-flex items-center px-8 py-4 bg-[#0B1C2D] text-white rounded-lg font-semibold transition-all hover:bg-[#C7A14A] hover:shadow-lg group"
                        >
                            Read More
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

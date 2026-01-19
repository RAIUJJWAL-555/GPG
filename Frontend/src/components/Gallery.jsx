import React from 'react';
import { galleryData } from "../assets/assets.js"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow, Keyboard } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Heart, Eye, Maximize2 } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Btn from '../components/Btn.jsx';

const Gallery = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-20" style={{ backgroundColor: '#F8F6F2' }}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0B1C2D' }}>
                        Explore Our <span style={{ color: '#C7A14A' }}>Gallery</span>
                    </h1>
                    <p style={{ color: '#6B7280' }} className="text-lg max-w-2xl mx-auto">
                        A visual journey through our state-of-the-art facilities and compassionate care
                    </p>
                </motion.div>

                <Swiper
                    modules={[Autoplay, Pagination, EffectCoverflow, Keyboard]}
                    effect="coverflow"
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: true,
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    keyboard={{
                        enabled: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    className="gallery-swiper pb-16"
                >
                    {galleryData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative group overflow-hidden rounded-2xl shadow-2xl h-[400px] cursor-pointer"
                            >
                                <img
                                    src={item.image}
                                    alt={item.heading}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-3xl font-bold text-white mb-3">{item.heading}</h3>
                                        <p className="text-gray-200 text-sm mb-6 line-clamp-2">{item.description}</p>

                                        <div className="flex items-center gap-4">
                                            <button className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors">
                                                <Eye className="w-4 h-4" />
                                                <span>View</span>
                                            </button>
                                            <button className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors">
                                                <Maximize2 className="w-4 h-4" />
                                                <span>Expand</span>
                                            </button>
                                            <button className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors">
                                                <Heart className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                        <span className="text-sm font-semibold text-gray-800">
                                            {index + 1} / {galleryData.length}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center  text-white rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer" style={{ backgroundColor: '#0B1C2D' }}>
                        <Btn />
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
                .gallery-swiper {
                    padding: 40px 20px 60px;
                }
                
                .gallery-swiper .swiper-pagination-bullet {
                    background: #C7A14A;
                    opacity: 0.5;
                }
                
                .gallery-swiper .swiper-pagination-bullet-active {
                    opacity: 1;
                    transform: scale(1.2);
                }
                
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </motion.div>
    );
}
export default Gallery
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import college images
import gpgBuilding from '../assets/clgimage/gpg_building.jpeg';
import gpgBuilding2 from '../assets/clgimage/gpg_building_2.jpeg';
import gpgHd from '../assets/clgimage/gpg_hd_img.jpeg';
import gpgHd2 from '../assets/clgimage/gpg_hd_2.jpeg';
import gpgHostel1 from '../assets/clgimage/gpg_hostel_img1.jpg';
import gpgHostel2 from '../assets/clgimage/gpg_hostel_img2.jpg';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: gpgHd,
      title: "Government Polytechnic",
      subtitle: "Ghaziabad",
      tagline: "Shaping Future Engineers Since 1958"
    },
    {
      image: gpgHd2,
      title: "Excellence in",
      subtitle: "Technical Education",
      tagline: "AICTE Approved | State Government Institution"
    },
    {
      image: gpgHostel1,
      title: "World-Class",
      subtitle: "Infrastructure",
      tagline: "Modern Labs, Library & Sports Facilities"
    },
    {
      image: gpgHostel2,
      title: "Residential",
      subtitle: "Campus",
      tagline: "Separate Hostels for Boys & Girls"
    },
  ];

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#0B1C2D' }}>
      {/* Background Slider */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt="College Campus"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(11, 28, 45, 0.7) 0%, rgba(11, 28, 45, 0.85) 100%)'
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Elements */}
      <div
        className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: '#C7A14A' }}
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: '#C7A14A' }}
      />

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 py-20 pt-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Badge */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{
                  backgroundColor: 'rgba(199, 161, 74, 0.2)',
                  color: '#C7A14A',
                  border: '1px solid rgba(199, 161, 74, 0.4)'
                }}
              >
                🎓 Established 1958 | AICTE Approved
              </motion.span>

              {/* Main Heading */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2" style={{ color: '#F8F6F2' }}>
                    {slides[currentSlide].title}
                  </h1>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: '#C7A14A' }}>
                    {slides[currentSlide].subtitle}
                  </h1>
                  <p className="text-lg md:text-xl mb-8" style={{ color: '#9CA3AF' }}>
                    {slides[currentSlide].tagline}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Gold accent line */}
              <div
                className="w-24 h-1 rounded-full mb-8"
                style={{ backgroundColor: '#C7A14A' }}
              />

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/courses">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    style={{ backgroundColor: '#C7A14A', color: '#0B1C2D' }}
                  >
                    Explore Courses →
                  </motion.button>
                </Link>
                <Link to="/staff">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                    style={{
                      backgroundColor: 'transparent',
                      color: '#F8F6F2',
                      border: '2px solid rgba(248, 246, 242, 0.3)'
                    }}
                  >
                    Meet Our Team
                  </motion.button>
                </Link>
              </div>

              {/* Slide Indicators */}
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8' : 'w-2'
                      }`}
                    style={{
                      backgroundColor: currentSlide === index ? '#C7A14A' : 'rgba(248, 246, 242, 0.3)'
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '65+', label: 'Years of Excellence', icon: '🏛️' },
                  { value: '18', label: 'Diploma Programs', icon: '📚' },
                  { value: '500+', label: 'Students Enrolled', icon: '👨‍🎓' },
                  { value: '50+', label: 'Expert Faculty', icon: '👨‍🏫' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="p-6 rounded-2xl text-center backdrop-blur-md"
                    style={{
                      backgroundColor: 'rgba(11, 28, 45, 0.6)',
                      border: '1px solid rgba(199, 161, 74, 0.2)'
                    }}
                  >
                    <span className="text-3xl block mb-2">{stat.icon}</span>
                    <h3 className="text-3xl md:text-4xl font-bold mb-1" style={{ color: '#C7A14A' }}>
                      {stat.value}
                    </h3>
                    <p className="text-sm" style={{ color: '#9CA3AF' }}>{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center cursor-pointer"
        >
          <span className="text-xs mb-2" style={{ color: '#9CA3AF' }}>Scroll Down</span>
          <div
            className="w-6 h-10 rounded-full flex justify-center pt-2"
            style={{ border: '2px solid rgba(199, 161, 74, 0.5)' }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 rounded-full"
              style={{ backgroundColor: '#C7A14A' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;

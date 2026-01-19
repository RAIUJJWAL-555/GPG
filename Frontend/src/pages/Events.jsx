import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header from '../Section/Header';
import Footer from '@/components/Footer';
import Gallery2 from '@/components/Gallery2';
import GridBackground from '@/components/GridBackground';

// Events Slider Component
const EventsSlider = ({ events }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);
    const intervalRef = useRef(null);

    const totalSlides = events.length;

    const goToSlide = useCallback((index) => {
        setCurrentSlide(index);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, [totalSlides]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    const resetAutoSlide = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(nextSlide, 4000);
    }, [nextSlide]);

    useEffect(() => {
        intervalRef.current = setInterval(nextSlide, 4000);
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [nextSlide]);

    const handleNext = () => {
        nextSlide();
        resetAutoSlide();
    };

    const handlePrev = () => {
        prevSlide();
        resetAutoSlide();
    };

    return (
        <div className="flex items-center justify-center max-w-5xl mx-auto">
            {/* Prev Button */}
            <button
                onClick={handlePrev}
                className="p-2 md:p-3 mr-3 md:mr-6 rounded-full transition-all duration-300 hover:scale-110"
                style={{
                    backgroundColor: 'rgba(199, 161, 74, 0.2)',
                    border: '2px solid rgba(199, 161, 74, 0.5)'
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="#C7A14A" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Slider Container */}
            <div className="w-full max-w-4xl overflow-hidden relative rounded-2xl" style={{ boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)' }}>
                <div
                    ref={sliderRef}
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {events.map((event, index) => (
                        <div key={index} className="w-full flex-shrink-0 relative">
                            <img
                                src={event.src}
                                className="w-full h-[350px] md:h-[450px] object-cover"
                                alt={event.title}
                            />
                            {/* Gradient Overlay */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: 'linear-gradient(to top, rgba(11, 28, 45, 0.9) 0%, rgba(11, 28, 45, 0.2) 50%, transparent 100%)'
                                }}
                            />
                            {/* Category Badge */}
                            <span
                                className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full"
                                style={{
                                    backgroundColor: '#C7A14A',
                                    color: '#0B1C2D'
                                }}
                            >
                                {event.category}
                            </span>
                            {/* Title */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#F8F6F2' }}>
                                    {event.title}
                                </h3>
                                <div className="w-16 h-1 rounded-full" style={{ backgroundColor: '#C7A14A' }} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                    {events.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => { goToSlide(index); resetAutoSlide(); }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-6' : ''}`}
                            style={{
                                backgroundColor: currentSlide === index ? '#C7A14A' : 'rgba(255, 255, 255, 0.4)'
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Next Button */}
            <button
                onClick={handleNext}
                className="p-2 md:p-3 ml-3 md:ml-6 rounded-full transition-all duration-300 hover:scale-110"
                style={{
                    backgroundColor: 'rgba(199, 161, 74, 0.2)',
                    border: '2px solid rgba(199, 161, 74, 0.5)'
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="#C7A14A" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

const Events = () => {
    const mainEvents = [
        { src: "https://www.gpghaziabad.ac.in/images/pt6.jpg", title: "Annual Day Celebration", category: "Cultural" },
        { src: "https://www.gpghaziabad.ac.in/images/c4.jpg", title: "Technical Exhibition", category: "Technical" },
        { src: "https://www.gpghaziabad.ac.in/images/c6.jpg", title: "Campus Life", category: "Campus" },
        { src: "https://www.gpghaziabad.ac.in/images/teachers-day-2021/img%20(3).jpeg", title: "Teachers Day", category: "Celebration" },
        { src: "https://www.gpghaziabad.ac.in/images/teachers-day-2021/img%20(4).jpeg", title: "Award Ceremony", category: "Recognition" },
        { src: "https://www.gpghaziabad.ac.in/images/vrisharopan-2021/img%20(4).jpeg", title: "Tree Plantation", category: "Environment" },
        { src: "https://www.gpghaziabad.ac.in/images/pt5.jpg", title: "Sports Meet", category: "Sports" },
        { src: "https://www.gpghaziabad.ac.in/images/pt3.jpg", title: "Workshop Session", category: "Learning" },
        { src: "https://www.gpghaziabad.ac.in/images/pt1.jpg", title: "Group Activity", category: "Team Building" },
    ];

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#0B1C2D' }}>
            <Header />

            {/* Hero Section */}
            <div className="pt-40 pb-16 px-4">
                {/* Decorative Elements */}
                <div className="relative">
                    {/* Gold accent circles */}
                    <div
                        className="absolute -top-10 left-1/4 w-32 h-32 rounded-full blur-3xl opacity-20"
                        style={{ backgroundColor: '#C7A14A' }}
                    />
                    <div
                        className="absolute -top-5 right-1/4 w-24 h-24 rounded-full blur-2xl opacity-15"
                        style={{ backgroundColor: '#C7A14A' }}
                    />
                </div>

                {/* Title Section */}
                <div className="text-center relative z-10">
                    <span
                        className="inline-block text-sm font-medium tracking-widest uppercase mt-10 mb-4 px-4 py-2 rounded-full"
                        style={{
                            color: '#C7A14A',
                            backgroundColor: 'rgba(199, 161, 74, 0.1)',
                            border: '1px solid rgba(199, 161, 74, 0.3)'
                        }}
                    >
                        📸 Photo Gallery
                    </span>
                    <h1
                        className="text-4xl md:text-6xl font-bold mb-6"
                        style={{ color: '#F8F6F2' }}
                    >
                        Our Latest <span style={{ color: '#C7A14A' }}>Events</span>
                    </h1>
                    <p
                        className="text-lg max-w-2xl mx-auto mb-8"
                        style={{ color: '#9CA3AF' }}
                    >
                        A visual journey through our most memorable moments - capturing the spirit,
                        energy, and achievements of our vibrant college community.
                    </p>
                    {/* Gold accent line */}
                    <div
                        className="w-24 h-1 mx-auto rounded-full"
                        style={{ backgroundColor: '#C7A14A' }}
                    />
                </div>
            </div>

            {/* Main Events Slider */}
            <div className="px-4 pb-20">
                <EventsSlider events={mainEvents} />
            </div>

            {/* Stats Section */}
            <GridBackground className="py-16 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#C7A14A' }}>50+</h3>
                        <p style={{ color: '#9CA3AF' }}>Events Per Year</p>
                    </div>
                    <div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#C7A14A' }}>1000+</h3>
                        <p style={{ color: '#9CA3AF' }}>Active Students</p>
                    </div>
                    <div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#C7A14A' }}>25+</h3>
                        <p style={{ color: '#9CA3AF' }}>Clubs & Societies</p>
                    </div>
                    <div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#C7A14A' }}>100%</h3>
                        <p style={{ color: '#9CA3AF' }}>Student Engagement</p>
                    </div>
                </div>
            </GridBackground>

            {/* Gallery2 Section with Cream Background */}
            <Gallery2 />

            {/* Upcoming Events Section */}
            <section className="py-20 px-4" style={{ backgroundColor: '#0B1C2D' }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#F8F6F2' }}>
                            Upcoming <span style={{ color: '#C7A14A' }}>Events</span>
                        </h2>
                        <p style={{ color: '#9CA3AF' }}>Stay tuned for exciting events coming your way!</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Annual Tech Fest", date: "March 2026", icon: "🎯" },
                            { title: "Sports Championship", date: "April 2026", icon: "🏆" },
                            { title: "Cultural Festival", date: "May 2026", icon: "🎭" },
                        ].map((event, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2"
                                style={{
                                    backgroundColor: 'rgba(199, 161, 74, 0.05)',
                                    border: '1px solid rgba(199, 161, 74, 0.2)'
                                }}
                            >
                                <span className="text-4xl mb-4 block">{event.icon}</span>
                                <h3 className="text-xl font-bold mb-2" style={{ color: '#F8F6F2' }}>
                                    {event.title}
                                </h3>
                                <p className="text-sm" style={{ color: '#C7A14A' }}>{event.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <hr />
            <hr />
            <Footer />
        </div >
    );
}

export default Events;

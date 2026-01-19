import React from 'react';
import Header from '../Section/Header';
import Footer from '@/components/Footer';
import Gallery2 from '@/components/Gallery2';

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

            {/* Main Events Gallery - Expandable Cards */}
            <div className="px-4 pb-20">
                <div className="flex items-center gap-3 h-[450px] w-full max-w-7xl mx-auto">
                    {mainEvents.map((event, index) => (
                        <div
                            key={index}
                            className="relative group flex-grow transition-all duration-700 ease-out rounded-2xl overflow-hidden h-[450px] cursor-pointer"
                            style={{
                                width: '60px',
                                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.width = '100%'}
                            onMouseLeave={(e) => e.currentTarget.style.width = '60px'}
                        >
                            {/* Image */}
                            <img
                                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                src={event.src}
                                alt={event.title}
                            />

                            {/* Gradient Overlay */}
                            <div
                                className="absolute inset-0 transition-opacity duration-500"
                                style={{
                                    background: 'linear-gradient(to top, rgba(11, 28, 45, 0.95) 0%, rgba(11, 28, 45, 0.3) 40%, transparent 100%)'
                                }}
                            />

                            {/* Category Badge */}
                            <div
                                className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0"
                            >
                                <span
                                    className="text-xs font-semibold px-3 py-1 rounded-full"
                                    style={{
                                        backgroundColor: '#C7A14A',
                                        color: '#0B1C2D'
                                    }}
                                >
                                    {event.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                <h3
                                    className="text-xl md:text-2xl font-bold mb-2"
                                    style={{ color: '#F8F6F2' }}
                                >
                                    {event.title}
                                </h3>
                                <div
                                    className="w-12 h-0.5 rounded-full"
                                    style={{ backgroundColor: '#C7A14A' }}
                                />
                            </div>

                            {/* Hover Border */}
                            <div
                                className="absolute inset-0 border-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{ borderColor: '#C7A14A' }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats Section */}
            <div
                className="py-16 px-4"
                style={{ backgroundColor: 'rgba(199, 161, 74, 0.05)' }}
            >
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
            </div>

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
                            { title: "Cultural Night", date: "May 2026", icon: "🎭" },
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
        </div>
    );
}

export default Events;

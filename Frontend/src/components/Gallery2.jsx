import React from 'react';

const Gallery2 = () => {
    const events = [
        {
            image: "https://www.gpghaziabad.ac.in/images/annual-function-2023/img%20(1).jpeg",
            title: "Annual Function 2023",
            description: "Celebrating excellence and achievements of our students"
        },
        {
            image: "https://www.gpghaziabad.ac.in/images/republic-day-2022/img%20(1).jpeg",
            title: "Republic Day 2022",
            description: "Honoring our nation with patriotic celebrations"
        },
        {
            image: "https://www.gpghaziabad.ac.in/images/teachers-day-2021/img%20(1).jpeg",
            title: "Teachers Day 2021",
            description: "Expressing gratitude to our dedicated faculty"
        }
    ];

    return (
        <section className="py-20 px-4" style={{ backgroundColor: '#F8F6F2' }}>
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0B1C2D' }}>
                    Featured <span style={{ color: '#C7A14A' }}>Moments</span>
                </h2>
                <p className="text-base max-w-lg mx-auto" style={{ color: '#6B7280' }}>
                    A visual collection of our most memorable events - each moment captured with intention, emotion, and style.
                </p>
                {/* Gold accent line */}
                <div className="w-20 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: '#C7A14A' }} />
            </div>

            {/* Cards Container */}
            <div className="flex items-center justify-center gap-4 h-[450px] w-full max-w-6xl mx-auto px-4">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="relative group flex-grow transition-all w-40 rounded-3xl overflow-hidden h-[450px] duration-500 hover:w-full cursor-pointer"
                        style={{
                            boxShadow: '0 25px 50px -12px rgba(199, 161, 74, 0.25)'
                        }}
                    >
                        <img
                            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                            src={event.image}
                            alt={event.title}
                        />
                        {/* Gradient Overlay */}
                        <div
                            className="absolute inset-0 transition-all duration-500"
                            style={{
                                background: 'linear-gradient(to top, rgba(11, 28, 45, 0.9) 0%, rgba(11, 28, 45, 0.4) 50%, transparent 100%)'
                            }}
                        />
                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                            <h3 className="text-2xl font-bold mb-2" style={{ color: '#F8F6F2' }}>
                                {event.title}
                            </h3>
                            <p className="text-sm" style={{ color: '#C7A14A' }}>
                                {event.description}
                            </p>
                        </div>
                        {/* Gold border on hover */}
                        <div
                            className="absolute inset-0 border-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ borderColor: '#C7A14A' }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery2;
import React from 'react';
import main1 from '../assets/main1.png';
import main2 from '../assets/main2.png';

const MainShowcase = () => {
    return (
        <section className="py-20 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#0B1C2D' }}>
            {/* Section Header */}
            <div className="text-center mb-12">
                <span
                    className="inline-block text-sm font-medium tracking-widest uppercase mb-4 px-4 py-2 rounded-full"
                    style={{
                        color: '#C7A14A',
                        backgroundColor: 'rgba(199, 161, 74, 0.1)',
                        border: '1px solid rgba(199, 161, 74, 0.3)'
                    }}
                >
                    🏛️ Campus Life
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#F8F6F2' }}>
                    Experience Our <span style={{ color: '#C7A14A' }}>Campus</span>
                </h2>
                <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
                    Discover the vibrant atmosphere and world-class facilities that make our college exceptional
                </p>
                {/* Gold accent line */}
                <div className="w-24 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: '#C7A14A' }} />
            </div>

            {/* Images Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {/* Main Image 1 */}
                    <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
                        <img
                            src={main1}
                            alt="Campus View 1"
                            className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Gradient Overlay */}
                        <div
                            className="absolute inset-0 transition-opacity duration-500"
                            style={{
                                background: 'linear-gradient(to top, rgba(11, 28, 45, 0.8) 0%, transparent 50%)'
                            }}
                        />
                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#F8F6F2' }}>
                                Modern Infrastructure
                            </h3>
                            <p className="text-sm" style={{ color: '#C7A14A' }}>
                                State-of-the-art facilities for holistic development
                            </p>
                        </div>
                        {/* Hover Border */}
                        <div
                            className="absolute inset-0 border-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ borderColor: '#C7A14A' }}
                        />
                    </div>

                    {/* Main Image 2 */}
                    <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
                        <img
                            src={main2}
                            alt="Campus View 2"
                            className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Gradient Overlay */}
                        <div
                            className="absolute inset-0 transition-opacity duration-500"
                            style={{
                                background: 'linear-gradient(to top, rgba(11, 28, 45, 0.8) 0%, transparent 50%)'
                            }}
                        />
                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#F8F6F2' }}>
                                Academic Excellence
                            </h3>
                            <p className="text-sm" style={{ color: '#C7A14A' }}>
                                Nurturing minds with quality education
                            </p>
                        </div>
                        {/* Hover Border */}
                        <div
                            className="absolute inset-0 border-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ borderColor: '#C7A14A' }}
                        />
                    </div>
                </div>

                {/* Stats Row */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(199, 161, 74, 0.1)' }}>
                        <h4 className="text-3xl md:text-4xl font-bold mb-1" style={{ color: '#C7A14A' }}>50+</h4>
                        <p className="text-sm" style={{ color: '#9CA3AF' }}>Years of Excellence</p>
                    </div>
                    <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(199, 161, 74, 0.1)' }}>
                        <h4 className="text-3xl md:text-4xl font-bold mb-1" style={{ color: '#C7A14A' }}>10K+</h4>
                        <p className="text-sm" style={{ color: '#9CA3AF' }}>Alumni Network</p>
                    </div>
                    <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(199, 161, 74, 0.1)' }}>
                        <h4 className="text-3xl md:text-4xl font-bold mb-1" style={{ color: '#C7A14A' }}>100+</h4>
                        <p className="text-sm" style={{ color: '#9CA3AF' }}>Expert Faculty</p>
                    </div>
                    <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(199, 161, 74, 0.1)' }}>
                        <h4 className="text-3xl md:text-4xl font-bold mb-1" style={{ color: '#C7A14A' }}>A+</h4>
                        <p className="text-sm" style={{ color: '#9CA3AF' }}>NAAC Grade</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainShowcase;

import React from 'react';
import Header from '../Section/Header';

const Events = () => {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#0B1C2D' }}>
            <Header />

            {/* Main Content with proper spacing from header */}
            <div className="pt-40 px-4 pb-20">
                {/* Title Section */}
                <h1 className="text-4xl md:text-5xl font-bold text-center mx-auto mb-4" style={{ color: '#F8F6F2' }}>
                    Our Latest <span style={{ color: '#C7A14A' }}>Events</span>
                </h1>
                <p className="text-base text-center mt-2 max-w-lg mx-auto mb-12" style={{ color: '#6B7280' }}>
                    A visual collection of our most recent events - each moment captured with intention, emotion, and style.
                </p>

                {/* Image Gallery - Expandable Cards */}
                <div className="flex items-center gap-2 h-[400px] w-full max-w-5xl mx-auto px-4">
                    <div className="relative group flex-grow transition-all w-20 rounded-2xl overflow-hidden h-[400px] duration-500 hover:w-full cursor-pointer shadow-lg hover:shadow-purple-500/20">
                        <img
                            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            src="https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&h=800&w=800&auto=format&fit=crop"
                            alt="Event 1"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="relative group flex-grow transition-all w-20 rounded-2xl overflow-hidden h-[400px] duration-500 hover:w-full cursor-pointer shadow-lg hover:shadow-pink-500/20">
                        <img
                            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            src="https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&h=800&w=800&auto=format&fit=crop"
                            alt="Event 2"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="relative group flex-grow transition-all w-20 rounded-2xl overflow-hidden h-[400px] duration-500 hover:w-full cursor-pointer shadow-lg hover:shadow-cyan-500/20">
                        <img
                            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&h=800&w=800&auto=format&fit=crop"
                            alt="Event 3"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="relative group flex-grow transition-all w-20 rounded-2xl overflow-hidden h-[400px] duration-500 hover:w-full cursor-pointer shadow-lg hover:shadow-indigo-500/20">
                        <img
                            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            src="https://images.unsplash.com/photo-1729086046027-09979ade13fd?q=80&h=800&w=800&auto=format&fit=crop"
                            alt="Event 4"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="relative group flex-grow transition-all w-20 rounded-2xl overflow-hidden h-[400px] duration-500 hover:w-full cursor-pointer shadow-lg hover:shadow-violet-500/20">
                        <img
                            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            src="https://images.unsplash.com/photo-1601568494843-772eb04aca5d?q=80&h=800&w=800&auto=format&fit=crop"
                            alt="Event 5"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="relative group flex-grow transition-all w-20 rounded-2xl overflow-hidden h-[400px] duration-500 hover:w-full cursor-pointer shadow-lg hover:shadow-rose-500/20">
                        <img
                            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            src="https://images.unsplash.com/photo-1585687501004-615dfdfde7f1?q=80&h=800&w=800&auto=format&fit=crop"
                            alt="Event 6"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;

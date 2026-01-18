import Header from '@/Section/Header';
import React from 'react';

const Staff = () => {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#F8F6F2' }}>
            <Header />

            {/* Main Content */}
            <div className="pt-40 px-4 pb-20">
                <h1 className="text-4xl md:text-5xl font-bold text-center mx-auto mb-4" style={{ color: '#0B1C2D' }}>
                    Our <span style={{ color: '#C7A14A' }}>Staff</span>
                </h1>
                <p className="text-base text-center mt-2 max-w-lg mx-auto mb-12" style={{ color: '#6B7280' }}>
                    Meet our dedicated team of educators and professionals.
                </p>

                {/* Gold accent line */}
                <div
                    className="w-24 h-1 mx-auto mb-12 rounded-full"
                    style={{ backgroundColor: '#C7A14A' }}
                />

                {/* Staff content placeholder */}
                <div className="max-w-6xl mx-auto text-center" style={{ color: '#6B7280' }}>
                    <p>Staff information coming soon...</p>
                </div>
            </div>
        </div>
    );
}

export default Staff;

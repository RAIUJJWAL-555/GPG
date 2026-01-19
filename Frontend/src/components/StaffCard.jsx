import React from 'react';

const StaffCard = ({ name, designation, department, image }) => {
    return (
        <div className="max-w-72 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-white">
            <div className="relative overflow-hidden rounded-t-2xl">
                <img
                    src={image || "https://randomuser.me/api/portraits/men/32.jpg"}
                    alt={name}
                    className="h-[280px] w-full rounded-t-2xl hover:scale-105 transition-all duration-500 object-cover object-top"
                />
                {/* Department badge */}
                <div className="absolute top-3 right-3 z-20">
                    <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                            backgroundColor: 'rgba(199, 161, 74, 0.9)',
                            color: '#0B1C2D'
                        }}
                    >
                        {department}
                    </span>
                </div>
            </div>
            <div className="px-4 py-5 text-center" style={{ backgroundColor: '#0B1C2D' }}>
                <p className="text-lg font-semibold" style={{ color: '#F8F6F2' }}>
                    {name}
                </p>
                <p
                    className="text-sm font-medium mt-1"
                    style={{ color: '#C7A14A' }}
                >
                    {designation}
                </p>
            </div>
        </div>
    );
};

export default StaffCard;

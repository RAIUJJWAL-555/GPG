import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StaffModal = ({ staff, isOpen, onClose }) => {
    if (!staff) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    {/* Background Overlay */}
                    <div
                        className="absolute inset-0 backdrop-blur-md"
                        style={{ backgroundColor: 'rgba(11, 28, 45, 0.95)' }}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 50 }}
                        transition={{ duration: 0.4, type: 'spring', damping: 25 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative z-10 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl"
                        style={{ backgroundColor: '#F8F6F2' }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                            style={{ backgroundColor: 'rgba(11, 28, 45, 0.1)' }}
                        >
                            <svg className="w-6 h-6" style={{ color: '#0B1C2D' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="flex flex-col md:flex-row">
                            {/* Left Side - Large Circle Image */}
                            <div
                                className="md:w-2/5 p-8 md:p-12 flex items-center justify-center"
                                style={{ backgroundColor: '#0B1C2D' }}
                            >
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
                                    className="relative"
                                >
                                    {/* Decorative rings */}
                                    <div
                                        className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full animate-pulse"
                                        style={{
                                            border: '3px solid rgba(199, 161, 74, 0.3)',
                                            transform: 'scale(1.1)'
                                        }}
                                    />
                                    <div
                                        className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full"
                                        style={{
                                            border: '2px dashed rgba(199, 161, 74, 0.2)',
                                            transform: 'scale(1.25)'
                                        }}
                                    />

                                    {/* Main Image */}
                                    <div
                                        className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 shadow-2xl"
                                        style={{ borderColor: '#C7A14A' }}
                                    >
                                        <img
                                            src={staff.image}
                                            alt={staff.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Side - Details */}
                            <div className="md:w-3/5 p-8 md:p-12">
                                <motion.div
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    {/* Department Badge */}
                                    <span
                                        className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4"
                                        style={{
                                            backgroundColor: 'rgba(199, 161, 74, 0.2)',
                                            color: '#C7A14A'
                                        }}
                                    >
                                        {staff.department}
                                    </span>

                                    {/* Name */}
                                    <h2
                                        className="text-3xl md:text-4xl font-bold mb-2"
                                        style={{ color: '#0B1C2D' }}
                                    >
                                        {staff.name}
                                    </h2>

                                    {/* Designation */}
                                    <p
                                        className="text-xl font-medium mb-6"
                                        style={{ color: '#C7A14A' }}
                                    >
                                        {staff.designation}
                                    </p>

                                    {/* Divider */}
                                    <div
                                        className="w-20 h-1 rounded-full mb-6"
                                        style={{ backgroundColor: '#C7A14A' }}
                                    />

                                    {/* Contact Details */}
                                    <div className="space-y-4">
                                        {staff.email && (
                                            <motion.div
                                                initial={{ x: 30, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                                className="flex items-center gap-4 p-4 rounded-xl"
                                                style={{ backgroundColor: 'rgba(11, 28, 45, 0.05)' }}
                                            >
                                                <div
                                                    className="w-12 h-12 rounded-full flex items-center justify-center"
                                                    style={{ backgroundColor: '#0B1C2D' }}
                                                >
                                                    <svg className="w-5 h-5" style={{ color: '#C7A14A' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-xs uppercase tracking-wider" style={{ color: '#6B7280' }}>Email</p>
                                                    <p className="font-medium" style={{ color: '#0B1C2D' }}>{staff.email}</p>
                                                </div>
                                            </motion.div>
                                        )}

                                        {staff.phone && (
                                            <motion.div
                                                initial={{ x: 30, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.5 }}
                                                className="flex items-center gap-4 p-4 rounded-xl"
                                                style={{ backgroundColor: 'rgba(11, 28, 45, 0.05)' }}
                                            >
                                                <div
                                                    className="w-12 h-12 rounded-full flex items-center justify-center"
                                                    style={{ backgroundColor: '#0B1C2D' }}
                                                >
                                                    <svg className="w-5 h-5" style={{ color: '#C7A14A' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-xs uppercase tracking-wider" style={{ color: '#6B7280' }}>Phone</p>
                                                    <p className="font-medium" style={{ color: '#0B1C2D' }}>{staff.phone}</p>
                                                </div>
                                            </motion.div>
                                        )}

                                        <motion.div
                                            initial={{ x: 30, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.6 }}
                                            className="flex items-center gap-4 p-4 rounded-xl"
                                            style={{ backgroundColor: 'rgba(11, 28, 45, 0.05)' }}
                                        >
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center"
                                                style={{ backgroundColor: '#0B1C2D' }}
                                            >
                                                <svg className="w-5 h-5" style={{ color: '#C7A14A' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-wider" style={{ color: '#6B7280' }}>Department</p>
                                                <p className="font-medium" style={{ color: '#0B1C2D' }}>{staff.department}</p>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Social Links */}
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.7 }}
                                        className="flex gap-4 mt-8"
                                    >
                                        <a
                                            href="#"
                                            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                            style={{ backgroundColor: '#0B1C2D' }}
                                        >
                                            <svg className="w-5 h-5" style={{ color: '#C7A14A' }} fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
                                                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="#"
                                            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                            style={{ backgroundColor: '#0B1C2D' }}
                                        >
                                            <svg className="w-5 h-5" style={{ color: '#C7A14A' }} fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                        {staff.email && (
                                            <a
                                                href={`mailto:${staff.email}`}
                                                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                                style={{ backgroundColor: '#C7A14A' }}
                                            >
                                                <svg className="w-5 h-5" style={{ color: '#0B1C2D' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </a>
                                        )}
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StaffModal;

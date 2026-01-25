import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const SplashScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + 2;
            });
        }, 40);

        const completionTimer = setTimeout(() => {
            onComplete();
        }, 2500);

        return () => {
            clearInterval(timer);
            clearTimeout(completionTimer);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B1C2D] overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            {/* Background Decor: Abstract Grid or Glow */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C7A14A] rounded-full blur-[150px] mix-blend-overlay"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center">
                {/* Logo Animation */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm border border-[#C7A14A]/30 shadow-[0_0_30px_rgba(199,161,74,0.15)]">
                        <img src={logo} alt="GPG Logo" className="w-24 h-24 md:w-28 md:h-28 object-contain" />
                    </div>
                </motion.div>

                {/* Text Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-2xl md:text-4xl font-bold text-[#F8F6F2] mb-2 font-serif tracking-wide">
                        Government Polytechnic
                    </h1>
                    <h2 className="text-xl md:text-3xl font-light text-[#C7A14A] tracking-wider uppercase">
                        Ghaziabad
                    </h2>
                </motion.div>

                {/* Loading Bar */}
                <motion.div
                    className="mt-12 w-48 md:w-64 h-1 bg-gray-800 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.div
                        className="h-full bg-[#C7A14A] shadow-[0_0_10px_#C7A14A]"
                        style={{ width: `${progress}%` }}
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-4 text-[#F8F6F2]/60 text-xs tracking-[0.2em] uppercase"
                >
                    Loading Experience
                </motion.p>
            </div>
        </motion.div>
    );
};

export default SplashScreen;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

// Import all images from the directory using Vite's glob import
const imageModules = import.meta.glob('../assets/logoAnimated/*.jpg', { eager: true });

// Extract paths and sort them numerically based on the filename
const frames = Object.keys(imageModules)
    .sort((a, b) => {
        const numA = parseInt(a.match(/_(\d+)\.jpg$/)[1], 10);
        const numB = parseInt(b.match(/_(\d+)\.jpg$/)[1], 10);
        return numA - numB;
    })
    .map(path => imageModules[path].default);

const SplashScreen = ({ onComplete }) => {
    const [currentFrame, setCurrentFrame] = useState(0);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [animationFinished, setAnimationFinished] = useState(false);

    useEffect(() => {
        let loadedCount = 0;
        const totalImages = frames.length;

        // Preload all images
        frames.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedCount++;
                const progress = (loadedCount / totalImages) * 100;
                setLoadingProgress(progress);
                if (loadedCount === totalImages) {
                    setIsLoaded(true);
                }
            };
            img.onerror = () => {
                loadedCount++;
                const progress = (loadedCount / totalImages) * 100;
                setLoadingProgress(progress);
                if (loadedCount === totalImages) {
                    setIsLoaded(true);
                }
            };
        });
    }, []);

    useEffect(() => {
        if (!isLoaded) return;

        // Play animation sequence
        const interval = setInterval(() => {
            setCurrentFrame(prev => {
                if (prev >= frames.length - 1) {
                    clearInterval(interval);
                    setAnimationFinished(true);
                    return prev;
                }
                return prev + 1;
            });
        }, 50); // Slower speed (~20fps) to extend duration

        return () => clearInterval(interval);
    }, [isLoaded]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden"
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            {/* Background Gradient Spotlights */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#C7A14A]/5 rounded-full blur-[120px]" />
            </div>

            {!isLoaded ? (
                // Loading State
                <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-xs px-4">
                    <div className="w-16 h-16 border-2 border-t-[#C7A14A] border-r-[#C7A14A]/30 border-b-[#C7A14A]/10 border-l-[#C7A14A]/30 rounded-full animate-spin mb-6" />
                    <p className="text-[#C7A14A] text-xs tracking-[0.2em] uppercase">
                        Initializing {Math.round(loadingProgress)}%
                    </p>
                </div>
            ) : (
                // Main Content
                <div className="relative w-full h-full flex flex-col items-center justify-center">

                    {/* Logo Animation Container */}
                    <div className="relative w-full max-w-2xl aspect-video flex items-center justify-center p-4">
                        {/* 
                            Glow Effect behind the logo 
                            Scale and opacity animate in sync with the sequence roughly 
                        */}
                        <motion.div
                            className="absolute bg-[#C7A14A] rounded-full blur-[80px] opacity-0"
                            animate={animationFinished ? { opacity: 0.15, scale: 1.2 } : { opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            style={{ width: '300px', height: '300px' }}
                        />

                        {/* Masked Image Container for Blending */}
                        <div className="relative w-full h-full flex items-center justify-center" style={{
                            maskImage: 'radial-gradient(circle, black 40%, transparent 100%)',
                            WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 100%)'
                        }}>
                            <img
                                src={frames[currentFrame]}
                                alt="GPG Logo Animation"
                                className="relative z-10 w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Text & Interaction (Appears after animation) */}
                    <AnimatePresence>
                        {animationFinished && (
                            <motion.div
                                className="absolute bottom-12 md:bottom-20 flex flex-col items-center text-center px-4 z-20"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                <h1 className="text-2xl mt-3 md:text-4xl font-serif font-bold text-white mb-2 tracking-wide">
                                    Welcome to <span className="text-[#C7A14A]">Government Polytechnic Ghaziabad</span>
                                </h1>
                                <p className="text-gray-400 text-sm md:text-base mb-8 tracking-wider font-light">
                                    EMPOWERING TECHNICAL EDUCATION
                                </p>

                                <motion.button
                                    onClick={onComplete}
                                    className="group relative px-8 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-full transition-all duration-300 flex items-center gap-2 overflow-hidden"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    <span className="text-sm font-medium text-white tracking-widest uppercase">
                                        Let's Go
                                    </span>
                                    <ChevronRight className="w-4 h-4 text-[#C7A14A] group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}
        </motion.div>
    );
};

export default SplashScreen;

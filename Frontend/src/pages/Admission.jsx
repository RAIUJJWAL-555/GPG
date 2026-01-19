import React, { useState } from 'react';
import Header from '../Section/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Admission = () => {
    const [completedSteps, setCompletedSteps] = useState(0);

    const admissionSteps = [
        {
            step: 1,
            title: "Release of JEECUP Notification",
            description: "Check official JEECUP notification for important dates and eligibility criteria",
            link: "https://jeecup.admissions.nic.in/",
            linkText: "Visit JEECUP Portal",
            milestone: null
        },
        {
            step: 2,
            title: "Online Registration on JEECUP Portal",
            description: "Create your account on the official JEECUP admission portal",
            link: "https://jeecup.admissions.nic.in/",
            linkText: "Register Now",
            milestone: null
        },
        {
            step: 3,
            title: "Fill Application Form & Upload Documents",
            description: "Complete your application form with accurate details and upload required documents",
            link: "https://jeecup.admissions.nic.in/",
            linkText: "Fill Application",
            milestone: 25
        },
        {
            step: 4,
            title: "Pay Application Fee Online",
            description: "Submit your application fee through secure online payment",
            link: "https://jeecup.admissions.nic.in/",
            linkText: "Pay Fee",
            milestone: null
        },
        {
            step: 5,
            title: "Download Admit Card",
            description: "Download and print your admit card for the entrance exam",
            link: "https://jeecup.admissions.nic.in/document-category/admit-card/",
            linkText: "Download Admit Card",
            milestone: null
        },
        {
            step: 6,
            title: "Appear in JEECUP Entrance Exam (CBT)",
            description: "Take the Computer Based Test at your allotted exam center",
            link: "https://jeecup.admissions.nic.in/",
            linkText: "Exam Details",
            milestone: 50
        },
        {
            step: 7,
            title: "Result & Rank Card Declaration",
            description: "Check your result and download rank card after exam",
            link: "https://jeecup.admissions.nic.in/",
            linkText: "Check Result",
            milestone: null
        },
        {
            step: 8,
            title: "Online Counselling Registration",
            description: "Register for counselling process with your rank",
            link: "https://jeecup.admissions.nic.in/",
            linkText: "Counselling Registration",
            milestone: null
        },
        {
            step: 9,
            title: "Choice Filling (College + Branch Selection)",
            description: "Fill your preferred colleges and branches in order of priority",
            link: "https://jeecup.admissions.nic.in/",
            linkText: "Fill Choices",
            milestone: 75
        },
        {
            step: 10,
            title: "Seat Allotment",
            description: "Check your allotted college and branch based on rank and choices",
            link: "https://jeecup.admissions.nic.in/",
            linkText: "Check Allotment",
            milestone: null
        },
        {
            step: 11,
            title: "Document Verification at Allotted College",
            description: "Visit the allotted college with original documents for verification",
            link: null,
            linkText: null,
            milestone: null
        },
        {
            step: 12,
            title: "Fee Submission & Admission Confirmation",
            description: "Pay the college fee and complete admission formalities",
            link: null,
            linkText: null,
            milestone: 100
        }
    ];

    const getProgressPercentage = () => {
        return Math.round((completedSteps / admissionSteps.length) * 100);
    };

    const getMilestoneReached = () => {
        const completed = admissionSteps.slice(0, completedSteps);
        const milestones = completed.filter(s => s.milestone).map(s => s.milestone);
        return milestones.length > 0 ? Math.max(...milestones) : 0;
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#0B1C2D' }}>
            <Header />

            {/* Hero Section */}
            <div className="pt-40 pb-16 px-4">
                <div className="text-center relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block text-sm font-medium tracking-widest uppercase mb-4 px-4 py-2 rounded-full"
                        style={{
                            color: '#C7A14A',
                            backgroundColor: 'rgba(199, 161, 74, 0.1)',
                            border: '1px solid rgba(199, 161, 74, 0.3)'
                        }}
                    >
                        📋 JEECUP Admission Process
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                        style={{ color: '#F8F6F2' }}
                    >
                        Your Journey to <span style={{ color: '#C7A14A' }}>GPG</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg max-w-2xl mx-auto mb-8"
                        style={{ color: '#9CA3AF' }}
                    >
                        Follow these steps to secure your admission at Government Polytechnic Ghaziabad
                    </motion.p>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="px-4 pb-8">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-sm font-medium" style={{ color: '#C7A14A' }}>
                            Progress: {getProgressPercentage()}%
                        </span>
                        <span className="text-sm" style={{ color: '#9CA3AF' }}>
                            {completedSteps} of {admissionSteps.length} steps completed
                        </span>
                    </div>
                    <div className="h-4 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(199, 161, 74, 0.2)' }}>
                        <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: '#C7A14A' }}
                            initial={{ width: 0 }}
                            animate={{ width: `${getProgressPercentage()}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>

                    {/* Milestones */}
                    <div className="flex justify-between mt-2">
                        {[25, 50, 75, 100].map((milestone) => (
                            <div
                                key={milestone}
                                className={`text-xs font-medium px-2 py-1 rounded ${getMilestoneReached() >= milestone ? 'opacity-100' : 'opacity-40'}`}
                                style={{
                                    color: getMilestoneReached() >= milestone ? '#0B1C2D' : '#C7A14A',
                                    backgroundColor: getMilestoneReached() >= milestone ? '#C7A14A' : 'transparent',
                                    border: '1px solid #C7A14A'
                                }}
                            >
                                {milestone === 100 ? '🎓 Victory!' : `${milestone}%`}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="px-4 pb-20">
                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div
                        className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 transform md:-translate-x-1/2"
                        style={{ backgroundColor: 'rgba(199, 161, 74, 0.3)' }}
                    />

                    {admissionSteps.map((step, index) => (
                        <motion.div
                            key={step.step}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative flex items-start mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Step Number Circle */}
                            <div
                                className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10 cursor-pointer transition-all duration-300 ${completedSteps >= step.step ? 'scale-110' : 'hover:scale-110'
                                    }`}
                                style={{
                                    backgroundColor: completedSteps >= step.step ? '#C7A14A' : '#0B1C2D',
                                    color: completedSteps >= step.step ? '#0B1C2D' : '#C7A14A',
                                    border: '2px solid #C7A14A'
                                }}
                                onClick={() => setCompletedSteps(step.step)}
                            >
                                {completedSteps >= step.step ? '✓' : step.step}
                            </div>

                            {/* Content Card */}
                            <div
                                className={`ml-16 md:ml-0 md:w-[45%] p-6 rounded-xl transition-all duration-300 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                                    } ${completedSteps >= step.step ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                                style={{
                                    backgroundColor: completedSteps >= step.step ? 'rgba(199, 161, 74, 0.15)' : 'rgba(248, 246, 242, 0.05)',
                                    border: completedSteps >= step.step ? '2px solid #C7A14A' : '1px solid rgba(199, 161, 74, 0.2)'
                                }}
                            >
                                {/* Milestone Badge */}
                                {step.milestone && (
                                    <span
                                        className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                                        style={{
                                            backgroundColor: '#C7A14A',
                                            color: '#0B1C2D'
                                        }}
                                    >
                                        {step.milestone === 100 ? '🎓 VICTORY! College Secured!' : `🎯 ${step.milestone}% Milestone`}
                                    </span>
                                )}

                                <h3
                                    className="text-lg md:text-xl font-bold mb-2"
                                    style={{ color: '#F8F6F2' }}
                                >
                                    {step.title}
                                </h3>
                                <p
                                    className="text-sm mb-4"
                                    style={{ color: '#9CA3AF' }}
                                >
                                    {step.description}
                                </p>

                                {step.link && (
                                    <a
                                        href={step.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                                        style={{
                                            backgroundColor: '#C7A14A',
                                            color: '#0B1C2D'
                                        }}
                                    >
                                        {step.linkText}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <section
                className="py-16 px-4"
                style={{ backgroundColor: 'rgba(199, 161, 74, 0.1)' }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        style={{ color: '#F8F6F2' }}
                    >
                        Ready to Start Your Journey?
                    </h2>
                    <p
                        className="text-lg mb-8"
                        style={{ color: '#9CA3AF' }}
                    >
                        Don't miss the admission deadline. Begin your JEECUP registration today!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://jeecup.admissions.nic.in/"
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            style={{
                                backgroundColor: '#C7A14A',
                                color: '#0B1C2D'
                            }}
                        >
                            Start JEECUP Registration →
                        </a>
                        <a
                            href="https://jeecup.admissions.nic.in/document-category/admit-card/"
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                            style={{
                                backgroundColor: 'transparent',
                                color: '#C7A14A',
                                border: '2px solid #C7A14A'
                            }}
                        >
                            Download Admit Card
                        </a>
                    </div>
                </div>
            </section>

            {/* Important Links */}
            <section className="py-16 px-4" style={{ backgroundColor: '#0B1C2D' }}>
                <div className="max-w-6xl mx-auto">
                    <h2
                        className="text-2xl md:text-3xl font-bold text-center mb-12"
                        style={{ color: '#F8F6F2' }}
                    >
                        Important <span style={{ color: '#C7A14A' }}>Links</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "JEECUP Official Portal", link: "https://jeecup.admissions.nic.in/", icon: "🌐" },
                            { title: "UP Scholarship", link: "https://scholarship.up.gov.in/index.aspx", icon: "🎓" },
                            { title: "BTEUP Syllabus", link: "https://bteup.ac.in/webapp/SYLLABUS.aspx?type=6", icon: "📚" },
                            { title: "Admit Card", link: "https://jeecup.admissions.nic.in/document-category/admit-card/", icon: "🎫" },
                            { title: "Check Results", link: "https://result.bteexam.com/", icon: "📊" },
                            { title: "URISE Portal", link: "https://urise.up.gov.in/student/login", icon: "👨‍🎓" },
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                className="p-6 rounded-xl transition-all duration-300 hover:scale-105 group"
                                style={{
                                    backgroundColor: 'rgba(248, 246, 242, 0.05)',
                                    border: '1px solid rgba(199, 161, 74, 0.2)'
                                }}
                            >
                                <span className="text-3xl mb-4 block">{item.icon}</span>
                                <h3
                                    className="font-semibold group-hover:text-[#C7A14A] transition-colors"
                                    style={{ color: '#F8F6F2' }}
                                >
                                    {item.title}
                                </h3>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Admission;

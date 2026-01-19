import React from 'react';
import logo from '../assets/logo.png';
import upGovtLog from '../assets/upGovtLog.png';

const Footer = () => {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            `}</style>
            <hr />
            <footer
                className="flex flex-wrap justify-between items-center overflow-hidden gap-6 md:gap-10 py-10 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px]"
                style={{ backgroundColor: '#0B1C2D', color: '#9CA3AF' }}
            >
                {/* College Logo - Left */}
                <div className="flex items-center gap-4">
                    <img src={logo} alt="College Logo" className="w-50 h-50 object-contain" />
                    <div>
                        <h3 className="text-white font-semibold text-lg">Government Polytechnic</h3>
                        <p className="text-sm" style={{ color: '#C7A14A' }}>Ghaziabad</p>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <p className="font-semibold" style={{ color: '#F8F6F2' }}>Quick Links</p>
                    <ul className="mt-2 space-y-1">
                        <li><a href="/" className="hover:text-[#C7A14A] transition">Home</a></li>
                        <li><a href="/about" className="hover:text-[#C7A14A] transition">About Us</a></li>
                        <li><a href="/academics" className="hover:text-[#C7A14A] transition">Academics</a></li>
                        <li><a href="/admissions" className="hover:text-[#C7A14A] transition">Admissions</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <p className="font-semibold" style={{ color: '#F8F6F2' }}>Resources</p>
                    <ul className="mt-2 space-y-1">
                        <li><a href="/events" className="hover:text-[#C7A14A] transition">Events</a></li>
                        <li><a href="/gallery" className="hover:text-[#C7A14A] transition">Gallery</a></li>
                        <li><a href="/staff" className="hover:text-[#C7A14A] transition">Faculty</a></li>
                        <li><a href="/results" className="hover:text-[#C7A14A] transition">Results <span className="text-xs text-white rounded-md ml-1 px-1.5 py-0.5" style={{ backgroundColor: '#C7A14A' }}>New</span></a></li>
                        <li><a href="/contact" className="hover:text-[#C7A14A] transition">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <p className="font-semibold" style={{ color: '#F8F6F2' }}>Contact Us</p>
                    <ul className="mt-2 space-y-1">
                        <li className="flex items-start gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>D Block, Shastri Nagar,<br />Ghaziabad - 201002, UP</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href="mailto:principalgpg@gmail.com" className="hover:text-[#C7A14A] transition">principalgpg@gmail.com</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <a href="tel:+911202719500" className="hover:text-[#C7A14A] transition">+91-120-2719500</a>
                        </li>
                    </ul>
                </div>

                {/* Right Side - Social & Copyright */}
                <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
                    <img src={upGovtLog} alt="UP Government Logo" className=" w-30 h-30 object-contain mb-2" />
                    <p className="whitespace-nowrap">Affiliated with Government of Uttar Pradesh</p>

                    {/* Social Media Links */}
                    <div className="flex items-center gap-4 mt-3">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#C7A14A] transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#C7A14A] transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#C7A14A] transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#C7A14A] transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                                <path d="m10 15 5-3-5-3z"></path>
                            </svg>
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="mt-3 text-center">
                        © 2026 <span style={{ color: '#C7A14A' }}>Government Polytechnic Ghaziabad</span>. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;

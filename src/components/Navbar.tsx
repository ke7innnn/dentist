"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img
                        src="/logo.png"
                        alt="Clinic Logo"
                        className="w-12 h-12 object-contain"
                    />
                    <div className="flex flex-col">
                        <span className={`font-bold text-lg leading-tight ${isScrolled ? "text-primary-dark" : "text-primary-dark"} `}>
                            Dr. Sardesai's
                        </span>
                        <span className={`text-xs font-semibold uppercase tracking-wider ${isScrolled ? "text-primary" : "text-primary"}`}>
                            Dental Clinic
                        </span>
                    </div>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    {[
                        { name: "Home", path: "/" },
                        { name: "About Us", path: "/about" },
                        { name: "Services", path: "/services" },
                        { name: "Gallery", path: "/gallery" },
                        { name: "Contact", path: "/contact" }
                    ].map((item) => (
                        <a
                            key={item.name}
                            href={item.path}
                            className={`font-medium hover:text-primary transition-colors ${isScrolled ? "text-primary-dark" : "text-primary-dark"
                                }`}
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                <a
                    href="/booking"
                    className="hidden md:inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-full text-white bg-primary hover:bg-primary-dark transition-colors"
                >
                    Book Appointment
                </a>

                <button
                    className="md:hidden p-2 text-primary-dark"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg md:hidden overflow-hidden"
                    >
                        <nav className="flex flex-col p-4 bg-white shadow-xl">
                            {[
                                { name: "Home", path: "/" },
                                { name: "About Us", path: "/about" },
                                { name: "Services", path: "/services" },
                                { name: "Gallery", path: "/gallery" },
                                { name: "Contact", path: "/contact" }
                            ].map((item) => (
                                <a
                                    key={item.name}
                                    href={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="py-3 px-2 text-lg font-medium text-gray-800 hover:text-primary transition-colors border-b border-gray-50 last:border-0"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <a
                                href="/booking"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 flex items-center justify-center px-6 py-3.5 border border-transparent text-sm font-bold rounded-xl text-white bg-primary hover:bg-primary-dark transition-colors shadow-md w-full"
                            >
                                Book Appointment
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

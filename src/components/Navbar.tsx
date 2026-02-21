"use client";

import { useState, useEffect } from "react";
import { Link } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

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

                <button className="md:hidden p-2 text-primary-dark">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </motion.header>
    );
}

"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about-us" className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary-dark">
                            Where Care Meets <span className="text-primary">Confidence.</span>
                        </h2>
                        <div className="w-20 h-1 bg-primary rounded-full" />

                        <p className="text-lg text-gray-600 leading-relaxed">
                            We understand that visiting the dentist isn't just about treatment — it's about trust, comfort, and long-term care for your smile. That's why we go beyond the basics to provide an exceptional dental experience every time you walk through our doors.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            At Demo Dental Clinic, we believe every smile tells a story — and we're here to make yours bright, healthy, and confident. Our team of experienced dentists combines advanced technology with a gentle, caring approach to ensure every visit is comfortable and stress-free.
                        </p>

                        <ul className="space-y-4 pt-4">
                            {[
                                "Comprehensive Care Services",
                                "Highly Skilled Medical Team",
                                "Patient Centered Approach",
                                "Advanced Technology"
                            ].map((item, i) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="flex items-center gap-3 text-gray-700 font-medium"
                                >
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <div className="relative h-[600px] w-full hidden md:block">
                        <div className="sticky top-32 h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/clinic_interior.png"
                                alt="Demo Dental Clinic's modern dental clinic interior"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

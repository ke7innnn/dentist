"use client";

import { motion } from "framer-motion";

const reviews = [
    {
        name: "Sarah Jenkins",
        text: "Absolutely the best dental experience I've ever had. I was terrified of dentists for years, but Dr. Sardesai changed everything. The clinic is beautiful and calming!",
        rating: 5,
        tag: "Cosmetic Dentistry"
    },
    {
        name: "Michael Thompson",
        text: "Got my Invisalign here. The 3D scanning technology was super fast and didn't require any of that awful goop. highly recommend their team.",
        rating: 5,
        tag: "Orthodontics"
    },
    {
        name: "Emily R.",
        text: "I booked an emergency appointment for severe tooth pain on a Saturday. They took me in immediately and performed a flawless, painless root canal. Life savers.",
        rating: 5,
        tag: "Emergency Care"
    },
    {
        name: "David L.",
        text: "Brought my 6-year-old daughter in for her first real cleaning. Dr. Patel was incredible with her. She actually wants to go back to the dentist now!",
        rating: 5,
        tag: "Kids Dentistry"
    },
    {
        name: "Aarti Desai",
        text: "The porcelain veneers transformed my confidence completely. They look unbelievably natural. Worth every penny for the level of precision and artistry.",
        rating: 5,
        tag: "Veneers"
    },
    {
        name: "John K.",
        text: "Very professional staff and top-tier sterilization protocols. As a doctor myself, I am extremely picky about hygiene, and they exceeded my expectations.",
        rating: 5,
        tag: "General Checkup"
    }
];

export default function MasonryReviews() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4 tracking-wider uppercase"
                    >
                        Patient Love
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        More Stories From Real Patients
                    </motion.h2>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                            className="break-inside-avoid bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary/30 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-bold text-primary-dark tracking-wider uppercase bg-primary-light/50 px-3 py-1 rounded-full">{review.tag}</span>
                                <div className="flex text-primary">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6 italic">"{review.text}"</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">
                                    {review.name.charAt(0)}
                                </div>
                                <h4 className="font-bold text-gray-900">{review.name}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

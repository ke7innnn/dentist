"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Priya S.",
        role: "Client",
        text: "I came here for teeth whitening before my wedding, and the results were amazing! My smile has never looked better. Highly recommend!"
    },
    {
        name: "Rahul K.",
        role: "Client",
        text: "The clinic is clean, modern, and welcoming. My kids actually enjoy coming for their check-ups, which says a lot about how friendly the staff is."
    },
    {
        name: "Meena & Family",
        role: "Client",
        text: "I had been putting off dental treatment for years because of fear, but the gentle approach here completely changed my mind. Thank you for bringing back my smile!"
    },
    {
        name: "Anil V.",
        role: "Client",
        text: "I was very nervous before my root canal, but the doctor explained everything so clearly and made sure I was comfortable throughout. Truly the best dental experience I’ve had."
    }
];

export default function Testimonials() {
    return (
        <section id="gallery" className="py-24 bg-white relative overflow-hidden">

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-primary-dark mb-6"
                    >
                        Hear from our satisfied customers
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600"
                    >
                        Real stories from happy patients who’ve experienced our gentle care, advanced treatments, and life-changing smiles. Your trust is our greatest reward.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
                        >
                            <div className="flex text-yellow-400 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-8 leading-relaxed text-lg">
                                "{testimonial.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

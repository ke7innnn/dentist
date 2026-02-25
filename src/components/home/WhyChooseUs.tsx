"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle2, ShieldPlus } from "lucide-react";

export default function WhyChooseUs() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section ref={ref} className="py-32 bg-primary-dark relative overflow-hidden">

            {/* Animated Background Gradients */}
            <motion.div style={{ y: y1 }} className="absolute -top-[20%] -right-[10%] w-[50%] h-[150%] bg-primary/20 blur-[120px] rounded-full mix-blend-screen" />
            <motion.div style={{ y: y2 }} className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[150%] bg-white/5 blur-[120px] rounded-full mix-blend-screen" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-white space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary-light font-medium text-sm tracking-wide">
                            <ShieldPlus className="w-4 h-4" /> Why Choose Demo Dental
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                            A New Standard in <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-primary-light">Exceptional Dental Care</span>
                        </h2>

                        <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                            We combine years of clinical expertise with a luxurious, stress-free environment to deliver results that don't just improve your smile—they change your life.
                        </p>

                        <div className="space-y-4 pt-4">
                            {[
                                "Painless laser treatments & advanced sedation",
                                "State-of-the-art 3D imaging and diagnostics",
                                "Premium imported materials for lasting results",
                                "Dedicated post-treatment care and follow-ups"
                            ].map((text, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                                    className="flex items-center gap-3 text-lg text-gray-200"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-primary-light flex-shrink-0" />
                                    {text}
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="pt-8"
                        >
                            <a href="/about" className="inline-flex items-center gap-2 group text-white font-bold text-lg hover:text-primary-light transition-colors">
                                Discover Our Story
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Interactive Stat Cards Layout */}
                    <div className="grid grid-cols-2 gap-6 relative">
                        <div className="space-y-6 mt-12">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl text-center shadow-2xl cursor-pointer"
                            >
                                <h3 className="text-5xl font-bold text-white mb-2">15+</h3>
                                <p className="text-primary-light font-medium uppercase tracking-wider text-sm">Years Experience</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="p-8 bg-primary text-white rounded-3xl text-center shadow-2xl shadow-primary/30 cursor-pointer"
                            >
                                <h3 className="text-5xl font-bold mb-2">10k+</h3>
                                <p className="font-medium uppercase tracking-wider text-sm opacity-90">Happy Smiles</p>
                            </motion.div>
                        </div>

                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="p-8 bg-primary-light text-primary-dark rounded-3xl text-center shadow-2xl cursor-pointer"
                            >
                                <h3 className="text-5xl font-bold mb-2">4.9</h3>
                                <div className="flex justify-center text-primary-dark mb-2">
                                    {"★★★★★"}
                                </div>
                                <p className="font-semibold uppercase tracking-wider text-sm opacity-90">Google Rating</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-3xl text-center shadow-2xl cursor-pointer"
                            >
                                <h3 className="text-5xl font-bold mb-2">100%</h3>
                                <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">Sterilization</p>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

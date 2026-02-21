"use client";

import { motion } from "framer-motion";
import { HeartPulse, Target, ShieldCheck } from "lucide-react";

export default function OurMission() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Blur Backgrounds */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary-dark/5 blur-[100px] -z-10" />

            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4 tracking-wider uppercase"
                    >
                        Our Core Purpose
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Mission & Vision
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 leading-relaxed"
                    >
                        To transform the perception of dentistry by providing an unparalleled patient experience. We are dedicated to creating beautiful, healthy smiles through ethical practices, advanced technology, and genuine compassion.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {/* Pillar 1 */}
                    <motion.div variants={itemVariants} className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 group-hover:-rotate-12 duration-500">
                            <Target className="w-32 h-32" />
                        </div>
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <Target className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To be the premier dental sanctuary, recognized nationally for clinical excellence, innovative treatments, and a deeply personalized approach to absolute patient comfort.
                        </p>
                    </motion.div>

                    {/* Pillar 2 */}
                    <motion.div variants={itemVariants} className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 group-hover:-rotate-12 duration-500">
                            <HeartPulse className="w-32 h-32" />
                        </div>
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <HeartPulse className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">Compassion</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We treat the person, not just the mouth. We listen to your concerns, respect your anxieties, and customize every procedure to ensure your peace of mind.
                        </p>
                    </motion.div>

                    {/* Pillar 3 */}
                    <motion.div variants={itemVariants} className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 group-hover:-rotate-12 duration-500">
                            <ShieldCheck className="w-32 h-32" />
                        </div>
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">Precision</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Accepting no compromises in our work. We utilize state-of-the-art diagnostics and the highest grade materials to ensure outcomes that are beautiful and enduring.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

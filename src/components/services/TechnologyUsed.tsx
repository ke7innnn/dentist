"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MonitorPlay, ScanFace, Sparkles, X } from "lucide-react";

const technologies = [
    {
        id: "3d-imaging",
        title: "CBCT 3D Imaging",
        icon: ScanFace,
        description: "Our advanced Cone Beam Computed Tomography (CBCT) scanner provides highly accurate 3D images of your teeth, soft tissues, nerve pathways, and bone in a single scan. This is crucial for precise implant placement and complex root canal diagnoses.",
        benefits: ["Zero guesswork in treatments", "Lower radiation than traditional CT", "Immediate results for faster diagnosis"]
    },
    {
        id: "laser",
        title: "Soft Tissue Lasers",
        icon: Sparkles,
        description: "Experience virtually painless gum treatments with our state-of-the-art soft tissue lasers. They are used for gum contouring, treating periodontal disease, and performing biopsies with minimal bleeding and faster healing times.",
        benefits: ["Minimizes need for anesthesia", "Reduces bacterial infections", "Significantly faster recovery"]
    },
    {
        id: "intraoral",
        title: "Intraoral Scanners",
        icon: MonitorPlay,
        description: "Say goodbye to messy, uncomfortable dental impressions. Our digital intraoral scanners take thousands of pictures per second to create a perfect 3D model of your mouth, used for creating crowns, bridges, and clear aligners instantly.",
        benefits: ["No gag-inducing goop", "Perfectly fitted aligners and crowns", "Environmentally friendly"]
    }
];

export default function TechnologyUsed() {
    const [selectedTech, setSelectedTech] = useState<typeof technologies[0] | null>(null);

    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">

            {/* Abstract Tech Patterns */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-light font-semibold text-sm mb-4 tracking-wider uppercase border border-primary/30"
                    >
                        Innovation
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Advanced Dental Technology
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-400"
                    >
                        We invest in the latest dental innovations to ensure your treatments are faster, safer, and completely pain-free. Click below to explore our lab.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {technologies.map((tech, idx) => (
                        <motion.div
                            key={tech.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => setSelectedTech(tech)}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-3xl cursor-pointer hover:bg-white/10 transition-all hover:border-primary/50 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary-light mb-6 group-hover:scale-110 transition-transform">
                                <tech.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                            <p className="text-primary-light font-medium flex items-center gap-2 group-hover:gap-4 transition-all">
                                Learn More <span className="text-xl">→</span>
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedTech && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedTech(null)}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white text-gray-900 rounded-3xl max-w-2xl w-full p-8 md:p-12 relative shadow-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setSelectedTech(null)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <selectedTech.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-primary-dark">{selectedTech.title}</h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                {selectedTech.description}
                            </p>

                            <div>
                                <h4 className="font-bold uppercase tracking-wider text-sm text-gray-400 mb-4">Patient Benefits</h4>
                                <ul className="space-y-3">
                                    {selectedTech.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700 font-medium bg-gray-50 p-3 rounded-lg border border-gray-100">
                                            <div className="w-2 h-2 rounded-full bg-primary" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}

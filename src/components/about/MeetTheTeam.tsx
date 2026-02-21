"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

const team = [
    {
        name: "Dr. Siddhesh Sardesai",
        role: "Lead Cosmetic Dentist & Implantologist",
        bio: "With over 15 years of experience, Dr. Sardesai specializes in advanced cosmetic dentistry and full-mouth rehabilitation. He believes in a gentle approach to create life-changing smiles.",
        image: ""
    }
];

export default function MeetTheTeam() {
    return (
        <section className="py-24 bg-gray-50 relative">
            <div className="container mx-auto px-4 md:px-8">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4 tracking-wider uppercase"
                    >
                        Our Experts
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-primary-dark mb-6"
                    >
                        Meet The Doctors
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600"
                    >
                        Our clinic is led by a team of highly qualified specialists dedicated to providing you with the most advanced, comfortable, and personalized dental care available.
                    </motion.p>
                </div>

                <div className="flex justify-center">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-3xl mb-6 bg-white shadow-xl aspect-[4/5] cursor-pointer">
                                {/* Image */}
                                <div
                                    className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 ${member.image ? '' : 'bg-gray-200'}`}
                                    style={member.image ? { backgroundImage: `url('${member.image}')` } : {}}
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-primary-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-white/90 text-sm leading-relaxed mb-6">"{member.bio}"</p>
                                        <div className="flex gap-4">
                                            <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-primary-light flex items-center justify-center text-white transition-colors">
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                            <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-primary-light flex items-center justify-center text-white transition-colors">
                                                <Twitter className="w-5 h-5" />
                                            </a>
                                            <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-primary-light flex items-center justify-center text-white transition-colors">
                                                <Mail className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">{member.name}</h3>
                                <p className="text-primary font-medium mt-1">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

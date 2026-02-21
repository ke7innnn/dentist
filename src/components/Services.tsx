"use client";

import { motion } from "framer-motion";
import {
    Stethoscope,
    Activity,
    Baby,
    Sparkles,
    SmilePlus,
    Wrench,
    ShieldCheck,
    Syringe
} from "lucide-react";

const services = [
    {
        title: "Dental checkup & x-rays",
        desc: "Comprehensive exams with low-radiation imaging to detect issues early and keep your smile healthy.",
        icon: <Stethoscope className="w-8 h-8" />
    },
    {
        title: "Root Canal treatments",
        desc: "Our gentle root canal treatments remove infection, relieve pain, and preserve your natural tooth.",
        icon: <Activity className="w-8 h-8" />
    },
    {
        title: "Kids Dentistry",
        desc: "Gentle, fun, and stress-free dental care to keep young smiles healthy and confident from the start.",
        icon: <Baby className="w-8 h-8" />
    },
    {
        title: "Cosmetic Dentistry",
        desc: "Enhance your smile with personalized treatments like whitening, veneers, and bonding.",
        icon: <Sparkles className="w-8 h-8" />
    },
    {
        title: "Gum Health",
        desc: "Expert care to prevent, diagnose, and treat gum disease, protecting the foundation of your smile.",
        icon: <SmilePlus className="w-8 h-8" />
    },
    {
        title: "Orthodontics",
        desc: "Straighten and align teeth with braces or clear aligners for a healthier bite and confident smile.",
        icon: <Wrench className="w-8 h-8" />
    },
    {
        title: "Dental Implants",
        desc: "Permanent, natural-looking tooth replacements that restore your smile’s function and health.",
        icon: <ShieldCheck className="w-8 h-8" />
    },
    {
        title: "Oral Surgery",
        desc: "Safe, precise surgical care for extractions, impacted teeth, and other complex dental needs.",
        icon: <Syringe className="w-8 h-8" />
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Services() {
    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4 tracking-wider uppercase"
                    >
                        Complete Care Under One Roof
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-primary-dark mb-6"
                    >
                        Our Dental Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600"
                    >
                        From preventive check-ups to advanced cosmetic and restorative treatments, we provide every dental service you need in one convenient location. No referrals, no hassle.
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-gray-100"
                        >
                            <div className="w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.desc}
                            </p>
                            <div className="mt-6 font-semibold text-primary inline-flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer">
                                <span>More Details</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export default function EnhancedContact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Message sent successfully!");
            setFormState({ name: "", email: "", phone: "", subject: "", message: "" });
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

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
                        Get In Touch
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        We're Here to Help
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600"
                    >
                        Have a question, need to reschedule, or want to discuss a complex treatment plan? Reach out to our dedicated support team directly.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Contact Information (Sticky column) */}
                    <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-primary-dark text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden"
                        >
                            {/* Abstract background graphics */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                            <h3 className="text-3xl font-bold mb-8 relative z-10">Contact Details</h3>

                            <div className="space-y-8 relative z-10">
                                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary transition-all">
                                        <MapPin className="w-5 h-5 text-primary-light group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Clinic Address</h4>
                                        <p className="text-gray-300">123 Health Ave, Mumbai,<br /> Maharashtra 400001, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary transition-all">
                                        <Phone className="w-5 h-5 text-primary-light group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                                        <a href="tel:9967863033" className="text-gray-300 hover:text-white transition-colors">+91 9967863033</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary transition-all">
                                        <Mail className="w-5 h-5 text-primary-light group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Email Address</h4>
                                        <a href="mailto:dr.sardesai0909@gmail.com" className="text-gray-300 hover:text-white transition-colors">dr.sardesai0909@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary transition-all">
                                        <Clock className="w-5 h-5 text-primary-light group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                                        <p className="text-gray-300">Mon - Fri: 9:30 AM - 1:30 PM</p>
                                        <p className="text-gray-300">Mon - Fri: 5:30 PM - 10:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form and Map */}
                    <div className="lg:col-span-7 space-y-10">

                        {/* Map Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="h-80 w-full rounded-3xl overflow-hidden shadow-xl border border-gray-100 relative group"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: "url('https://maps.googleapis.com/maps/api/staticmap?center=Mumbai,India&zoom=14&size=800x400&maptype=roadmap')" }}
                            />

                            {/* Floating Map Marker */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:-translate-y-8 transition-transform duration-300">
                                <div className="relative">
                                    <div className="w-16 h-16 bg-primary/20 rounded-full animate-ping absolute top-0 left-0"></div>
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl relative z-10 border-4 border-primary">
                                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-6">
                                <span className="text-white font-bold tracking-wider">VIEW ON GOOGLE MAPS →</span>
                            </div>
                        </motion.div>

                        {/* Form Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Direct Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                        <input required type="text" name="name" value={formState.name} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder-gray-400" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                        <input required type="email" name="email" value={formState.email} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder-gray-400" placeholder="john@example.com" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                        <input required type="tel" name="phone" value={formState.phone} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder-gray-400" placeholder="+91 98765 43210" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                                        <input required type="text" name="subject" value={formState.subject} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder-gray-400" placeholder="How can we help?" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                                    <textarea required name="message" value={formState.message} onChange={handleChange} rows={5} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder-gray-400 resize-none" placeholder="Provide any specific details here..." />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-dark transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Sending Message..." : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
}

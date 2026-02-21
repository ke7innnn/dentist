"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "Are dental implants painful?",
        a: "Not at all. The procedure is performed under local anesthesia, and most patients report less discomfort than a tooth extraction. We also offer advanced sedation options for anxious patients."
    },
    {
        q: "How long do porcelain veneers last?",
        a: "With proper care, high-quality porcelain veneers can last anywhere from 10 to 15 years, and sometimes even longer. They are highly resistant to stains and incredibly durable."
    },
    {
        q: "Do you offer emergency dental services?",
        a: "Yes, we prioritize dental emergencies. If you are experiencing severe pain, a knocked-out tooth, or severe swelling, please call our emergency line immediately."
    },
    {
        q: "Are clear aligners faster than traditional braces?",
        a: "Treatment times vary depending on the complexity of the case. In many straightforward cases, clear aligners can achieve results faster, typically between 6 to 18 months."
    }
];

export default function ServicesFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600">Everything you need to know about our dental procedures.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="border border-gray-200 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full text-left px-6 py-5 flex justify-between items-center bg-white"
                            >
                                <span className="font-bold text-lg text-gray-900">{faq.q}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-primary transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 mt-2 pt-4">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

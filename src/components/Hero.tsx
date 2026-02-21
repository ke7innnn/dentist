"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section
            ref={ref}
            className="relative h-screen flex items-center justify-center overflow-hidden"
        >
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                {/* We will replace this with the generated image once we copy it */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/dental_hero_bg.png')", filter: "brightness(0.6)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            </motion.div>

            <div className="container relative z-10 px-4 md:px-8 text-center pt-20">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
                >
                    Expert Care for <br className="hidden md:block" />
                    <span className="text-primary-light">Confident Smiles</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto mb-10"
                >
                    Experience healthcare you can rely on. Our compassionate and skilled team is committed to providing you with exceptional care, ensuring your well-being is always our top priority.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="https://drsiddheshsardesai.in/about-us.php"
                        className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-light transition-all shadow-lg hover:shadow-primary/30 w-full sm:w-auto text-lg"
                    >
                        Book Appointment
                    </a>
                    <a
                        href="https://drsiddheshsardesai.in/dental-checkup-and-digital-x-rays.php"
                        className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-medium hover:bg-white hover:text-primary-dark transition-all w-full sm:w-auto text-lg"
                    >
                        Our Services
                    </a>
                </motion.div>
            </div>

            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
            >
                <div className="w-[30px] h-[50px] rounded-full border-2 border-white/50 flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-2 h-2 rounded-full bg-white"
                    />
                </div>
            </motion.div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { GripVertical } from "lucide-react";

export default function BeforeAfterGallery() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!isDragging || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
    };

    const handleMouseMove = (e: MouseEvent | React.MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent | React.TouchEvent) => handleMove(e.touches[0].clientX);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("touchmove", handleTouchMove);
            window.addEventListener("mouseup", () => setIsDragging(false));
            window.addEventListener("touchend", () => setIsDragging(false));
        }
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, [isDragging]);

    return (
        <section className="py-24 bg-primary-dark">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 text-white">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Before & After Transformations
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-300"
                    >
                        Drag the slider to see the life-changing results of our specialized treatments. Real patients, real results.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div
                        ref={containerRef}
                        className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
                        onMouseDown={() => setIsDragging(true)}
                        onTouchStart={() => setIsDragging(true)}
                    >
                        {/* Before Image (Background) */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop')" }}
                        >
                            <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg text-white font-bold tracking-wider text-sm">
                                BEFORE
                            </div>
                        </div>

                        {/* After Image (Clipped overlay) */}
                        <div
                            className="absolute inset-0 bg-cover bg-center pointer-events-none"
                            style={{
                                backgroundImage: "url('https://images.unsplash.com/photo-1620922841434-d9bc7deba783?q=80&w=1200&auto=format&fit=crop')",
                                clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`
                            }}
                        >
                            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg text-primary font-bold tracking-wider text-sm">
                                AFTER (VENEERS)
                            </div>
                        </div>

                        {/* Slider Handle */}
                        <div
                            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10"
                            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                        >
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-primary">
                                <GripVertical className="w-6 h-6" />
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-gray-400 mt-6 text-sm">
                        *Results may vary from patient to patient. This is an example of composite veneers.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

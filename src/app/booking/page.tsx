"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Calendar } from "lucide-react";

export default function BookingPage() {
    const [selectedDay, setSelectedDay] = useState(0);
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    const [isBooked, setIsBooked] = useState(false);

    const days = ["Today, June 14", "Wed, June 15", "Thu, June 16", "Fri, June 17", "Sat, June 18"];

    // Create mock slots: "available", "booked"
    const slots = [
        { time: "09:30 AM", status: "booked" },
        { time: "10:00 AM", status: "available" },
        { time: "10:30 AM", status: "available" },
        { time: "11:00 AM", status: "booked" },
        { time: "11:30 AM", status: "available" },
        { time: "12:00 PM", status: "booked" },
        { time: "05:30 PM", status: "available" },
        { time: "06:00 PM", status: "available" },
        { time: "06:30 PM", status: "booked" },
        { time: "07:00 PM", status: "available" },
        { time: "07:30 PM", status: "available" },
        { time: "08:00 PM", status: "available" },
    ];

    const handleBooking = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedSlot) {
            setIsBooked(true);
        }
    };

    return (
        <main className="min-h-screen pt-24 bg-gray-50 flex flex-col justify-between">
            <Navbar />

            <div className="container mx-auto px-4 md:px-8 py-12 flex-grow">

                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden shadow-primary/5">
                    <div className="bg-primary p-8 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10">
                            <Calendar className="w-12 h-12 mx-auto mb-4 opacity-80" />
                            <h1 className="text-4xl font-bold mb-2">Book Your Appointment</h1>
                            <p className="text-primary-light text-lg">Select a date and time that works best for you.</p>
                        </div>
                    </div>

                    {!isBooked ? (
                        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12">

                            {/* Left Side: Slot Picker */}
                            <div className="space-y-8">
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-4 flex justify-between items-center text-lg">
                                        <span>Date</span>
                                        <span className="text-primary text-sm font-semibold">{days[selectedDay]}</span>
                                    </h3>
                                    <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
                                        {days.map((day, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => { setSelectedDay(idx); setSelectedSlot(null); }}
                                                className={`px-4 py-2 rounded-xl whitespace-nowrap text-sm font-semibold transition-all ${selectedDay === idx
                                                    ? "bg-primary text-white shadow-md shadow-primary/20"
                                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                                    }`}
                                            >
                                                {day.split(',')[0]}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-bold text-gray-900 mb-4 text-lg">Time Slot</h3>
                                    <div className="grid grid-cols-3 gap-3">
                                        {slots.map((slot, idx) => {
                                            const isTimeSelected = selectedSlot === slot.time;
                                            const isUnavailable = slot.status === "booked";

                                            return (
                                                <button
                                                    key={idx}
                                                    disabled={isUnavailable}
                                                    onClick={() => setSelectedSlot(slot.time)}
                                                    className={`
                            py-3 rounded-xl text-sm font-semibold border-2 transition-all relative overflow-hidden
                            ${isUnavailable
                                                            ? "bg-gray-50 border-gray-100 text-gray-400 cursor-not-allowed"
                                                            : isTimeSelected
                                                                ? "bg-primary border-primary text-white shadow-lg shadow-primary/30"
                                                                : "bg-white border-primary/20 text-primary hover:border-primary"
                                                        }
                          `}
                                                >
                                                    {slot.time}
                                                    {isUnavailable && <span className="absolute inset-0 bg-stripes opacity-10"></span>}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    {/* Legend */}
                                    <div className="flex items-center gap-6 mt-6 pt-6 border-t border-gray-100 text-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-white border-2 border-primary/20"></div>
                                            <span className="text-gray-600">Available</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-primary border-2 border-primary"></div>
                                            <span className="text-gray-600">Selected</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-gray-100 border-2 border-gray-100"></div>
                                            <span className="text-gray-600">Booked</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Form */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 relative">
                                <AnimatePresence>
                                    {!selectedSlot && (
                                        <motion.div
                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                            className="absolute inset-0 bg-gray-50/80 backdrop-blur-[1px] z-10 rounded-2xl flex items-center justify-center p-6 text-center"
                                        >
                                            <p className="text-gray-500 font-medium">Please select a time slot to continue with your booking.</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <h3 className="font-bold text-gray-900 mb-6 text-lg">Patient Details</h3>
                                <form onSubmit={handleBooking} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <input required type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input required type="tel" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="+91 98765 43210" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Reason for visit</label>
                                        <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-700">
                                            <option>General Checkup</option>
                                            <option>Tooth Pain</option>
                                            <option>Cleaning</option>
                                            <option>Consultation</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30"
                                        >
                                            Confirm Booking
                                        </button>
                                        <p className="text-center text-xs text-gray-500 mt-4">
                                            By booking, you agree to our cancellation policy.
                                        </p>
                                    </div>
                                </form>
                            </div>

                        </div>
                    ) : (
                        // Success State
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-16 text-center flex flex-col items-center justify-center min-h-[400px]"
                        >
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                <Check className="w-8 h-8 font-bold" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
                            <p className="text-gray-600 text-lg max-w-md mx-auto mb-8">
                                Your appointment has been successfully scheduled for <strong className="text-primary">{days[selectedDay]} at {selectedSlot}</strong>. We've sent a confirmation to your phone.
                            </p>
                            <button
                                onClick={() => { setIsBooked(false); setSelectedSlot(null); }}
                                className="px-8 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors border border-gray-200"
                            >
                                Book Another Appointment
                            </button>
                        </motion.div>
                    )}

                </div>
            </div>

            <Footer />
        </main>
    );
}

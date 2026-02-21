"use client";

import { useState } from "react";
import { MessageSquare, X, Send, ChevronRight, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
    id: number;
    type: "bot" | "user";
    text: string;
};

const initialMessage: Message = { id: 1, type: "bot", text: "Hello! Welcome to Dr. Sardesai's Clinic. How can I help you today?" };

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([initialMessage]);
    const [inputValue, setInputValue] = useState("");

    const quickReplies = [
        "What are your working hours?",
        "Where is the clinic located?",
        "How can I book an appointment?",
        "Do you offer dental implants?",
        "Are your treatments painful?"
    ];

    const handleSend = (text: string) => {
        if (!text.trim()) return;

        // Add user message
        const userMsg: Message = { id: Date.now(), type: "user", text };
        setMessages(prev => [...prev, userMsg]);
        setInputValue("");

        // Simulate bot response
        setTimeout(() => {
            let replyText = "I'm a simple bot right now. Please call us at +91 9967863033 for detailed inquiries!";

            const lowerText = text.toLowerCase();
            if (lowerText.includes("hours") || lowerText.includes("time")) {
                replyText = "We are open Monday to Friday, from 9:30am - 1:30pm and 5:30pm - 10:00pm.";
            } else if (lowerText.includes("location") || lowerText.includes("where")) {
                replyText = "We are located at 123 Health Ave, Mumbai. You can find our map on the Contact page.";
            } else if (lowerText.includes("book") || lowerText.includes("appointment")) {
                replyText = "You can click on 'Book Appointment' in the navigation bar or use the Booking portal to schedule a visit!";
            } else if (lowerText.includes("implant")) {
                replyText = "Yes, Dr. Sardesai specializes in advanced implantology and full-mouth rehabilitation. We offer single implants and All-on-4 solutions.";
            } else if (lowerText.includes("pain") || lowerText.includes("hurt")) {
                replyText = "We deeply value patient comfort! We use advanced soft tissue lasers and precise techniques to ensure virtually pain-free experiences.";
            }

            setMessages(prev => [...prev, { id: Date.now(), type: "bot", text: replyText }]);
        }, 1000);
    };

    const handleEndChat = () => {
        setMessages([initialMessage]);
        setIsOpen(false);
    }

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-4 md:right-8 w-[350px] bg-white rounded-2xl shadow-2xl overflow-hidden z-[100] border border-gray-100 flex flex-col h-[500px]"
                    >
                        {/* Header */}
                        <div className="bg-primary p-4 flex items-center justify-between text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                                    S
                                </div>
                                <div>
                                    <h3 className="font-bold">Clinic Assistant</h3>
                                    <p className="text-xs text-primary-light flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-green-400"></span> Online
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={handleEndChat}
                                    title="End Chat"
                                    className="p-2 hover:bg-white/20 rounded-full transition-colors flex items-center justify-center text-xs"
                                >
                                    <RotateCcw className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4">
                            {messages.map(msg => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${msg.type === "user"
                                        ? "bg-primary text-white rounded-br-none"
                                        : "bg-white text-gray-800 shadow-sm rounded-bl-none border border-gray-100"
                                        }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}

                            {/* Quick Replies */}
                            {messages.length === 1 && (
                                <div className="flex flex-col gap-2 mt-2">
                                    {quickReplies.map((reply, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleSend(reply)}
                                            className="text-left text-xs bg-white text-primary border border-primary/20 p-2 rounded-lg hover:bg-primary/5 transition-colors flex items-center justify-between"
                                        >
                                            {reply}
                                            <ChevronRight className="w-3 h-3" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend(inputValue)}
                                className="flex-1 bg-gray-50 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                            <button
                                onClick={() => handleSend(inputValue)}
                                className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors"
                            >
                                <Send className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center z-[100] hover:bg-primary-dark transition-colors"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
            </motion.button>
        </>
    );
}

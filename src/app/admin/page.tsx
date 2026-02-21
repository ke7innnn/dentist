"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, Plus, Phone, AlertCircle, CheckCircle2, CalendarDays, Users, LayoutDashboard, Settings, LogOut, Search, Bell, X, Menu } from "lucide-react";

// --- MOCK DATA ---
const operatingHours = [
    "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM",
    "BREAK",
    "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"
];

type AppointmentStatus = "confirmed" | "completed" | "pending" | "canceled";

interface Appointment {
    id: string;
    patientName: string;
    phone: string;
    time: string;
    duration: number; // in 30-min blocks (1 = 30m, 2 = 1h)
    treatment: string;
    status: AppointmentStatus;
    isNewPatient: boolean;
}

const initialAppointments: Record<string, Appointment[]> = {
    "2023-10-25": [
        { id: "1", patientName: "Sarah Jenkins", phone: "+91 98765 43210", time: "9:30 AM", duration: 2, treatment: "Root Canal Prep", status: "confirmed", isNewPatient: false },
        { id: "2", patientName: "Rahul Sharma", phone: "+91 87654 32109", time: "11:00 AM", duration: 1, treatment: "General Consultation", status: "completed", isNewPatient: true },
        { id: "3", patientName: "Priya Patel", phone: "+91 76543 21098", time: "12:00 PM", duration: 2, treatment: "Teeth Whitening", status: "confirmed", isNewPatient: false },
        { id: "4", patientName: "Amit Kumar", phone: "+91 65432 10987", time: "5:30 PM", duration: 3, treatment: "Implant Surgery", status: "pending", isNewPatient: true },
        { id: "5", patientName: "Neha Gupta", phone: "+91 54321 09876", time: "8:00 PM", duration: 1, treatment: "Follow-up", status: "canceled", isNewPatient: false },
    ]
};

const getStatusColors = (status: AppointmentStatus) => {
    switch (status) {
        case "confirmed": return "bg-blue-100 border-blue-300 text-blue-800";
        case "completed": return "bg-green-100 border-green-300 text-green-800";
        case "pending": return "bg-orange-100 border-orange-300 text-orange-800";
        case "canceled": return "bg-red-100 border-red-300 text-red-800";
        default: return "bg-gray-100 border-gray-300 text-gray-800";
    }
};

const getStatusIcon = (status: AppointmentStatus) => {
    switch (status) {
        case "confirmed": return <CheckCircle2 className="w-4 h-4 text-blue-600" />;
        case "completed": return <CheckCircle2 className="w-4 h-4 text-green-600" />;
        case "pending": return <Clock className="w-4 h-4 text-orange-600" />;
        case "canceled": return <AlertCircle className="w-4 h-4 text-red-600" />;
    }
};


export default function AdminDashboardPage() {
    const [activeTab, setActiveTab] = useState<"dashboard" | "appointments" | "patients" | "settings">("appointments");
    const [appointments, setAppointments] = useState(initialAppointments);

    const [selectedDate, setSelectedDate] = useState(new Date("2023-10-25"));
    const [viewMode, setViewMode] = useState<"calendar" | "list">("calendar");
    const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const [isNewBookingModalOpen, setIsNewBookingModalOpen] = useState(false);
    const [newBookingForm, setNewBookingForm] = useState({ name: "", phone: "", time: "9:30 AM", duration: 1, treatment: "" });

    const dateString = selectedDate.toISOString().split('T')[0];
    const dayAppointments = appointments[dateString] || [];

    const handleCreateBooking = (e: React.FormEvent) => {
        e.preventDefault();
        const newAppt: Appointment = {
            id: Date.now().toString(),
            patientName: newBookingForm.name,
            phone: newBookingForm.phone,
            time: newBookingForm.time,
            duration: Number(newBookingForm.duration),
            treatment: newBookingForm.treatment,
            status: "confirmed",
            isNewPatient: true
        };

        setAppointments(prev => ({
            ...prev,
            [dateString]: [...(prev[dateString] || []), newAppt]
        }));
        setIsNewBookingModalOpen(false);
        setNewBookingForm({ name: "", phone: "", time: "9:30 AM", duration: 1, treatment: "" });
    };

    const updateAppointmentStatus = (id: string, newStatus: AppointmentStatus) => {
        setAppointments(prev => ({
            ...prev,
            [dateString]: prev[dateString].map(appt => appt.id === id ? { ...appt, status: newStatus } : appt)
        }));
    };

    // Content for each tab
    const renderContent = () => {
        // Intercept with Search Results if a query exists
        if (searchQuery.trim() !== "") {
            const allAppointments = Object.values(appointments).flat();
            const searchResults = allAppointments.filter(appt =>
                appt.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                appt.phone.includes(searchQuery) ||
                appt.treatment.toLowerCase().includes(searchQuery.toLowerCase())
            );

            return (
                <div className="max-w-7xl mx-auto space-y-6">
                    <h1 className="text-2xl font-bold text-gray-900">Search Results for "{searchQuery}"</h1>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[800px]">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-100">
                                        <th className="py-4 px-6 font-semibold text-gray-500 text-sm">Date & Time</th>
                                        <th className="py-4 px-6 font-semibold text-gray-500 text-sm">Patient Name</th>
                                        <th className="py-4 px-6 font-semibold text-gray-500 text-sm">Contact</th>
                                        <th className="py-4 px-6 font-semibold text-gray-500 text-sm">Treatment</th>
                                        <th className="py-4 px-6 font-semibold text-gray-500 text-sm">Status</th>
                                        <th className="py-4 px-6 font-semibold text-gray-500 text-sm text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {searchResults.length > 0 ? searchResults.map(appt => {
                                        // Find which date this appointment belongs to for display
                                        const dateKey = Object.keys(appointments).find(key => appointments[key].some(a => a.id === appt.id));
                                        return (
                                            <tr key={appt.id} className="hover:bg-gray-50 transition-colors">
                                                <td className="py-4 px-6 font-medium text-gray-900">
                                                    <div className="text-sm">{dateKey}</div>
                                                    <div className="text-sm text-gray-500">{appt.time}</div>
                                                </td>
                                                <td className="py-4 px-6">
                                                    <div className="font-bold text-gray-900">{appt.patientName}</div>
                                                    {appt.isNewPatient && <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">New Patient</span>}
                                                </td>
                                                <td className="py-4 px-6 text-gray-600 text-sm flex items-center gap-2">
                                                    <Phone className="w-3 h-3" /> {appt.phone}
                                                </td>
                                                <td className="py-4 px-6 text-gray-600 text-sm">{appt.treatment}</td>
                                                <td className="py-4 px-6">
                                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${getStatusColors(appt.status)}`}>
                                                        {getStatusIcon(appt.status)}
                                                        <span className="capitalize">{appt.status}</span>
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-right">
                                                    <button onClick={() => setSelectedAppointment(appt)} className="text-primary hover:text-primary-dark font-medium text-sm">View</button>
                                                </td>
                                            </tr>
                                        )
                                    }) : (
                                        <tr>
                                            <td colSpan={6} className="py-12 text-center text-gray-500">
                                                No results found matching your search.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            );
        }

        if (activeTab === "dashboard") {
            return (
                <div className="max-w-7xl mx-auto space-y-6">
                    <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-2">
                            <span className="text-gray-500 font-medium">Total Appointments Today</span>
                            <span className="text-3xl font-bold">{dayAppointments.length}</span>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-2">
                            <span className="text-gray-500 font-medium">Completed</span>
                            <span className="text-3xl font-bold text-green-600">{dayAppointments.filter(a => a.status === 'completed').length}</span>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-2">
                            <span className="text-gray-500 font-medium">Pending/Upcoming</span>
                            <span className="text-3xl font-bold text-orange-600">{dayAppointments.filter(a => a.status === 'pending' || a.status === 'confirmed').length}</span>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-2">
                            <span className="text-gray-500 font-medium">Cancellations</span>
                            <span className="text-3xl font-bold text-red-600">{dayAppointments.filter(a => a.status === 'canceled').length}</span>
                        </div>
                    </div>
                </div>
            );
        }

        if (activeTab === "patients") {
            return (
                <div className="max-w-7xl mx-auto space-y-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">Patient Directory</h1>
                    <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 text-center text-gray-500">
                        <Users className="w-12 h-12 mx-auto mb-4 opacity-20" />
                        <p>Search mechanism and full patient database would be connected here.</p>
                    </div>
                </div>
            );
        }

        if (activeTab === "settings") {
            return (
                <div className="max-w-7xl mx-auto space-y-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">Clinic Settings</h1>
                    <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 text-center text-gray-500">
                        <Settings className="w-12 h-12 mx-auto mb-4 opacity-20" />
                        <p>Configuration for operating hours, staff accounts, and notifications.</p>
                    </div>
                </div>
            );
        }

        // Default: Appointments Tab
        return (
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header & Controls */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Appointments Schedule</h1>
                        <p className="text-gray-500 mt-1">Manage today's bookings and patient flow.</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        {/* Date Navigator */}
                        <div className="flex items-center bg-gray-50 rounded-lg p-1 border border-gray-200">
                            <button className="p-2 hover:bg-white rounded-md transition-colors text-gray-600">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <div className="px-4 font-semibold text-gray-800 flex items-center gap-2">
                                <CalendarDays className="w-4 h-4 text-primary" />
                                Today, Oct 25
                            </div>
                            <button className="p-2 hover:bg-white rounded-md transition-colors text-gray-600">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* View Toggle */}
                        <div className="flex bg-gray-100 p-1 rounded-lg border border-gray-200">
                            <button
                                onClick={() => setViewMode("calendar")}
                                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${viewMode === "calendar" ? "bg-white text-primary shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                            >
                                Calendar View
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${viewMode === "list" ? "bg-white text-primary shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                            >
                                List View
                            </button>
                        </div>

                        <button
                            onClick={() => setIsNewBookingModalOpen(true)}
                            className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-bold transition-colors shadow-sm"
                        >
                            <Plus className="w-5 h-5" />
                            New Booking
                        </button>
                    </div>
                </div>

                {/* Main Content Area */}
                {viewMode === "calendar" ? (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        {/* Grid Header */}
                        <div className="grid grid-cols-12 border-b border-gray-100 bg-gray-50/50">
                            <div className="col-span-2 py-4 text-center font-bold text-gray-500 text-sm border-r border-gray-100">TIME</div>
                            <div className="col-span-10 py-4 px-6 font-bold text-gray-800">DR. SARDESAI (Chair 1)</div>
                        </div>

                        {/* Timeline Grid */}
                        <div className="relative">
                            {operatingHours.map((time, idx) => {
                                if (time === "BREAK") {
                                    return (
                                        <div key={idx} className="h-12 bg-gray-50 border-b border-gray-100 flex items-center justify-center">
                                            <span className="text-gray-400 font-bold tracking-widest text-sm uppercase">Clinic Closed / Break</span>
                                        </div>
                                    );
                                }

                                // Find appointment for this specific time slot
                                const appt = dayAppointments.find(a => a.time === time);

                                return (
                                    <div key={idx} className="grid grid-cols-12 border-b border-gray-50 relative group">

                                        {/* Time Column */}
                                        <div className="col-span-2 py-4 text-center text-sm font-medium text-gray-500 border-r border-gray-100 bg-white z-10">
                                            {time}
                                        </div>

                                        {/* Schedule Column */}
                                        <div className="col-span-10 relative h-16 hover:bg-gray-50 cursor-pointer transition-colors">
                                            {/* Render Appointment Block if exists at this start time */}
                                            {appt && (
                                                <div
                                                    onClick={() => setSelectedAppointment(appt)}
                                                    className={`absolute top-1 left-2 right-4 bottom-1 rounded-lg border-l-4 p-3 shadow-sm flex flex-col justify-center transition-all hover:shadow-md z-20 ${getStatusColors(appt.status)} hover:scale-[1.01] cursor-pointer`}
                                                    style={{
                                                        height: `calc(${appt.duration * 4}rem - 0.5rem)`, // 4rem is height of one block (h-16)
                                                        zIndex: 30
                                                    }}
                                                >
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h4 className="font-bold text-sm leading-tight">{appt.patientName} {appt.isNewPatient && <span className="text-[10px] ml-1 bg-white/50 px-1.5 py-0.5 rounded uppercase tracking-wider">New</span>}</h4>
                                                            <p className="text-xs mt-0.5 opacity-90 truncate">{appt.treatment}</p>
                                                        </div>
                                                        {getStatusIcon(appt.status)}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    /* LIST VIEW */
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[800px]">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-100">
                                        <th className="py-4 px-6 font-semibold text-gray-500 text-sm">Time</th>
                                        <th className="py-4 px-6 font-semibold text-gray-500 text-sm">Patient Name</th>
                                        <th className="py-4 px-6 font-semibold text-gray-500 text-sm">Contact</th>
                                        <th className="py-4 px-6 font-semibold text-gray-500 text-sm">Treatment</th>
                                        <th className="py-4 px-6 font-semibold text-gray-500 text-sm">Status</th>
                                        <th className="py-4 px-6 font-semibold text-gray-500 text-sm text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {dayAppointments.length > 0 ? dayAppointments.map(appt => (
                                        <tr key={appt.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 font-medium text-gray-900 border-l-4" style={{ borderLeftColor: appt.status === 'confirmed' ? '#3b82f6' : appt.status === 'completed' ? '#22c55e' : appt.status === 'pending' ? '#f97316' : '#ef4444' }}>
                                                {appt.time} <span className="text-xs text-gray-400 block">{appt.duration * 30} mins</span>
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="font-bold text-gray-900">{appt.patientName}</div>
                                                {appt.isNewPatient && <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">New Patient</span>}
                                            </td>
                                            <td className="py-4 px-6 text-gray-600 text-sm flex items-center gap-2">
                                                <Phone className="w-3 h-3" /> {appt.phone}
                                            </td>
                                            <td className="py-4 px-6 text-gray-600 text-sm">{appt.treatment}</td>
                                            <td className="py-4 px-6">
                                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${getStatusColors(appt.status)}`}>
                                                    {getStatusIcon(appt.status)}
                                                    <span className="capitalize">{appt.status}</span>
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 text-right">
                                                <button onClick={() => setSelectedAppointment(appt)} className="text-primary hover:text-primary-dark font-medium text-sm">View</button>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan={6} className="py-12 text-center text-gray-500">
                                                No appointments scheduled for this date.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar Navigation */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
                <div className="h-20 flex items-center px-8 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                            S
                        </div>
                        <span className="font-bold text-lg text-primary-dark tracking-tight">ClinicAdmin</span>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <button onClick={() => setActiveTab("dashboard")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'dashboard' ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>
                        <LayoutDashboard className="w-5 h-5" /> Dashboard
                    </button>
                    <button onClick={() => setActiveTab("appointments")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'appointments' ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>
                        <CalendarDays className="w-5 h-5" /> Appointments
                    </button>
                    <button onClick={() => setActiveTab("patients")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'patients' ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>
                        <Users className="w-5 h-5" /> Patients
                    </button>
                    <button onClick={() => setActiveTab("settings")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'settings' ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>
                        <Settings className="w-5 h-5" /> Settings
                    </button>
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <a href="/" className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl font-medium transition-colors">
                        <LogOut className="w-5 h-5" /> Back to Site
                    </a>
                </div>
            </aside>

            {/* Mobile Bottom Navigation Layout */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden pb-16 md:pb-0">

                {/* Top Header */}
                <header className="h-auto md:h-20 bg-white border-b border-gray-200 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-3 md:py-0 flex-shrink-0 gap-3">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <div className="flex items-center gap-2 md:hidden">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">S</div>
                            <span className="font-bold text-lg text-primary-dark">Admin</span>
                        </div>
                        <div className="flex items-center gap-4 md:hidden">
                            <button className="relative p-2 text-gray-400 hover:text-primary transition-colors">
                                <Bell className="w-5 h-5 bg-transparent" />
                                <span className="absolute top-1 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                            </button>
                            <div className="w-8 h-8 rounded-full bg-primary-light/30 flex items-center justify-center text-primary-dark font-bold text-xs">JS</div>
                        </div>
                    </div>

                    <div className="relative w-full md:w-96">
                        <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search patients, phone numbers..."
                            className="w-full pl-12 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                        />
                    </div>

                    <div className="hidden md:flex items-center gap-6 ml-auto">
                        <button className="relative p-2 text-gray-400 hover:text-primary transition-colors">
                            <Bell className="w-6 h-6" />
                            <span className="absolute top-1 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
                            <div className="w-10 h-10 rounded-full bg-primary-light/30 flex items-center justify-center text-primary-dark font-bold text-sm">
                                JS
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900">Jane Smith</p>
                                <p className="text-xs text-gray-500">Receptionist</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Scrollable Dashboard Content */}
                <div className="flex-1 overflow-auto p-4 md:p-8 bg-gray-50">
                    {renderContent()}
                </div>

            </main>

            {/* Mobile Bottom Navigation Bar */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16 z-50 px-2 pb-safe">
                <button onClick={() => setActiveTab("dashboard")} className={`flex flex-col items-center justify-center w-16 gap-1 ${activeTab === 'dashboard' ? 'text-primary' : 'text-gray-400'}`}>
                    <LayoutDashboard className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Dash</span>
                </button>
                <button onClick={() => setActiveTab("appointments")} className={`flex flex-col items-center justify-center w-16 gap-1 ${activeTab === 'appointments' ? 'text-primary' : 'text-gray-400'}`}>
                    <CalendarDays className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Appts</span>
                </button>
                <button onClick={() => setIsNewBookingModalOpen(true)} className="flex flex-col items-center justify-center -mt-6">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg border-4 border-gray-50">
                        <Plus className="w-6 h-6" />
                    </div>
                </button>
                <button onClick={() => setActiveTab("patients")} className={`flex flex-col items-center justify-center w-16 gap-1 ${activeTab === 'patients' ? 'text-primary' : 'text-gray-400'}`}>
                    <Users className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Patients</span>
                </button>
                <button onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} className={`flex flex-col items-center justify-center w-16 gap-1 ${isMobileNavOpen || activeTab === 'settings' ? 'text-primary' : 'text-gray-400'}`}>
                    <Menu className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Menu</span>
                </button>
            </nav>

            {/* Mobile Expanded Menu overlay */}
            <AnimatePresence>
                {isMobileNavOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        className="md:hidden fixed inset-x-0 bottom-16 bg-white border-t border-gray-200 shadow-xl z-40 p-4 rounded-t-2xl"
                    >
                        <div className="space-y-2">
                            <button onClick={() => { setActiveTab("settings"); setIsMobileNavOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'settings' ? 'bg-primary/10 text-primary' : 'text-gray-600'}`}>
                                <Settings className="w-5 h-5" /> Settings
                            </button>
                            <a href="/" className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl font-medium transition-colors">
                                <LogOut className="w-5 h-5" /> Sign Out to Main Site
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Appointment Detail Modal */}
            <AnimatePresence>
                {selectedAppointment && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedAppointment(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 10 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden"
                        >
                            <div className={`p-6 border-b border-black/5 ${getStatusColors(selectedAppointment.status)} bg-opacity-30`}>
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white shadow-sm border ${getStatusColors(selectedAppointment.status)}`}>
                                        <span className="capitalize">{selectedAppointment.status}</span>
                                    </span>
                                    <button onClick={() => setSelectedAppointment(null)} className="text-gray-500 hover:text-gray-900 bg-white rounded-full p-1 shadow-sm">
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                                <h2 className="text-2xl font-bold mb-1">{selectedAppointment.patientName}</h2>
                                <p className="text-sm opacity-80 flex items-center gap-2"><Phone className="w-3 h-3" /> {selectedAppointment.phone}</p>
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                                        <span className="text-xs font-bold text-gray-400 uppercase">Time</span>
                                        <p className="font-bold text-gray-900">{selectedAppointment.time}</p>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                                        <span className="text-xs font-bold text-gray-400 uppercase">Duration</span>
                                        <p className="font-bold text-gray-900">{selectedAppointment.duration * 30} mins</p>
                                    </div>
                                </div>

                                <div>
                                    <span className="text-xs font-bold text-gray-400 uppercase mb-1 block">Treatment / Reason</span>
                                    <p className="text-gray-900 bg-gray-50 p-3 rounded-xl border border-gray-100">{selectedAppointment.treatment}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100 mt-6">
                                    {selectedAppointment.status === "confirmed" && (
                                        <button onClick={() => { updateAppointmentStatus(selectedAppointment.id, "completed"); setSelectedAppointment(null); }} className="col-span-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl shadow-sm transition-colors">
                                            Mark as Completed
                                        </button>
                                    )}

                                    <button onClick={() => setSelectedAppointment(null)} className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-bold py-3 rounded-xl transition-colors">
                                        Close
                                    </button>
                                    <button onClick={() => { updateAppointmentStatus(selectedAppointment.id, "canceled"); setSelectedAppointment(null); }} className="bg-red-50 text-red-600 hover:bg-red-100 font-bold py-3 rounded-xl transition-colors">
                                        Cancel Booking
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* New Booking Modal */}
            <AnimatePresence>
                {isNewBookingModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsNewBookingModalOpen(false)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 10 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden p-6 md:p-8"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">New Appointment</h2>
                                <button onClick={() => setIsNewBookingModalOpen(false)} className="text-gray-500 hover:bg-gray-100 p-2 rounded-full transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <form onSubmit={handleCreateBooking} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Patient Name</label>
                                    <input required type="text" value={newBookingForm.name} onChange={e => setNewBookingForm({ ...newBookingForm, name: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                                    <input required type="tel" value={newBookingForm.phone} onChange={e => setNewBookingForm({ ...newBookingForm, phone: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="+91 9999999999" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">Time Slot</label>
                                        <select value={newBookingForm.time} onChange={e => setNewBookingForm({ ...newBookingForm, time: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                                            {operatingHours.filter(h => h !== "BREAK").map(h => <option key={h} value={h}>{h}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">Duration</label>
                                        <select value={newBookingForm.duration} onChange={e => setNewBookingForm({ ...newBookingForm, duration: Number(e.target.value) })} className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                                            <option value={1}>30 mins</option>
                                            <option value={2}>1 Hour</option>
                                            <option value={3}>1.5 Hours</option>
                                            <option value={4}>2 Hours</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Treatment/Reason</label>
                                    <input required type="text" value={newBookingForm.treatment} onChange={e => setNewBookingForm({ ...newBookingForm, treatment: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="e.g. Scaling and Polishing" />
                                </div>

                                <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-xl transition-colors mt-6 shadow-md">
                                    Confirm Booking
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}

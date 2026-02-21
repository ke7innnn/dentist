import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import TechnologyUsed from "@/components/services/TechnologyUsed";
import ServicesFAQ from "@/components/services/ServicesFAQ";

export default function ServicesPage() {
    return (
        <main className="min-h-screen pt-24 bg-gray-50">
            <Navbar />
            <div className="relative py-32 flex items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/services_bg.png')", filter: "brightness(0.6)" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/20 to-transparent" />
                <div className="relative z-10 px-4 mt-6">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-md">Our Services</h1>
                    <p className="text-white max-w-2xl mx-auto text-xl bg-primary-dark/80 p-3 rounded-2xl backdrop-blur-sm shadow-xl border border-white/10">Comprehensive dental care tailored to your specific needs.</p>
                </div>
            </div>
            <Services />
            <TechnologyUsed />
            <ServicesFAQ />
            <Footer />
        </main>
    );
}

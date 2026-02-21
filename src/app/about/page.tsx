import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import MeetTheTeam from "@/components/about/MeetTheTeam";
import OurMission from "@/components/about/OurMission";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-24 bg-white">
            <Navbar />
            <div className="relative py-32 flex items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/about_bg.png')", filter: "brightness(0.6)" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                <div className="relative z-10 px-4 mt-6">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-md">About Our Clinic</h1>
                    <p className="text-white max-w-2xl mx-auto text-xl bg-primary-dark/80 p-3 rounded-2xl backdrop-blur-sm shadow-xl border border-white/10">Learn more about our mission, our experienced team, and our commitment to your smile.</p>
                </div>
            </div>
            <OurMission />
            <About />
            <MeetTheTeam />
            <Footer />
        </main>
    );
}

import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import BeforeAfterGallery from "@/components/gallery/BeforeAfterGallery";
import MasonryReviews from "@/components/gallery/MasonryReviews";

export default function GalleryPage() {
    return (
        <main className="min-h-screen pt-24 bg-white">
            <Navbar />
            <div className="relative py-32 flex items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/gallery_bg.png')", filter: "brightness(0.6)" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                <div className="relative z-10 px-4 mt-6">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-md">Patient Gallery & Reviews</h1>
                    <p className="text-white max-w-2xl mx-auto text-xl bg-primary-dark/80 p-3 rounded-2xl backdrop-blur-sm shadow-xl border border-white/10">See the difference we've made in our patients' lives and read their stories.</p>
                </div>
            </div>

            <BeforeAfterGallery />
            <Testimonials />
            <MasonryReviews />

            <Footer />
        </main>
    );
}

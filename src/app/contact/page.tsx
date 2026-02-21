import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedContact from "@/components/contact/EnhancedContact";

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-24 bg-white flex flex-col justify-between">
            <Navbar />
            <div className="flex-grow">
                <EnhancedContact />
            </div>
            <Footer />
        </main>
    );
}

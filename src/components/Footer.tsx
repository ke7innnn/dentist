import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-primary-dark text-white pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <img
                                src="/logo.png"
                                alt="Clinic Logo"
                                className="w-12 h-12 object-contain bg-white rounded-full p-1"
                            />
                            <div className="flex flex-col">
                                <span className="font-bold text-lg leading-tight text-white">
                                    Dr. Sardesai's
                                </span>
                                <span className="text-xs font-semibold uppercase tracking-wider text-primary-light">
                                    Dental Clinic
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            With a team of experienced dentists, state-of-the-art technology, and a passion for patient care, we offer comprehensive services ranging from routine check-ups to advanced cosmetic treatments.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="/" className="hover:text-primary-light transition-colors">Home</a></li>
                            <li><a href="/about" className="hover:text-primary-light transition-colors">About Us</a></li>
                            <li><a href="/services" className="hover:text-primary-light transition-colors">Services</a></li>
                            <li><a href="/gallery" className="hover:text-primary-light transition-colors">Patient's Gallery</a></li>
                            <li><a href="/contact" className="hover:text-primary-light transition-colors">Contact Us</a></li>
                            <li><a href="/admin" className="hover:text-primary-light transition-colors text-primary border border-primary/30 px-2 py-1 rounded inline-block">Staff Login</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6">Our Services</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="/services" className="hover:text-primary-light transition-colors">Root Canal</a></li>
                            <li><a href="/services" className="hover:text-primary-light transition-colors">Kids Dentistry</a></li>
                            <li><a href="/services" className="hover:text-primary-light transition-colors">Cosmetic Dentistry</a></li>
                            <li><a href="/services" className="hover:text-primary-light transition-colors">Orthodontics</a></li>
                            <li><a href="/services" className="hover:text-primary-light transition-colors">Dental Implants</a></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-bold mb-6">Opening Hours & Contact</h3>
                        <div className="flex items-start gap-4 text-gray-400">
                            <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                            <div>
                                <p>Monday - Friday</p>
                                <p>9:30am - 1:30pm</p>
                                <p>5:30pm - 10:00pm</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 text-gray-400">
                            <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                            <p><a href="tel:9967863033" className="hover:text-primary-light">+91-9967863033</a></p>
                        </div>
                        <div className="flex items-start gap-4 text-gray-400">
                            <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                            <p><a href="mailto:dr.sardesai0909@gmail.com" className="hover:text-primary-light">dr.sardesai0909@gmail.com</a></p>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
                    <p>© 2025 Dr. Sardesai's Dental Clinic – All Rights Reserved. Design & Development by HubTech Media Solutions</p>
                </div>
            </div>
        </footer>
    );
}

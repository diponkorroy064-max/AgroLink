import Link from "next/link";
import { Leaf, Mail, Phone, MapPin,} from "lucide-react";
import Container from "./Container";
import { FaFacebook } from "react-icons/fa";
import { LiaGithub, LiaLinkedin } from "react-icons/lia";

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-300">
            <Container>
                <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
                    {/* Logo */}
                    <div>
                        <Link href="/" className="flex items-center gap-2">
                            <Leaf className="h-8 w-8 text-green-500" />
                            <h2 className="text-3xl font-bold text-white"> AgroLink</h2>
                        </Link>

                        <p className="mt-5 leading-7 text-gray-400"> AgroLink connects farmers, researchers, students, and agricultural professionals through modern farming technologies, educational resources, and innovative agricultural solutions.
                        </p>

                        <div className="mt-6 flex gap-4">
                            <Link href="#" className="rounded-full bg-gray-800 p-3 transition hover:bg-green-600">
                                <FaFacebook size={30} />
                            </Link>

                            <Link href="#" className="rounded-full bg-gray-800 p-3 transition hover:bg-green-600">
                                <LiaLinkedin size={30} />
                            </Link>

                            <Link href="#" className="rounded-full bg-gray-800 p-3 transition hover:bg-green-600">
                                <LiaGithub size={30} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 text-xl font-semibold text-white">Quick Links</h3>

                        <ul className="space-y-4">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/explore">Explore</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/login">Login</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="mb-6 text-xl font-semibold text-white">
                            Categories
                        </h3>

                        <ul className="space-y-4">
                            <li><Link href="/categories/crop-production">Crop Production</Link></li>
                            <li><Link href="/categories/smart-irrigation">Smart Irrigation</Link></li>
                            <li><Link href="/categories/organic-farming">Organic Farming</Link></li>
                            <li><Link href="/categories/farm-machinery">Farm Machinery</Link></li>
                            <li><Link href="/categories/soil-management">Soil Management</Link></li>
                            <li><Link href="/categories/climate-smart-agriculture">Climate Smart Agriculture</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-6 text-xl font-semibold text-white">Contact</h3>

                        <div className="space-y-5">
                            <div className="flex gap-3">
                                <MapPin className="mt-1 text-green-500" size={20} />
                                <p>Dhaka, Bangladesh</p>
                            </div>

                            <div className="flex gap-3">
                                <Phone className="text-green-500" size={20} />
                                <p>+880 1700-000000</p>
                            </div>

                            <div className="flex gap-3">
                                <Mail className="text-green-500" size={20} />
                                <p>support@agrolink.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-6 md:flex-row">
                    <p className="text-sm text-gray-500">
                        © 2026 AgroLink. All rights reserved.
                    </p>

                    <div className="flex gap-6 text-sm">
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms & Conditions</Link>
                        <Link href="/help">Help Center</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
export default Footer;

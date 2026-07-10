import Image from "next/image";
import { Search, Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "../shared/Container";
import PrimaryButton from "../shared/PrimaryButton";

export default function ExploreBanner() {
    return (
        <section className="relative overflow-hidden bg-linear-to-r from-green-900 via-green-800 to-emerald-700 py-20 lg:py-28">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            <Container>
                <div className="relative grid items-center gap-16 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="text-white">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-medium backdrop-blur">
                            <Leaf size={16} />
                            Agricultural Technology Platform
                        </span>

                        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                            Explore Modern
                            <span className="block text-green-300">
                                Agricultural Resources
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-green-100">
                            Discover innovative farming technologies,
                            irrigation systems, organic farming practices,
                            research articles, machinery, greenhouse
                            cultivation, climate-smart agriculture and much
                            more—all in one platform.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <PrimaryButton href="/explore">
                                Browse Resources
                            </PrimaryButton>

                            <Link href="/resources/add" className="inline-flex items-center gap-2 rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-green-700">Add Resource
                                <ArrowRight size={18} />
                            </Link>
                        </div>

                        {/* Quick Stats */}
                        <div className="mt-12 grid grid-cols-3 gap-6">
                            <div>
                                <h2 className="text-3xl font-bold">500+</h2>
                                <p className="text-green-200">
                                    Resources
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold">30+</h2>
                                <p className="text-green-200">
                                    Categories
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold">1200+</h2>
                                <p className="text-green-200">
                                    Farmers
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative hidden lg:block">
                        <div className="absolute -left-8 -top-8 h-48 w-48 rounded-full bg-green-400/20 blur-3xl" />
                        <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-emerald-300/20 blur-3xl" />

                        <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
                                alt="Modern Agriculture"
                                width={700}
                                height={550}
                                className="h-125 w-full object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Card */}
                        <div className="absolute bottom-8 left-8 rounded-2xl bg-white p-5 shadow-xl">
                            <div className="flex items-center gap-3">
                                <div className="rounded-xl bg-green-100 p-3">
                                    <Search className="text-green-600" size={24}/>
                                </div>

                                <div>
                                    <h3 className="font-bold text-gray-900">500+ Resources</h3>
                                    <p className="text-sm text-gray-500">Ready to Explore</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

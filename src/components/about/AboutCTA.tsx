import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import Container from "../shared/Container";

export default function AboutCTA() {
    return (
        <section className="py-20">
            <Container>
                <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-green-700 via-green-600 to-emerald-600 px-8 py-16 shadow-2xl lg:px-16">
                    {/* Background Decorations */}
                    <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-green-300/20 blur-3xl" />

                    <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                            <Leaf size={40} />
                        </div>

                        <h2 className="mt-8 text-4xl font-bold md:text-5xl">
                            Ready to Grow with AgroLink?
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-green-100">
                            Join a growing agricultural community where farmers,
                            students, researchers, and experts collaborate to
                            share knowledge, discover innovative farming
                            solutions, and build a smarter future for
                            agriculture.
                        </p>

                        <div className="mt-10 flex flex-wrap justify-center gap-5">
                            <Link
                                href="/explore"
                                className="rounded-xl bg-white px-8 py-4 font-semibold text-green-700 transition hover:bg-gray-100"
                            >
                                Explore Resources
                            </Link>

                            <Link
                                href="/register"
                                className="flex items-center gap-2 rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-green-700"
                            >
                                Join AgroLink
                                <ArrowRight size={20} />
                            </Link>
                        </div>

                        {/* Statistics */}
                        <div className="mt-14 grid grid-cols-2 gap-8 border-t border-white/20 pt-10 md:grid-cols-4">
                            <div>
                                <h3 className="text-3xl font-bold">850+</h3>
                                <p className="mt-2 text-green-100">
                                    Resources
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold">12K+</h3>
                                <p className="mt-2 text-green-100">
                                    Members
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold">30+</h3>
                                <p className="mt-2 text-green-100">
                                    Categories
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold">64</h3>
                                <p className="mt-2 text-green-100">
                                    Districts
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

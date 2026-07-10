import Image from "next/image";
import { Sprout, Users, Tractor, BookOpen } from "lucide-react";

import Container from "../shared/Container";
import PrimaryButton from "../shared/PrimaryButton";

const Hero = () => {
    return (
        <section className="bg-linear-to-b from-green-50 via-white to-white">
            <Container className="py-16 lg:py-24">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left Side */}
                    <div>
                        {/* Badge */}
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                            <Sprout size={18} />
                            Smart Agriculture Platform
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                            Connecting Farmers with
                            <span className="block text-green-600">
                                Modern Agriculture
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                            Discover innovative farming technologies, agricultural services,
                            expert resources, and sustainable farming practices—all in one
                            platform designed for farmers, students, and agricultural
                            professionals.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <PrimaryButton href="/explore">
                                Explore Resources
                            </PrimaryButton>

                            <PrimaryButton href="/resources/add" variant="outline">
                                Share Resource
                            </PrimaryButton>
                        </div>

                        {/* Statistics */}
                        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
                            <div>
                                <BookOpen className="mb-2 text-green-600" />
                                <h3 className="text-2xl font-bold">500+</h3>
                                <p className="text-gray-500">Resources</p>
                            </div>

                            <div>
                                <Tractor className="mb-2 text-green-600" />
                                <h3 className="text-2xl font-bold">30+</h3>
                                <p className="text-gray-500">Categories</p>
                            </div>

                            <div>
                                <Users className="mb-2 text-green-600" />
                                <h3 className="text-2xl font-bold">1000+</h3>
                                <p className="text-gray-500">Farmers</p>
                            </div>

                            <div>
                                <Sprout className="mb-2 text-green-600" />
                                <h3 className="text-2xl font-bold">4.9★</h3>
                                <p className="text-gray-500">User Rating</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="relative">
                        <div className="overflow-hidden rounded-3xl shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1559884743-74a57598c6c7"
                                alt="Modern Agriculture"
                                width={700}
                                height={600}
                                className="h-full w-full object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-6 left-6 rounded-2xl bg-white p-5 shadow-xl">
                            <p className="text-sm text-gray-500">Featured Today</p>

                            <h4 className="mt-1 font-bold text-green-700">
                                Smart Irrigation System
                            </h4>

                            <p className="mt-2 text-sm text-gray-600">
                                Reduce water usage while increasing crop productivity.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;

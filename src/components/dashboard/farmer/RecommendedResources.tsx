"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const resources = [
    {
        id: 1,
        title: "Smart Irrigation Techniques",
        category: "Irrigation",
        rating: 4.9,
        image:
            "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80",
        description:
            "Learn modern irrigation methods to reduce water consumption while improving crop production.",
    },
    {
        id: 2,
        title: "Organic Farming Guide",
        category: "Organic Farming",
        rating: 4.8,
        image:
            "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
        description:
            "Discover eco-friendly farming techniques that improve soil health and sustainable agriculture.",
    },
    {
        id: 3,
        title: "Rice Disease Management",
        category: "Crop Protection",
        rating: 4.7,
        image:
            "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=800&q=80",
        description:
            "Identify common rice diseases and learn effective prevention and treatment methods.",
    },
    {
        id: 4,
        title: "Modern Agricultural Machinery",
        category: "Farm Machinery",
        rating: 4.9,
        image:
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        description:
            "Explore the latest agricultural equipment that increases efficiency and reduces labor costs.",
    },
];

export default function RecommendedResources() {
    return (
        <section className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Recommended Resources
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Personalized resources selected for your farming interests.
                    </p>
                </div>

                <Link
                    href="/explore"
                    className="hidden items-center gap-2 font-medium text-green-600 transition hover:gap-3 md:flex"
                >
                    View All
                    <ArrowRight size={18} />
                </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {resources.map((resource) => (
                    <div
                        key={resource.id}
                        className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl"
                    >
                        <div className="relative h-52">
                            <Image
                                src={resource.image}
                                alt={resource.title}
                                fill
                                className="object-cover transition duration-500 group-hover:scale-110"
                            />

                            <span className="absolute left-4 top-4 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                                {resource.category}
                            </span>
                        </div>

                        <div className="p-5">
                            <div className="mb-3 flex items-center gap-1">
                                <Star
                                    size={18}
                                    className="fill-yellow-400 text-yellow-400"
                                />
                                <span className="font-medium">
                                    {resource.rating}
                                </span>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900">
                                {resource.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-gray-500">
                                {resource.description}
                            </p>

                            <Link
                                href={`/explore/${resource.id}`}
                                className="mt-6 inline-flex items-center gap-2 font-semibold text-green-600 transition hover:gap-3"
                            >
                                Read More
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center md:hidden">
                <Link
                    href="/explore"
                    className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700"
                >
                    View All Resources
                    <ArrowRight size={18} />
                </Link>
            </div>
        </section>
    );
}


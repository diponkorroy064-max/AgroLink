"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, FolderOpen } from "lucide-react";

const recentResources = [
    {
        id: 1,
        title: "Smart Irrigation Techniques",
        category: "Irrigation",
        image:
            "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80",
        date: "12 July 2026",
        status: "Published",
    },
    {
        id: 2,
        title: "Organic Compost Preparation",
        category: "Organic Farming",
        image:
            "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
        date: "10 July 2026",
        status: "Published",
    },
    {
        id: 3,
        title: "Rice Disease Prevention Guide",
        category: "Crop Protection",
        image:
            "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=800&q=80",
        date: "08 July 2026",
        status: "Pending",
    },
];
export default function RecentResources() {
    return (
        <section className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Recent Resources
                    </h2>

                    <p className="mt-1 text-gray-500">
                        Your latest uploaded agricultural resources.
                    </p>
                </div>

                <Link
                    href="/dashboard/farmer/my-resources"
                    className="flex items-center gap-2 font-medium text-green-600 hover:text-green-700"
                >
                    View All
                    <ArrowRight size={18} />
                </Link>
            </div>

            <div className="space-y-5">
                {recentResources.map((resource) => (
                    <div
                        key={resource.id}
                        className="flex flex-col gap-5 rounded-2xl border border-gray-200 p-4 transition hover:border-green-500 hover:shadow-md md:flex-row md:items-center"
                    >
                        <div className="relative h-28 w-full overflow-hidden rounded-xl md:w-40">
                            <Image
                                src={resource.image}
                                alt={resource.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex-1">
                            <div className="mb-2 flex flex-wrap items-center gap-2">
                                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                    {resource.category}
                                </span>

                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-medium ${resource.status === "Published"
                                            ? "bg-blue-100 text-blue-700"
                                            : "bg-yellow-100 text-yellow-700"
                                        }`}
                                >
                                    {resource.status}
                                </span>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900">
                                {resource.title}
                            </h3>

                            <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                                <CalendarDays size={16} />
                                {resource.date}
                            </div>
                        </div>

                        <Link
                            href={`/dashboard/farmer/my-resources/${resource.id}`}
                            className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-700"
                        >
                            <FolderOpen size={18} />
                            View
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

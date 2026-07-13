"use client";

import Link from "next/link";
import {
    FileText,
    Calendar,
    Eye,
    Pencil,
    ArrowRight,
} from "lucide-react";

const publications = [
    {
        id: 1,
        title: "Climate Smart Agriculture in Bangladesh",
        category: "Research Article",
        publishedDate: "10 July 2026",
        views: 1240,
        status: "Published",
    },
    {
        id: 2,
        title: "Integrated Pest Management for Rice",
        category: "Farming Guide",
        publishedDate: "05 July 2026",
        views: 875,
        status: "Published",
    },
    {
        id: 3,
        title: "Efficient Drip Irrigation Techniques",
        category: "Tutorial",
        publishedDate: "30 June 2026",
        views: 654,
        status: "Published",
    },
];

export default function RecentPublications() {
    return (
        <section className="rounded-3xl bg-white p-6 shadow-sm">

            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Recent Publications
                    </h2>

                    <p className="mt-1 text-gray-500">
                        Your latest published agricultural resources.
                    </p>
                </div>

                <Link
                    href="/dashboard/expert/my-resources"
                    className="flex items-center gap-2 font-medium text-green-600 hover:text-green-700"
                >
                    View All
                    <ArrowRight size={18} />
                </Link>
            </div>

            <div className="space-y-4">
                {publications.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col gap-5 rounded-2xl border border-gray-200 p-5 transition hover:border-green-500 hover:shadow-md lg:flex-row lg:items-center lg:justify-between"
                    >
                        {/* Left */}
                        <div className="flex items-start gap-4">
                            <div className="rounded-2xl bg-green-100 p-3 text-green-700">
                                <FileText size={28} />
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {item.title}
                                </h3>

                                <p className="mt-1 text-sm text-gray-600">
                                    {item.category}
                                </p>

                                <div className="mt-3 flex flex-wrap gap-5 text-sm text-gray-500">
                                    <span className="flex items-center gap-2">
                                        <Calendar size={16} />
                                        {item.publishedDate}
                                    </span>

                                    <span className="flex items-center gap-2">
                                        <Eye size={16} />
                                        {item.views} Views
                                    </span>

                                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                        {item.status}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="flex gap-3">
                            <button className="rounded-xl bg-blue-100 px-4 py-2 text-blue-700 transition hover:bg-blue-200">
                                View
                            </button>

                            <button className="flex items-center gap-2 rounded-xl bg-yellow-100 px-4 py-2 text-yellow-700 transition hover:bg-yellow-200">
                                <Pencil size={16} />
                                Edit
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

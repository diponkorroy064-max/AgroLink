"use client";
import {
    BookOpen,
    Eye,
    Download,
    Star,
} from "lucide-react";

const statistics = [
    {
        title: "Publications",
        value: "48",
        icon: BookOpen,
        color: "bg-green-100 text-green-700",
        description: "Published resources",
    },
    {
        title: "Total Views",
        value: "18.7K",
        icon: Eye,
        color: "bg-blue-100 text-blue-700",
        description: "Community readers",
    },
    {
        title: "Downloads",
        value: "4.3K",
        icon: Download,
        color: "bg-purple-100 text-purple-700",
        description: "PDF downloads",
    },
    {
        title: "Average Rating",
        value: "4.9",
        icon: Star,
        color: "bg-yellow-100 text-yellow-700",
        description: "Community rating",
    },
];

export default function ResearchStatistics() {
    return (
        <section className="rounded-3xl bg-white p-6 shadow-sm">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                    Research Statistics
                </h2>

                <p className="mt-1 text-gray-500">
                    Track the performance of your publications and educational resources.
                </p>
            </div>

            {/* Statistics */}
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {statistics.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.title}
                            className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-lg"
                        >
                            <div
                                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                            >
                                <Icon size={28} />
                            </div>

                            <h3 className="mt-6 text-3xl font-bold text-gray-900">
                                {item.value}
                            </h3>

                            <p className="mt-2 font-semibold text-gray-800">
                                {item.title}
                            </p>

                            <p className="mt-1 text-sm text-gray-500">
                                {item.description}
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* Summary */}
            <div className="mt-8 rounded-2xl bg-green-50 p-6">
                <h3 className="text-lg font-semibold text-green-700">
                    Performance Summary
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                    Your agricultural publications are reaching thousands of
                    farmers, students, and researchers. Continue sharing
                    research-based knowledge to help modernize agriculture and
                    strengthen the AgroLink community.
                </p>
            </div>
        </section>
    );
}

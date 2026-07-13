"use client";

import Link from "next/link";
import {
    Clock3,
    CheckCircle2,
    XCircle,
    ArrowRight,
} from "lucide-react";

const pendingReviews = [
    {
        id: 1,
        title: "Modern Rice Irrigation System",
        author: "Rahim Uddin",
        category: "Irrigation",
        submitted: "2 hours ago",
    },
    {
        id: 2,
        title: "Organic Tomato Farming Guide",
        author: "Sakib Hasan",
        category: "Organic Farming",
        submitted: "Yesterday",
    },
    {
        id: 3,
        title: "Integrated Pest Management",
        author: "Nusrat Jahan",
        category: "Crop Protection",
        submitted: "2 days ago",
    },
];

export default function PendingReviews() {
    return (
        <section className="rounded-3xl bg-white p-6 shadow-sm">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Pending Reviews
                    </h2>

                    <p className="mt-1 text-gray-500">
                        Review newly submitted agricultural resources.
                    </p>
                </div>

                <Link
                    href="/dashboard/expert/pending-reviews"
                    className="flex items-center gap-2 font-medium text-green-600 hover:text-green-700"
                >
                    View All
                    <ArrowRight size={18} />
                </Link>
            </div>

            <div className="space-y-4">
                {pendingReviews.map((resource) => (
                    <div
                        key={resource.id}
                        className="flex flex-col gap-4 rounded-2xl border border-gray-200 p-5 transition hover:border-green-500 hover:shadow-md lg:flex-row lg:items-center lg:justify-between"
                    >
                        <div>
                            <div className="flex items-center gap-2">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {resource.title}
                                </h3>

                                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                                    Pending
                                </span>
                            </div>

                            <p className="mt-2 text-sm text-gray-600">
                                Submitted by{" "}
                                <span className="font-medium">
                                    {resource.author}
                                </span>
                            </p>

                            <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-500">
                                <span>{resource.category}</span>

                                <span className="flex items-center gap-1">
                                    <Clock3 size={15} />
                                    {resource.submitted}
                                </span>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-white transition hover:bg-green-700">
                                <CheckCircle2 size={18} />
                                Approve
                            </button>

                            <button className="flex items-center gap-2 rounded-xl bg-red-100 px-4 py-2 text-red-700 transition hover:bg-red-200">
                                <XCircle size={18} />
                                Reject
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

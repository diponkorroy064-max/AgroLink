"use client";

import { Eye, CheckCircle2, XCircle } from "lucide-react";

const recentResources = [
    {
        id: 1,
        title: "Climate Smart Agriculture",
        author: "Dr. Rahman",
        category: "Research",
        date: "13 Jul 2026",
        status: "Pending",
    },
    {
        id: 2,
        title: "Organic Fertilizer Guide",
        author: "Diponkor Roy",
        category: "Guide",
        date: "12 Jul 2026",
        status: "Approved",
    },
    {
        id: 3,
        title: "Integrated Pest Management",
        author: "Prof. Karim",
        category: "Research",
        date: "11 Jul 2026",
        status: "Pending",
    },
    {
        id: 4,
        title: "Rice Disease Identification",
        author: "Mahmud Hasan",
        category: "Tutorial",
        date: "10 Jul 2026",
        status: "Rejected",
    },
];

export default function RecentResources() {
    return (
        <section className="rounded-3xl bg-white p-6 shadow-sm">

            {/* Header */}
            <div className="mb-6 flex items-center justify-between">

                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Recent Resources
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Latest uploaded resources awaiting review.
                    </p>
                </div>

                <button className="rounded-xl bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700">
                    View All
                </button>

            </div>

            {/* Table */}
            <div className="overflow-x-auto">

                <table className="min-w-full">

                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                                Resource
                            </th>

                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                                Author
                            </th>

                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                                Category
                            </th>

                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                                Date
                            </th>

                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                                Status
                            </th>

                            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {recentResources.map((resource) => (
                            <tr
                                key={resource.id}
                                className="border-t hover:bg-gray-50"
                            >
                                <td className="px-4 py-4 font-medium text-gray-900">
                                    {resource.title}
                                </td>

                                <td className="px-4 py-4 text-gray-600">
                                    {resource.author}
                                </td>

                                <td className="px-4 py-4">
                                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                                        {resource.category}
                                    </span>
                                </td>

                                <td className="px-4 py-4 text-gray-600">
                                    {resource.date}
                                </td>

                                <td className="px-4 py-4">
                                    <span
                                        className={`rounded-full px-3 py-1 text-sm font-medium ${resource.status === "Approved"
                                                ? "bg-green-100 text-green-700"
                                                : resource.status === "Pending"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {resource.status}
                                    </span>
                                </td>

                                <td className="px-4 py-4">

                                    <div className="flex justify-center gap-2">

                                        {/* View */}
                                        <button className="rounded-lg bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-200">
                                            <Eye size={18} />
                                        </button>

                                        {/* Approve */}
                                        <button className="rounded-lg bg-green-100 p-2 text-green-600 transition hover:bg-green-200">
                                            <CheckCircle2 size={18} />
                                        </button>

                                        {/* Reject */}
                                        <button className="rounded-lg bg-red-100 p-2 text-red-600 transition hover:bg-red-200">
                                            <XCircle size={18} />
                                        </button>

                                    </div>

                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </section>
    );
}

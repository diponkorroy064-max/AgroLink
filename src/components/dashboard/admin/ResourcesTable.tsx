"use client";

import { useState } from "react";
import {
    Search,
    Eye,
    Pencil,
    CheckCircle2,
    XCircle,
    Trash2,
} from "lucide-react";

const resources = [
    {
        id: 1,
        title: "Organic Farming Guide",
        author: "Diponkor Roy",
        category: "Guide",
        status: "Pending",
        uploadedAt: "12 Jul 2026",
    },
    {
        id: 2,
        title: "Rice Disease Management",
        author: "Dr. Rahman",
        category: "Research",
        status: "Approved",
        uploadedAt: "11 Jul 2026",
    },
    {
        id: 3,
        title: "Modern Irrigation System",
        author: "Mahmud Hasan",
        category: "Article",
        status: "Rejected",
        uploadedAt: "10 Jul 2026",
    },
    {
        id: 4,
        title: "Integrated Pest Management",
        author: "Green Agro Ltd.",
        category: "Tutorial",
        status: "Pending",
        uploadedAt: "09 Jul 2026",
    },
];

export default function ResourcesTable() {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const filteredResources = resources.filter((resource) => {
        const matchSearch =
            resource.title.toLowerCase().includes(search.toLowerCase()) ||
            resource.author.toLowerCase().includes(search.toLowerCase());

        const matchStatus =
            statusFilter === "All" || resource.status === statusFilter;

        return matchSearch && matchStatus;
    });

    return (
        <section className="rounded-3xl bg-white p-6 shadow-sm">

            {/* Header */}
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        All Resources
                    </h2>

                    <p className="text-gray-500">
                        Review and manage all uploaded resources.
                    </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">

                    {/* Search */}
                    <div className="relative">
                        <Search
                            size={18}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                            type="text"
                            placeholder="Search resource..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-64 rounded-xl border border-gray-300 py-2 pl-10 pr-4 outline-none focus:border-green-600"
                        />
                    </div>

                    {/* Status Filter */}
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="rounded-xl border border-gray-300 px-4 py-2 outline-none focus:border-green-600"
                    >
                        <option>All</option>
                        <option>Pending</option>
                        <option>Approved</option>
                        <option>Rejected</option>
                    </select>

                </div>

            </div>

            {/* Table */}
            <div className="overflow-x-auto">

                <table className="min-w-full">

                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-5 py-4 text-left">Title</th>
                            <th className="px-5 py-4 text-left">Author</th>
                            <th className="px-5 py-4 text-left">Category</th>
                            <th className="px-5 py-4 text-left">Uploaded</th>
                            <th className="px-5 py-4 text-left">Status</th>
                            <th className="px-5 py-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {filteredResources.map((resource) => (

                            <tr
                                key={resource.id}
                                className="border-b hover:bg-gray-50"
                            >
                                <td className="px-5 py-4 font-semibold">
                                    {resource.title}
                                </td>

                                <td className="px-5 py-4">
                                    {resource.author}
                                </td>

                                <td className="px-5 py-4">

                                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                                        {resource.category}
                                    </span>

                                </td>

                                <td className="px-5 py-4">
                                    {resource.uploadedAt}
                                </td>

                                <td className="px-5 py-4">

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

                                <td className="px-5 py-4">

                                    <div className="flex justify-center gap-2">

                                        {/* View */}
                                        <button className="rounded-lg bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-200">
                                            <Eye size={18} />
                                        </button>

                                        {/* Edit */}
                                        <button className="rounded-lg bg-yellow-100 p-2 text-yellow-600 transition hover:bg-yellow-200">
                                            <Pencil size={18} />
                                        </button>

                                        {/* Approve */}
                                        <button className="rounded-lg bg-green-100 p-2 text-green-600 transition hover:bg-green-200">
                                            <CheckCircle2 size={18} />
                                        </button>

                                        {/* Reject */}
                                        <button className="rounded-lg bg-orange-100 p-2 text-orange-600 transition hover:bg-orange-200">
                                            <XCircle size={18} />
                                        </button>

                                        {/* Delete */}
                                        <button className="rounded-lg bg-red-100 p-2 text-red-600 transition hover:bg-red-200">
                                            <Trash2 size={18} />
                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between">

                <p className="text-sm text-gray-500">
                    Showing {filteredResources.length} resources
                </p>

                <div className="flex gap-2">

                    <button className="rounded-lg border px-4 py-2 hover:bg-gray-100">
                        Previous
                    </button>

                    <button className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700">
                        Next
                    </button>

                </div>

            </div>

        </section>
    );
}

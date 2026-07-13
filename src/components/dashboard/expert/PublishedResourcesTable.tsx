"use client";

import Link from "next/link";
import {
    Search,
    Eye,
    Pencil,
    Trash2,
    FileText,
    Download,
    BarChart3,
    Plus,
} from "lucide-react";

const resources = [
    {
        id: 1,
        title: "Climate Smart Agriculture",
        category: "Research",
        views: 1250,
        downloads: 340,
        date: "10 Jul 2026",
        status: "Published",
    },
    {
        id: 2,
        title: "Integrated Pest Management",
        category: "Guide",
        views: 985,
        downloads: 214,
        date: "05 Jul 2026",
        status: "Published",
    },
    {
        id: 3,
        title: "Modern Irrigation Techniques",
        category: "Tutorial",
        views: 730,
        downloads: 168,
        date: "30 Jun 2026",
        status: "Draft",
    },
];

export default function PublishedResourcesTable() {
    return (
        <div className="space-y-6">

            {/* Statistics */}
            <div className="grid gap-6 md:grid-cols-4">

                <div className="rounded-2xl bg-white p-6 shadow-sm">
                    <FileText className="mb-3 text-green-600" size={32} />
                    <h3 className="text-3xl font-bold">42</h3>
                    <p className="text-gray-500">Total Resources</p>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm">
                    <Eye className="mb-3 text-blue-600" size={32} />
                    <h3 className="text-3xl font-bold">28.6K</h3>
                    <p className="text-gray-500">Total Views</p>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm">
                    <Download className="mb-3 text-purple-600" size={32} />
                    <h3 className="text-3xl font-bold">7.8K</h3>
                    <p className="text-gray-500">Downloads</p>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm">
                    <BarChart3 className="mb-3 text-orange-600" size={32} />
                    <h3 className="text-3xl font-bold">6</h3>
                    <p className="text-gray-500">Draft Resources</p>
                </div>

            </div>

            {/* Search & Filters */}
            <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">

                <div className="flex flex-1 items-center rounded-xl border px-4">
                    <Search size={18} className="text-gray-500" />

                    <input
                        type="text"
                        placeholder="Search resources..."
                        className="w-full px-3 py-3 outline-none"
                    />
                </div>

                <div className="flex gap-3">

                    <select className="rounded-xl border px-4 py-3">
                        <option>All Categories</option>
                        <option>Research</option>
                        <option>Guide</option>
                        <option>Tutorial</option>
                    </select>

                    <select className="rounded-xl border px-4 py-3">
                        <option>All Status</option>
                        <option>Published</option>
                        <option>Draft</option>
                    </select>

                    <Link
                        href="/dashboard/expert/add-resource"
                        className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
                    >
                        <Plus size={18} />
                        Publish
                    </Link>

                </div>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

                <div className="overflow-x-auto">

                    <table className="min-w-full">

                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-left">Title</th>
                                <th className="px-6 py-4 text-left">Category</th>
                                <th className="px-6 py-4 text-left">Views</th>
                                <th className="px-6 py-4 text-left">Downloads</th>
                                <th className="px-6 py-4 text-left">Published</th>
                                <th className="px-6 py-4 text-left">Status</th>
                                <th className="px-6 py-4 text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {resources.map((resource) => (
                                <tr
                                    key={resource.id}
                                    className="border-t hover:bg-gray-50"
                                >
                                    <td className="px-6 py-5 font-medium">
                                        {resource.title}
                                    </td>

                                    <td className="px-6 py-5">
                                        {resource.category}
                                    </td>

                                    <td className="px-6 py-5">
                                        {resource.views}
                                    </td>

                                    <td className="px-6 py-5">
                                        {resource.downloads}
                                    </td>

                                    <td className="px-6 py-5">
                                        {resource.date}
                                    </td>

                                    <td className="px-6 py-5">
                                        <span
                                            className={`rounded-full px-3 py-1 text-sm font-medium ${resource.status === "Published"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                                }`}
                                        >
                                            {resource.status}
                                        </span>
                                    </td>

                                    <td className="px-6 py-5">
                                        <div className="flex justify-center gap-2">

                                            <button className="rounded-lg bg-blue-100 p-2 text-blue-600 hover:bg-blue-200">
                                                <Eye size={18} />
                                            </button>

                                            <button className="rounded-lg bg-yellow-100 p-2 text-yellow-600 hover:bg-yellow-200">
                                                <Pencil size={18} />
                                            </button>

                                            <button className="rounded-lg bg-red-100 p-2 text-red-600 hover:bg-red-200">
                                                <Trash2 size={18} />
                                            </button>

                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>

            </div>
        </div>
    );
}

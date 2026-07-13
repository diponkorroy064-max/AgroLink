"use client";

import Image from "next/image";
import {
    Eye,
    Pencil,
    Trash2,
    Search,
    PlusCircle,
} from "lucide-react";
import Link from "next/link";

const resources = [
    {
        id: 1,
        title: "Smart Irrigation Techniques",
        category: "Irrigation",
        status: "Published",
        date: "12 July 2026",
        image:
            "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500",
    },
    {
        id: 2,
        title: "Organic Compost Preparation",
        category: "Organic Farming",
        status: "Pending",
        date: "09 July 2026",
        image:
            "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500",
    },
    {
        id: 3,
        title: "Rice Disease Prevention",
        category: "Crop Protection",
        status: "Published",
        date: "05 July 2026",
        image:
            "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=500",
    },
];


export default function MyResourcesTable() {
    return (
        <section className="rounded-3xl bg-white p-6 shadow-sm">

            {/* Top */}
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                <div className="relative w-full max-w-md">
                    <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search resources..."
                        className="w-full rounded-xl border py-3 pl-11 pr-4 outline-none focus:border-green-600"
                    />
                </div>

                <Link
                    href="/dashboard/farmer/add-resource"
                    className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-medium text-white hover:bg-green-700"
                >
                    <PlusCircle size={18} />
                    Add Resource
                </Link>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full">

                    <thead className="border-b bg-gray-50">
                        <tr>
                            <th className="p-4 text-left">Resource</th>
                            <th className="p-4 text-left">Category</th>
                            <th className="p-4 text-left">Date</th>
                            <th className="p-4 text-left">Status</th>
                            <th className="p-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {resources.map((resource) => (
                            <tr
                                key={resource.id}
                                className="border-b hover:bg-gray-50"
                            >
                                <td className="p-4">
                                    <div className="flex items-center gap-4">

                                        <Image
                                            src={resource.image}
                                            alt={resource.title}
                                            width={70}
                                            height={70}
                                            className="rounded-xl object-cover"
                                        />

                                        <div>
                                            <h3 className="font-semibold">
                                                {resource.title}
                                            </h3>

                                            <p className="text-sm text-gray-500">
                                                Resource #{resource.id}
                                            </p>
                                        </div>

                                    </div>
                                </td>

                                <td className="p-4">
                                    {resource.category}
                                </td>

                                <td className="p-4">
                                    {resource.date}
                                </td>

                                <td className="p-4">
                                    <span
                                        className={`rounded-full px-3 py-1 text-sm font-medium ${resource.status === "Published"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-yellow-100 text-yellow-700"
                                            }`}
                                    >
                                        {resource.status}
                                    </span>
                                </td>

                                <td className="p-4">
                                    <div className="flex justify-center gap-2">

                                        <button className="rounded-lg bg-blue-100 p-2 text-blue-700 hover:bg-blue-200">
                                            <Eye size={18} />
                                        </button>

                                        <button className="rounded-lg bg-amber-100 p-2 text-amber-700 hover:bg-amber-200">
                                            <Pencil size={18} />
                                        </button>

                                        <button className="rounded-lg bg-red-100 p-2 text-red-700 hover:bg-red-200">
                                            <Trash2 size={18} />
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

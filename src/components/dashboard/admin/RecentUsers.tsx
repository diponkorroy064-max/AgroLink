"use client";

import { Eye, Pencil, Trash2 } from "lucide-react";

const recentUsers = [
    {
        id: 1,
        name: "Diponkor Roy",
        email: "diponkor064@gmail.com",
        role: "Farmer",
        joined: "12 Jul 2026",
        status: "Active",
    },
    {
        id: 2,
        name: "Dr. Rahman",
        email: "rahman@gmail.com",
        role: "Expert",
        joined: "11 Jul 2026",
        status: "Active",
    },
    {
        id: 3,
        name: "Mahmud Hasan",
        email: "mahmud@gmail.com",
        role: "Student",
        joined: "10 Jul 2026",
        status: "Pending",
    },
    {
        id: 4,
        name: "Green Agro Ltd.",
        email: "greenagro@gmail.com",
        role: "Business",
        joined: "09 Jul 2026",
        status: "Active",
    },
];

export default function RecentUsers() {
    return (
        <section className="rounded-3xl bg-white p-6 shadow-sm">

            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Recent Users
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Newly registered users on AgroLink.
                    </p>
                </div>

                <button className="rounded-xl bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700">
                    View All
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">

                <table className="min-w-full">

                    <thead className="border-b bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                                User
                            </th>

                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                                Role
                            </th>

                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                                Joined
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

                        {recentUsers.map((user) => (
                            <tr
                                key={user.id}
                                className="border-b transition hover:bg-gray-50"
                            >
                                <td className="px-4 py-4">

                                    <h3 className="font-semibold text-gray-900">
                                        {user.name}
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        {user.email}
                                    </p>

                                </td>

                                <td className="px-4 py-4">
                                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                                        {user.role}
                                    </span>
                                </td>

                                <td className="px-4 py-4 text-gray-600">
                                    {user.joined}
                                </td>

                                <td className="px-4 py-4">
                                    <span
                                        className={`rounded-full px-3 py-1 text-sm font-medium ${user.status === "Active"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-yellow-100 text-yellow-700"
                                            }`}
                                    >
                                        {user.status}
                                    </span>
                                </td>

                                <td className="px-4 py-4">

                                    <div className="flex justify-center gap-2">

                                        <button className="rounded-lg bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-200">
                                            <Eye size={18} />
                                        </button>

                                        <button className="rounded-lg bg-yellow-100 p-2 text-yellow-600 transition hover:bg-yellow-200">
                                            <Pencil size={18} />
                                        </button>

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

        </section>
    );
}

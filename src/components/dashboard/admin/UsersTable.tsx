"use client";

import { useState } from "react";
import {
    Search,
    Eye,
    Pencil,
    Trash2,
    Shield,
} from "lucide-react";
import { Avatar } from "@heroui/react";

const users = [
    {
        id: 1,
        name: "Diponkor Roy",
        email: "diponkor064@gmail.com",
        role: "Farmer",
        status: "Active",
        joined: "12 Jul 2026",
        image: "https://i.pravatar.cc/150?img=1",
    },
    {
        id: 2,
        name: "Dr. Rahman",
        email: "rahman@gmail.com",
        role: "Expert",
        status: "Active",
        joined: "10 Jul 2026",
        image: "https://i.pravatar.cc/150?img=2",
    },
    {
        id: 3,
        name: "Mahmud Hasan",
        email: "mahmud@gmail.com",
        role: "Student",
        status: "Pending",
        joined: "09 Jul 2026",
        image: "https://i.pravatar.cc/150?img=3",
    },
    {
        id: 4,
        name: "Green Agro Ltd.",
        email: "greenagro@gmail.com",
        role: "Business",
        status: "Blocked",
        joined: "08 Jul 2026",
        image: "https://i.pravatar.cc/150?img=4",
    },
];

export default function UsersTable() {
    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState("All");

    const filteredUsers = users.filter((user) => {
        const matchSearch =
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase());

        const matchRole =
            roleFilter === "All" || user.role === roleFilter;

        return matchSearch && matchRole;
    });

    return (
        <section className="rounded-3xl bg-white p-6 shadow-sm">

            {/* Header */}
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        All Users
                    </h2>

                    <p className="text-gray-500">
                        Manage all AgroLink users.
                    </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">

                    {/* Search */}
                    <div className="relative">
                        <Search
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                        />

                        <input
                            type="text"
                            placeholder="Search user..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-64 rounded-xl border border-gray-300 py-2 pl-10 pr-4 outline-none focus:border-green-600"
                        />
                    </div>

                    {/* Role Filter */}
                    <select
                        value={roleFilter}
                        onChange={(e) => setRoleFilter(e.target.value)}
                        className="rounded-xl border border-gray-300 px-4 py-2 outline-none focus:border-green-600"
                    >
                        <option>All</option>
                        <option>Farmer</option>
                        <option>Expert</option>
                        <option>Student</option>
                        <option>Business</option>
                        <option>Admin</option>
                    </select>

                </div>

            </div>

            {/* Table */}
            <div className="overflow-x-auto">

                <table className="min-w-full">

                    <thead className="bg-gray-50">

                        <tr>
                            <th className="px-5 py-4 text-left">User</th>
                            <th className="px-5 py-4 text-left">Role</th>
                            <th className="px-5 py-4 text-left">Joined</th>
                            <th className="px-5 py-4 text-left">Status</th>
                            <th className="px-5 py-4 text-center">Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        {filteredUsers.map((user) => (

                            <tr
                                key={user.id}
                                className="border-b hover:bg-gray-50"
                            >
                                <td className="px-5 py-4">

                                    <div className="flex items-center gap-3">

                                        <Avatar>
                                            <Avatar.Image alt="John Doe" src={user?.image} />
                                            <Avatar.Fallback>JD</Avatar.Fallback>
                                        </Avatar>

                                        <div>
                                            <h3 className="font-semibold">
                                                {user.name}
                                            </h3>

                                            <p className="text-sm text-gray-500">
                                                {user.email}
                                            </p>
                                        </div>

                                    </div>

                                </td>

                                <td className="px-5 py-4">

                                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                                        {user.role}
                                    </span>

                                </td>

                                <td className="px-5 py-4">
                                    {user.joined}
                                </td>

                                <td className="px-5 py-4">

                                    <span
                                        className={`rounded-full px-3 py-1 text-sm font-medium
                                        ${user.status === "Active"
                                                ? "bg-green-100 text-green-700"
                                                : user.status === "Pending"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {user.status}
                                    </span>

                                </td>

                                <td className="px-5 py-4">

                                    <div className="flex justify-center gap-2">

                                        <button className="rounded-lg bg-blue-100 p-2 text-blue-600 hover:bg-blue-200">
                                            <Eye size={18} />
                                        </button>

                                        <button className="rounded-lg bg-yellow-100 p-2 text-yellow-600 hover:bg-yellow-200">
                                            <Pencil size={18} />
                                        </button>

                                        <button className="rounded-lg bg-purple-100 p-2 text-purple-600 hover:bg-purple-200">
                                            <Shield size={18} />
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

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between">

                <p className="text-sm text-gray-500">
                    Showing {filteredUsers.length} users
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

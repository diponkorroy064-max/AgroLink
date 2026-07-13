"use client";

import Link from "next/link";
import {
    Users,
    FileText,
    BarChart3,
    UserPlus,
    ShieldCheck,
    Settings,
} from "lucide-react";

const actions = [
    {
        title: "Manage Users",
        description: "View, edit and manage all users",
        href: "/dashboard/admin/users",
        icon: Users,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "Review Resources",
        description: "Approve or reject uploaded resources",
        href: "/dashboard/admin/resources",
        icon: FileText,
        color: "bg-green-100 text-green-600",
    },
    {
        title: "Analytics",
        description: "Monitor platform performance",
        href: "/dashboard/admin/analytics",
        icon: BarChart3,
        color: "bg-purple-100 text-purple-600",
    },
    {
        title: "Add Expert",
        description: "Register a new agricultural expert",
        href: "/dashboard/admin/add-expert",
        icon: UserPlus,
        color: "bg-orange-100 text-orange-600",
    },
    {
        title: "Moderation",
        description: "Handle reports and pending reviews",
        href: "/dashboard/admin/moderation",
        icon: ShieldCheck,
        color: "bg-red-100 text-red-600",
    },
    {
        title: "Settings",
        description: "Configure AgroLink platform",
        href: "/dashboard/admin/settings",
        icon: Settings,
        color: "bg-gray-100 text-gray-700",
    },
];

export default function QuickActions() {
    return (
        <section className="rounded-3xl bg-white p-6 shadow-sm">

            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                    Quick Actions
                </h2>

                <p className="mt-1 text-gray-500">
                    Frequently used administrative shortcuts.
                </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

                {actions.map((action) => {
                    const Icon = action.icon;

                    return (
                        <Link
                            key={action.title}
                            href={action.href}
                            className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-lg"
                        >
                            <div
                                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${action.color}`}
                            >
                                <Icon size={28} />
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-700">
                                {action.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                {action.description}
                            </p>
                        </Link>
                    );
                })}

            </div>

        </section>
    );
}

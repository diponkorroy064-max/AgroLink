"use client";

import Link from "next/link";
import {
    PlusCircle,
    BookOpen,
    FolderOpen,
    User,
    ArrowRight,
} from "lucide-react";

const actions = [
    {
        title: "Add Resource",
        description: "Share a new agricultural resource with the community.",
        href: "/dashboard/farmer/add-resource",
        icon: PlusCircle,
        color: "bg-green-100 text-green-700",
    },
    {
        title: "Explore Resources",
        description: "Browse farming guides, research, and technologies.",
        href: "/explore",
        icon: BookOpen,
        color: "bg-blue-100 text-blue-700",
    },
    {
        title: "My Resources",
        description: "View and manage your uploaded resources.",
        href: "/dashboard/farmer/my-resources",
        icon: FolderOpen,
        color: "bg-amber-100 text-amber-700",
    },
    {
        title: "My Profile",
        description: "Update your profile information and preferences.",
        href: "/dashboard/farmer/profile",
        icon: User,
        color: "bg-purple-100 text-purple-700",
    },
];

export default function QuickActions() {
    return (
        <section className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                    Quick Actions
                </h2>

                <p className="mt-2 text-gray-500">
                    Access your most frequently used features with a single click.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {actions.map((action) => {
                    const Icon = action.icon;

                    return (
                        <Link
                            key={action.title}
                            href={action.href}
                            className="group rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-lg"
                        >
                            <div
                                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${action.color}`}
                            >
                                <Icon size={28} />
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900">
                                {action.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-gray-500">
                                {action.description}
                            </p>

                            <div className="mt-6 flex items-center gap-2 font-medium text-green-600 transition group-hover:gap-3">
                                Go Now
                                <ArrowRight size={18} />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}

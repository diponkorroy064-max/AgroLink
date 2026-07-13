"use client";

import Link from "next/link";
import {
    PlusCircle,
    ClipboardCheck,
    MessageCircle,
    BookOpen,
    ArrowRight,
} from "lucide-react";

const actions = [
    {
        title: "Publish Resource",
        description: "Share farming guides, research, and educational resources.",
        href: "/dashboard/expert/add-resource",
        icon: PlusCircle,
        color: "bg-green-100 text-green-700",
    },
    {
        title: "Review Resources",
        description: "Review submitted resources awaiting approval.",
        href: "/dashboard/expert/pending-reviews",
        icon: ClipboardCheck,
        color: "bg-yellow-100 text-yellow-700",
    },
    {
        title: "Answer Questions",
        description: "Help farmers by answering community questions.",
        href: "/dashboard/expert/questions",
        icon: MessageCircle,
        color: "bg-blue-100 text-blue-700",
    },
    {
        title: "Research Library",
        description: "Browse and manage your published research articles.",
        href: "/dashboard/expert/research",
        icon: BookOpen,
        color: "bg-purple-100 text-purple-700",
    },
];

export default function ExpertQuickActions() {
    return (
        <section className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Quick Actions
                    </h2>

                    <p className="mt-1 text-gray-500">
                        Quickly access your most frequently used tools.
                    </p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {actions.map((action) => {
                    const Icon = action.icon;

                    return (
                        <Link
                            key={action.title}
                            href={action.href}
                            className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-lg"
                        >
                            <div
                                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${action.color}`}
                            >
                                <Icon size={28} />
                            </div>

                            <h3 className="mt-5 text-lg font-semibold text-gray-900">
                                {action.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                {action.description}
                            </p>

                            <div className="mt-5 flex items-center gap-2 font-medium text-green-600">
                                <span>Open</span>

                                <ArrowRight
                                    size={18}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}


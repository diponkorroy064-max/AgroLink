"use client";

import Link from "next/link";
import {
    CalendarDays,
    ShieldCheck,
    Users,
    FileText,
} from "lucide-react";

interface AdminOverviewProps {
    name?: string;
}

export default function AdminOverview({
    name = "Administrator",
}: AdminOverviewProps) {
    const hour = new Date().getHours();

    let greeting = "Good Evening";

    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 18) {
        greeting = "Good Afternoon";
    }

    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <section className="overflow-hidden rounded-3xl bg-linear-to-r from-green-600 via-emerald-600 to-green-700 p-8 text-white shadow-lg">

            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

                {/* Left */}
                <div>

                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur">
                        <CalendarDays size={18} />
                        <span>{today}</span>
                    </div>

                    <h1 className="text-4xl font-bold">
                        {greeting}, {name}! 👋
                    </h1>

                    <p className="mt-2 text-xl font-semibold text-green-100">
                        Welcome to the Admin Dashboard
                    </p>

                    <p className="mt-4 max-w-2xl leading-7 text-green-100">
                        Manage users, monitor platform activity, review agricultural
                        resources, and ensure AgroLink continues providing a secure
                        and valuable experience for farmers, students, experts,
                        and agricultural businesses.
                    </p>

                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-4">

                    <Link
                        href="/dashboard/admin/users"
                        className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-green-700 transition hover:scale-105"
                    >
                        <Users size={20} />
                        Manage Users
                    </Link>

                    <Link
                        href="/dashboard/admin/resources"
                        className="flex items-center gap-2 rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-green-700"
                    >
                        <FileText size={20} />
                        Review Resources
                    </Link>

                </div>

            </div>

            {/* Bottom */}
            <div className="mt-8 flex items-center gap-3 text-green-100">
                <ShieldCheck size={22} />
                <span className="text-sm">
                    Oversee platform operations, maintain quality, and support the AgroLink community.
                </span>
            </div>

        </section>
    );
}

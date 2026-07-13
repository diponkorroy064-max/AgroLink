"use client";

import Link from "next/link";
import { CalendarDays, Sprout, Plus, BookOpen } from "lucide-react";

interface WelcomeProps {
    name?: string;
}

export default function Welcome({
    name = "Farmer",
}: WelcomeProps) {
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
                {/* Left Content */}
                <div>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur">
                        <CalendarDays size={18} />
                        <span>{today}</span>
                    </div>

                    <h1 className="text-4xl font-bold">
                        {greeting}, {name}! 👋
                    </h1>

                    <p className="mt-4 max-w-2xl text-green-100 leading-7">
                        Welcome back to <span className="font-semibold">AgroLink</span>.
                        Discover the latest farming resources, manage your agricultural
                        content, and stay connected with experts to improve productivity.
                    </p>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/dashboard/farmer/add-resource"
                        className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-green-700 transition hover:scale-105"
                    >
                        <Plus size={20} />
                        Add Resource
                    </Link>

                    <Link
                        href="/explore"
                        className="flex items-center gap-2 rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-green-700"
                    >
                        <BookOpen size={20} />
                        Explore Resources
                    </Link>
                </div>
            </div>

            {/* Bottom Decorative Section */}
            <div className="mt-8 flex items-center gap-3 text-green-100">
                <Sprout size={22} />
                <span className="text-sm">
                    Empowering farmers with modern agricultural knowledge and technology.
                </span>
            </div>
        </section>
    );
}

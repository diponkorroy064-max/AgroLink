"use client";

import {
    FolderOpen,
    Bookmark,
    Sprout,
    Eye,
    TrendingUp,
} from "lucide-react";

const stats = [
    {
        title: "My Resources",
        value: 18,
        icon: FolderOpen,
        color: "bg-green-100 text-green-700",
        change: "+5 this month",
    },
    {
        title: "Saved Resources",
        value: 42,
        icon: Bookmark,
        color: "bg-blue-100 text-blue-700",
        change: "+8 this week",
    },
    {
        title: "Crop Categories",
        value: 12,
        icon: Sprout,
        color: "bg-emerald-100 text-emerald-700",
        change: "6 active",
    },
    {
        title: "Total Views",
        value: "2.4K",
        icon: Eye,
        color: "bg-orange-100 text-orange-700",
        change: "+18%",
    },
];

export default function Stats() {
    return (
        <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.title}
                        className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500">
                                    {item.title}
                                </p>

                                <h2 className="mt-3 text-3xl font-bold text-gray-900">
                                    {item.value}
                                </h2>

                                <div className="mt-4 flex items-center gap-1 text-sm text-green-600">
                                    <TrendingUp size={16} />
                                    <span>{item.change}</span>
                                </div>
                            </div>

                            <div
                                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                            >
                                <Icon size={28} />
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}

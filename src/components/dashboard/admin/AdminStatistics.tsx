"use client";

import {
    Users,
    FileText,
    ShieldAlert,
    TrendingUp,
} from "lucide-react";

const statistics = [
    {
        title: "Total Users",
        value: "2,458",
        description: "Registered platform users",
        icon: Users,
        bgColor: "bg-blue-100",
        iconColor: "text-blue-600",
    },
    {
        title: "Total Resources",
        value: "1,236",
        description: "Published resources",
        icon: FileText,
        bgColor: "bg-green-100",
        iconColor: "text-green-600",
    },
    {
        title: "Pending Reviews",
        value: "27",
        description: "Waiting for approval",
        icon: ShieldAlert,
        bgColor: "bg-yellow-100",
        iconColor: "text-yellow-600",
    },
    {
        title: "Monthly Growth",
        value: "+18%",
        description: "Compared to last month",
        icon: TrendingUp,
        bgColor: "bg-purple-100",
        iconColor: "text-purple-600",
    },
];

export default function AdminStatistics() {
    return (
        <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

            {statistics.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.title}
                        className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >

                        <div className="flex items-start justify-between">

                            <div>
                                <p className="text-sm font-medium text-gray-500">
                                    {item.title}
                                </p>

                                <h2 className="mt-2 text-4xl font-bold text-gray-900">
                                    {item.value}
                                </h2>

                                <p className="mt-3 text-sm text-gray-500">
                                    {item.description}
                                </p>
                            </div>

                            <div
                                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bgColor}`}
                            >
                                <Icon
                                    size={28}
                                    className={item.iconColor}
                                />
                            </div>

                        </div>

                    </div>
                );
            })}

        </section>
    );
}

"use client";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    BarChart,
    Bar,
} from "recharts";

const userGrowthData = [
    { month: "Jan", users: 120 },
    { month: "Feb", users: 180 },
    { month: "Mar", users: 260 },
    { month: "Apr", users: 340 },
    { month: "May", users: 450 },
    { month: "Jun", users: 580 },
    { month: "Jul", users: 690 },
];

const resourceData = [
    { month: "Jan", resources: 45 },
    { month: "Feb", resources: 60 },
    { month: "Mar", resources: 82 },
    { month: "Apr", resources: 96 },
    { month: "May", resources: 120 },
    { month: "Jun", resources: 150 },
    { month: "Jul", resources: 180 },
];

export default function PlatformAnalytics() {
    return (
        <section className="grid gap-6 xl:grid-cols-2">

            {/* User Growth */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">

                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                        User Growth
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Monthly registered users.
                    </p>
                </div>

                <ResponsiveContainer
                    width="100%"
                    height={320}
                >
                    <LineChart data={userGrowthData}>
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="month" />

                        <YAxis />

                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey="users"
                            stroke="#16a34a"
                            strokeWidth={3}
                        />
                    </LineChart>
                </ResponsiveContainer>

            </div>

            {/* Resources */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">

                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Resource Uploads
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Monthly published agricultural resources.
                    </p>
                </div>

                <ResponsiveContainer
                    width="100%"
                    height={320}
                >
                    <BarChart data={resourceData}>
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="month" />

                        <YAxis />

                        <Tooltip />

                        <Bar
                            dataKey="resources"
                            fill="#16a34a"
                            radius={[8, 8, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>

            </div>

        </section>
    );
}

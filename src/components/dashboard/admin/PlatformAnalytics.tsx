"use client";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from "recharts";

const userGrowthData = [
    { month: "Jan", users: 120 },
    { month: "Feb", users: 180 },
    { month: "Mar", users: 260 },
    { month: "Apr", users: 340 },
    { month: "May", users: 450 },
    { month: "Jun", users: 580 },
    { month: "Jul", users: 720 },
];

const resourceData = [
    { month: "Jan", resources: 40 },
    { month: "Feb", resources: 55 },
    { month: "Mar", resources: 72 },
    { month: "Apr", resources: 94 },
    { month: "May", resources: 120 },
    { month: "Jun", resources: 145 },
    { month: "Jul", resources: 175 },
];

const roleData = [
    { name: "Farmers", value: 420 },
    { name: "Experts", value: 82 },
    { name: "Students", value: 210 },
    { name: "Business", value: 65 },
];

const categoryData = [
    { category: "Research", total: 92 },
    { category: "Guide", total: 140 },
    { category: "Article", total: 81 },
    { category: "Tutorial", total: 56 },
];

const COLORS = [
    "#16a34a",
    "#2563eb",
    "#f59e0b",
    "#dc2626",
];

export default function PlatformAnalytics() {
    return (
        <div className="grid gap-6 xl:grid-cols-2">

            {/* User Growth */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">

                <h2 className="mb-1 text-xl font-bold">
                    User Growth
                </h2>

                <p className="mb-6 text-sm text-gray-500">
                    Monthly registered users.
                </p>

                <ResponsiveContainer width="100%" height={320}>
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

            {/* Resource Uploads */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">

                <h2 className="mb-1 text-xl font-bold">
                    Resource Uploads
                </h2>

                <p className="mb-6 text-sm text-gray-500">
                    Monthly uploaded resources.
                </p>

                <ResponsiveContainer width="100%" height={320}>
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

            {/* User Roles */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">

                <h2 className="mb-1 text-xl font-bold">
                    User Distribution
                </h2>

                <p className="mb-6 text-sm text-gray-500">
                    Users by role.
                </p>

                <ResponsiveContainer width="100%" height={320}>
                    <PieChart>
                        <Pie
                            data={roleData}
                            dataKey="value"
                            nameKey="name"
                            outerRadius={110}
                            label
                        >
                            {roleData.map((_, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>

                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>

            </div>

            {/* Categories */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">

                <h2 className="mb-1 text-xl font-bold">
                    Resource Categories
                </h2>

                <p className="mb-6 text-sm text-gray-500">
                    Resources grouped by category.
                </p>

                <ResponsiveContainer width="100%" height={320}>
                    <BarChart data={categoryData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip />
                        <Bar
                            dataKey="total"
                            fill="#059669"
                            radius={[8, 8, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>

            </div>

        </div>
    );
}

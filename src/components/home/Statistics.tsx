"use client";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer,} from "recharts";
import { Database, Users, Layers, Star,} from "lucide-react";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import StatCard from "./StatCard";

const chartData = [
    { name: "Crop", resources: 220 },
    { name: "Irrigation", resources: 190 },
    { name: "Machinery", resources: 165 },
    { name: "Organic", resources: 210 },
    { name: "Livestock", resources: 175 },
    { name: "Soil", resources: 195 },
    { name: "Pest", resources: 160 },
    { name: "Climate", resources: 185 },
    { name: "Agroforestry", resources: 140 },
    { name: "Greenhouse", resources: 155 },
];

const Statistics = () => {
    return (
        <section className="bg-green-50 py-20">
            <Container>
                <SectionTitle
                    subtitle="Statistics"
                    title="AgroLink at a Glance"
                    description="Explore key platform statistics and discover how AgroLink is helping connect the agricultural community."
                />

                {/* Summary Cards */}
                <div className="mb-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    <StatCard
                        icon={Database}
                        title="Resources"
                        value="500+"
                    />

                    <StatCard
                        icon={Users}
                        title="Community Members"
                        value="1,200+"
                    />

                    <StatCard
                        icon={Layers}
                        title="Categories"
                        value="30+"
                    />

                    <StatCard
                        icon={Star}
                        title="Average Rating"
                        value="4.9"
                    />
                </div>

                {/* Chart */}
                <div className="rounded-3xl bg-white p-8 shadow-lg">
                    <h3 className="mb-8 text-center text-2xl font-bold">
                        Resources by Category
                    </h3>

                    <div className="h-100">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData}>
                                <XAxis dataKey="name" />

                                <Tooltip />

                                <Bar
                                    dataKey="resources"
                                    radius={[8, 8, 0, 0]}
                                    fill="#16a34a"
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Statistics;

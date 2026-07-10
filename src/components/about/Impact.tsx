import { Users, BookOpen, Sprout, Globe, } from "lucide-react";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";

const impacts = [
    {
        icon: Users,
        number: "12,000+",
        title: "Community Members",
        description: "Farmers, students, researchers, and agricultural professionals actively connected through AgroLink.",
    },
    {
        icon: BookOpen,
        number: "850+",
        title: "Agricultural Resources",
        description: "Verified farming guides, research articles, smart technologies, and educational content available on the platform.",
    },
    {
        icon: Sprout,
        number: "30+",
        title: "Agricultural Categories",
        description: "Resources covering crop production, irrigation, soil health, machinery, livestock, greenhouse farming, and more.",
    },
    {
        icon: Globe,
        number: "64 Districts",
        title: "Nationwide Reach",
        description:
            "Supporting farmers and agricultural communities across Bangladesh with modern digital agricultural solutions.",
    },
];

export default function Impact() {
    return (
        <section className="bg-linear-to-br from-green-700 via-green-600 to-emerald-600 py-20 text-white">
            <Container>
                <SectionTitle
                    subtitle="Our Impact"
                    title="Growing Agriculture Through Innovation"
                    description="AgroLink is committed to making agricultural knowledge more accessible and helping build a stronger, smarter farming community."
                    subtitleClassName="text-gray-800"
                    titleClassName="text-white"
                    descriptionClassName="text-green-100"
                    
                />

                <div className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                    {impacts.map((impact) => {
                        const Icon = impact.icon;

                        return (
                            <div
                                key={impact.title}
                                className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/20"
                            >
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-green-700">
                                    <Icon size={32} />
                                </div>

                                <h2 className="mt-6 text-4xl font-bold">
                                    {impact.number}
                                </h2>

                                <h3 className="mt-3 text-xl font-semibold">
                                    {impact.title}
                                </h3>

                                <p className="mt-4 leading-7 text-green-100">
                                    {impact.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}

import {
    Leaf,
    Lightbulb,
    Users,
    ShieldCheck,
} from "lucide-react";

import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";

const values = [
    {
        icon: Leaf,
        title: "Sustainability",
        description:
            "We promote environmentally responsible farming practices that protect natural resources while increasing agricultural productivity for future generations.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "We embrace modern agricultural technologies, smart farming solutions, and digital transformation to improve farming efficiency and decision-making.",
    },
    {
        icon: Users,
        title: "Community",
        description:
            "We believe agriculture grows stronger through collaboration. AgroLink connects farmers, researchers, students, and agricultural experts on one platform.",
    },
    {
        icon: ShieldCheck,
        title: "Trust & Quality",
        description:
            "We are committed to providing reliable, verified, and high-quality agricultural resources that users can confidently depend on.",
    },
];

export default function CoreValues() {
    return (
        <section className="py-20">
            <Container>
                <SectionTitle
                    subtitle="Our Values"
                    title="The Principles That Drive AgroLink"
                    description="Everything we build is guided by our commitment to sustainable agriculture, innovation, collaboration, and trust."
                />

                <div className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                    {values.map((value) => {
                        const Icon = value.icon;

                        return (
                            <div
                                key={value.title}
                                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-600 hover:shadow-xl"
                            >
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 transition-colors duration-300 group-hover:bg-green-600">
                                    <Icon
                                        size={32}
                                        className="text-green-600 transition-colors duration-300 group-hover:text-white"
                                    />
                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                                    {value.title}
                                </h3>

                                <p className="mt-4 leading-7 text-gray-600">
                                    {value.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}

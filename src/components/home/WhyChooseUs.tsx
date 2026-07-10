import {
    ShieldCheck,
    Search,
    Users,
    Leaf,
} from "lucide-react";

import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import FeatureCard from "./FeatureCard";

const features = [
    {
        icon: ShieldCheck,
        title: "Trusted Resources",
        description:
            "Access verified agricultural technologies, farming guides, and expert resources to make informed decisions.",
    },
    {
        icon: Search,
        title: "Smart Search",
        description:
            "Quickly find farming technologies, services, and agricultural resources using powerful search and filters.",
    },
    {
        icon: Users,
        title: "Expert Community",
        description:
            "Connect with farmers, agricultural students, researchers, and professionals who share practical knowledge.",
    },
    {
        icon: Leaf,
        title: "Sustainable Farming",
        description:
            "Discover environmentally friendly farming practices that improve productivity while protecting natural resources.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-20">
            <Container>
                <SectionTitle
                    subtitle="Why AgroLink"
                    title="Why Choose AgroLink?"
                    description="AgroLink is designed to make agricultural knowledge and modern farming technologies accessible to everyone—from farmers and students to researchers and agribusiness professionals."
                />

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.title}
                            {...feature}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default WhyChooseUs;

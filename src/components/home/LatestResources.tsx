import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import LatestResourceCard from "./LatestResourceCard";

const resources = [
    {
        image: "/images/resources/soil.jpg",
        category: "Soil Management",
        title: "Understanding Soil Health for Better Crop Production",
        description:
            "Learn how proper soil testing and nutrient management can significantly improve crop yield and sustainability.",
        author: "AgroLink Team",
        date: "July 5, 2026",
    },
    {
        image: "/images/resources/drone.jpg",
        category: "Agricultural Technology",
        title: "How Drones Are Transforming Modern Farming",
        description:
            "Explore the benefits of drone technology for crop monitoring, spraying, and precision agriculture.",
        author: "Dr. Rahman",
        date: "July 2, 2026",
    },
    {
        image: "/images/resources/greenhouse.jpg",
        category: "Protected Cultivation",
        title: "Greenhouse Farming: A Sustainable Future",
        description:
            "Discover how greenhouse farming helps farmers grow crops efficiently throughout the year.",
        author: "Prof. Karim",
        date: "June 29, 2026",
    },
];

const LatestResources = () => {
    return (
        <section className="py-20">
            <Container>
                <SectionTitle
                    subtitle="Latest Updates"
                    title="Latest Agricultural Resources"
                    description="Stay updated with the newest farming technologies, research articles, and agricultural innovations."
                />

                <div className="grid gap-8 lg:grid-cols-3">
                    {resources.map((resource) => (
                        <LatestResourceCard
                            key={resource.title}
                            {...resource}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default LatestResources;

import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import ResourceCard from "./ResourceCard";

const resources = [
    {
        title: "Smart Irrigation System",
        category: "Irrigation",
        image: "https://plus.unsplash.com/premium_photo-1733266834957-f5c0152198b5",
        location: "Dhaka",
        rating: 4.9,
        description:
            "Reduce water usage while improving crop productivity using automated irrigation technology.",
    },
    {
        title: "Agricultural Drone",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1713952152768-5f28b8093166",
        location: "Rajshahi",
        rating: 4.8,
        description:
            "Monitor crops and spray fertilizers efficiently with precision drone technology.",
    },
    {
        title: "Greenhouse Farming",
        category: "Protected Cultivation",
        image: "https://images.unsplash.com/photo-1761839258575-038fef381ee7",
        location: "Gazipur",
        rating: 4.7,
        description:
            "Grow vegetables year-round using controlled greenhouse environments.",
    },
    {
        title: "Organic Fertilizer",
        category: "Soil Health",
        image: "https://plus.unsplash.com/premium_photo-1725394913215-f76155682a54",
        location: "Khulna",
        rating: 4.9,
        description:
            "Improve soil fertility naturally using eco-friendly organic fertilizers.",
    },
    {
        title: "Soil Testing Kit",
        category: "Soil Management",
        image: "https://plus.unsplash.com/premium_photo-1661902899911-d7b89906e638",
        location: "Mymensingh",
        rating: 4.8,
        description:
            "Analyze soil nutrients and pH levels to optimize crop production.",
    },
    {
        title: "Climate Smart Farming",
        category: "Sustainability",
        image: "https://plus.unsplash.com/premium_photo-1664478328993-13f17a1ecadb",
        location: "Sylhet",
        rating: 4.9,
        description:
            "Adopt climate-resilient farming practices for sustainable agriculture.",
    },
];

const FeaturedResources = () => {
    return (
        <section className="py-20">
            <Container>
                <SectionTitle
                    subtitle="Featured Resources"
                    title="Explore Modern Agricultural Solutions"
                    description="Discover innovative technologies, services, and farming practices designed to improve productivity and sustainability."
                />

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {resources.map((resource) => (
                        <ResourceCard key={resource.title} {...resource} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default FeaturedResources;

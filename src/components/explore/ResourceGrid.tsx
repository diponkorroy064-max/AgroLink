import Container from "../shared/Container";
import ExploreResourceCard from "./ExploreResourceCard";

const resources = [
    {
        id: 1,
        title: "Smart Irrigation System",
        image:
            "https://images.unsplash.com/photo-1500937386664-56d1dfef3854",
        category: "Irrigation",
        location: "Rajshahi",
        rating: 4.9,
        date: "10 July 2026",
        description:
            "An advanced irrigation system that optimizes water usage through automated scheduling and real-time soil moisture monitoring.",
    },
    {
        id: 2,
        title: "Organic Fertilizer Guide",
        image:
            "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
        category: "Organic Farming",
        location: "Khulna",
        rating: 4.8,
        date: "08 July 2026",
        description:
            "Learn how organic fertilizers improve soil fertility, increase crop yield, and support sustainable farming practices.",
    },
    {
        id: 3,
        title: "Drone Technology for Precision Farming",
        image:
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
        category: "Agricultural Technology",
        location: "Mymensingh",
        rating: 4.9,
        date: "06 July 2026",
        description:
            "Explore how drones are transforming modern agriculture through crop monitoring, disease detection, and precision spraying.",
    },
    {
        id: 4,
        title: "Greenhouse Vegetable Production",
        image:
            "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8",
        category: "Protected Cultivation",
        location: "Gazipur",
        rating: 4.7,
        date: "03 July 2026",
        description:
            "Discover greenhouse cultivation techniques that enable year-round vegetable production with higher quality and improved efficiency.",
    },
];

export default function ResourceGrid() {
    return (
        <section className="pb-20">
            <Container>
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {resources.map((resource) => (
                        <ExploreResourceCard key={resource.id} resource={resource}/>
                    ))}
                </div>
            </Container>
        </section>
    );
}


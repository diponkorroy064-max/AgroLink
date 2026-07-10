import {
    Tractor,
    Sprout,
    Droplets,
    Wheat,
    Leaf,
    Bug,
    CloudSun,
    Trees,
} from "lucide-react";

import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import CategoryCard from "./CategoryCard";

const categories = [
    {
        title: "Crop Production",
        description:
            "Learn modern crop cultivation techniques and improve yield sustainably.",
        icon: Wheat,
    },
    {
        title: "Smart Irrigation",
        description:
            "Discover water-saving irrigation technologies for efficient farming.",
        icon: Droplets,
    },
    {
        title: "Farm Machinery",
        description:
            "Explore tractors, harvesters, and modern agricultural equipment.",
        icon: Tractor,
    },
    {
        title: "Organic Farming",
        description:
            "Adopt eco-friendly farming methods with organic practices.",
        icon: Leaf,
    },
    {
        title: "Soil Management",
        description:
            "Improve soil health through testing and nutrient management.",
        icon: Sprout,
    },
    {
        title: "Pest Control",
        description:
            "Find sustainable pest and disease management solutions.",
        icon: Bug,
    },
    {
        title: "Climate Smart Farming",
        description:
            "Adapt to climate change with resilient agricultural practices.",
        icon: CloudSun,
    },
    {
        title: "Agroforestry",
        description:
            "Integrate trees with crops for sustainable farming systems.",
        icon: Trees,
    },
];

const Categories = () => {
    return (
        <section className="bg-green-50 py-20">
            <Container>
                <SectionTitle
                    subtitle="Categories"
                    title="Browse Agricultural Categories"
                    description="Explore agricultural resources by category and discover technologies, farming methods, and expert solutions tailored to your needs."
                />

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.title}
                            {...category}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Categories;

import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
    {
        image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        name: "Abdul Karim",
        role: "Rice Farmer",
        location: "Rajshahi",
        rating: 5,
        review:"AgroLink introduced me to modern irrigation techniques that reduced water usage and increased my rice production.",
    },
    {
        image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        name: "Nusrat Jahan",
        role: "Agriculture Student",
        location: "Dhaka",
        rating: 5,
        review:"The platform provides excellent learning resources. It helped me complete my university research with reliable agricultural information.",
    },
    {
        image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
        name: "Dr. Mahmud Hasan",
        role: "Agricultural Researcher",
        location: "Mymensingh",
        rating: 5,
        review:"AgroLink successfully connects researchers, farmers, and students in one place, making agricultural knowledge easier to access.",
    },
];


const Testimonials = () => {
    return (
        <section className="bg-green-50 py-20">
            <Container>
                <SectionTitle
                    subtitle="Success Stories"
                    title="What Our Community Says"
                    description="Hear from farmers, students, and agricultural experts who use AgroLink to improve farming practices and share knowledge."
                />

                <div className="grid gap-8 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.name}
                            {...testimonial}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};
export default Testimonials;


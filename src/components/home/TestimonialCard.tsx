import { Quote, Star } from "lucide-react";
import { Avatar } from "@heroui/react/avatar";
interface TestimonialCardProps {
    image: string;
    name: string;
    role: string;
    location: string;
    review: string;
    rating: number;
}

const TestimonialCard = ({ image, name, role, location, review, rating }: TestimonialCardProps) => {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Quote className="mb-5 text-green-600" size={40} />

            <p className="mb-6 leading-7 text-gray-600">
                {review}
            </p>

            <div className="mb-5 flex">
                {Array.from({ length: rating }).map((_, index) => (
                    <Star
                        key={index}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                    />
                ))}
            </div>

            <div className="flex items-center gap-4">
                <Avatar size="lg">
                    <Avatar.Image
                        alt="Large Avatar"
                        src={image}
                    />
                    <Avatar.Fallback>LG</Avatar.Fallback>
                </Avatar>

                <div>
                    <h3 className="font-bold text-gray-900">
                        {name}
                    </h3>

                    <p className="text-sm text-gray-500">
                        {role}
                    </p>

                    <p className="text-sm text-green-600">
                        {location}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;

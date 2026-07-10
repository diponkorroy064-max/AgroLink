import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, ArrowRight } from "lucide-react";

interface ResourceCardProps {
    title: string;
    category: string;
    image: string;
    location: string;
    rating: number;
    description: string;
}

const ResourceCard = ({ title, category, image, location, rating, description,}: ResourceCardProps) => {
    return (
        <div className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-56">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                />
            </div>

            <div className="p-5">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    {category}
                </span>

                <h3 className="mt-4 text-xl font-bold text-gray-900">
                    {title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                    {description}
                </p>

                <div className="mt-5 flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {location}
                    </div>

                    <div className="flex items-center gap-1 text-amber-500">
                        <Star size={16} fill="currentColor" />
                        {rating}
                    </div>
                </div>

                <Link
                    href="/explore"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-green-600 transition hover:text-green-700"
                >
                    View Details
                    <ArrowRight size={18} />
                </Link>
            </div>
        </div>
    );
};

export default ResourceCard;

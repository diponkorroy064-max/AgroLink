import Image from "next/image";
import Link from "next/link";
import {
    MapPin,
    Star,
    Calendar,
    ArrowRight,
    Tag,
} from "lucide-react";

interface ExploreResourceCardProps {
    resource: {
        id: number;
        title: string;
        image: string;
        category: string;
        location: string;
        rating: number;
        date: string;
        description: string;
    };
}

export default function ExploreResourceCard({
    resource,
}: ExploreResourceCardProps) {
    const {
        id,
        title,
        image,
        category,
        location,
        rating,
        date,
        description,
    } = resource;

    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                    {category}
                </span>
            </div>

            {/* Content */}
            <div className="p-6">
                <h2 className="line-clamp-2 text-xl font-bold text-gray-900">
                    {title}
                </h2>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                    {description}
                </p>

                {/* Meta Information */}
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-green-600" />
                        <span>{location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Star
                            size={16}
                            className="fill-yellow-400 text-yellow-400"
                        />
                        <span>{rating}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-green-600" />
                        <span>{date}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Tag size={16} className="text-green-600" />
                        <span>{category}</span>
                    </div>
                </div>

                {/* Button */}
                <Link
                    href={`/explore/${id}`}
                    className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                    View Details
                    <ArrowRight size={18} />
                </Link>
            </div>
        </div>
    );
}

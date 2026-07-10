import Image from "next/image";
import Link from "next/link";
import { CalendarDays, User, ArrowRight } from "lucide-react";

interface LatestResourceCardProps {
    image: string;
    category: string;
    title: string;
    description: string;
    author: string;
    date: string;
}

const LatestResourceCard = ({
    image,
    category,
    title,
    description,
    author,
    date,
}: LatestResourceCardProps) => {
    return (
        <div className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-60 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                />
            </div>

            <div className="p-6">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    {category}
                </span>

                <h3 className="mt-4 text-xl font-bold text-gray-900">
                    {title}
                </h3>

                <p className="mt-3 text-gray-600 line-clamp-3">
                    {description}
                </p>

                <div className="mt-5 flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <User size={16} />
                        {author}
                    </div>

                    <div className="flex items-center gap-2">
                        <CalendarDays size={16} />
                        {date}
                    </div>
                </div>

                <Link
                    href="/explore"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-green-600 hover:text-green-700"
                >
                    Read More
                    <ArrowRight size={18} />
                </Link>
            </div>
        </div>
    );
};

export default LatestResourceCard;

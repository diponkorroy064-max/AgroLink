import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

const CategoryCard = ({
    title,
    description,
    icon: Icon,
}: CategoryCardProps) => {
    return (
        <Link
            href="/explore"
            className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-green-600 hover:shadow-xl"
        >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 transition group-hover:bg-green-600">
                <Icon
                    size={30}
                    className="text-green-700 transition group-hover:text-white"
                />
            </div>

            <h3 className="mt-6 text-xl font-bold text-gray-900">
                {title}
            </h3>

            <p className="mt-3 text-gray-600 leading-7">
                {description}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 font-semibold text-green-600">
                Explore
                <ArrowRight size={18} />
            </div>
        </Link>
    );
};

export default CategoryCard;

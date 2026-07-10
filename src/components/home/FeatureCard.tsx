import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

const FeatureCard = ({
    icon: Icon,
    title,
    description,
}: FeatureCardProps) => {
    return (
        <div className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-green-600 hover:shadow-xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 transition-colors group-hover:bg-green-600">
                <Icon
                    size={32}
                    className="text-green-700 transition-colors group-hover:text-white"
                />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {title}
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
                {description}
            </p>
        </div>
    );
};

export default FeatureCard;

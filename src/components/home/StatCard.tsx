import { LucideIcon } from "lucide-react";
interface StatCardProps {
    icon: LucideIcon;
    title: string;
    value: string;
}

const StatCard = ({ icon: Icon, title, value }: StatCardProps) => {
    return (
        <div className="rounded-2xl bg-white p-6 shadow-md">
            <div className="flex items-center gap-4">
                <div className="rounded-xl bg-green-100 p-3">
                    <Icon className="text-green-600" size={28} />
                </div>

                <div>
                    <h3 className="text-3xl font-bold text-gray-900">
                        {value}
                    </h3>

                    <p className="text-gray-500">
                        {title}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StatCard;

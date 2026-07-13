import { BookOpen, ClipboardCheck, FileText, Users} from "lucide-react";
import RecentResources from "@/components/dashboard/farmer/RecentResources";
import QuickActions from "@/components/dashboard/farmer/QuickActions";
import RecommendedResources from "@/components/dashboard/farmer/RecommendedResources";
import Welcome from "@/components/dashboard/common/Welcome";
import Stats from "@/components/dashboard/common/Stats";

const statsData = [
    {
        title: "Published Resources",
        value: "48",
        icon: FileText,
        color: "bg-green-100 text-green-700",
    },
    {
        title: "Pending Reviews",
        value: "12",
        icon: ClipboardCheck,
        color: "bg-yellow-100 text-yellow-700",
    },
    {
        title: "Research Articles",
        value: "21",
        icon: BookOpen,
        color: "bg-blue-100 text-blue-700",
    },
    {
        title: "Community Reach",
        value: "8.6K",
        icon: Users,
        color: "bg-purple-100 text-purple-700",
    },
];

export default function AgricultureExpertDashboardPage() {
    return (
        <div className="space-y-8">
            <Welcome/>
            <Stats/>
            <QuickActions />
            <RecentResources />
            <RecommendedResources />
        </div>
    );
}


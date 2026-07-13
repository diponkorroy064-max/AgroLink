import Welcome from "@/components/dashboard/farmer/Welcome";
import Stats from "@/components/dashboard/farmer/Stats";
import RecentResources from "@/components/dashboard/farmer/RecentResources";
import QuickActions from "@/components/dashboard/farmer/QuickActions";
import WeatherCard from "@/components/dashboard/farmer/WeatherCard";
import RecommendedResources from "@/components/dashboard/farmer/RecommendedResources";

export default function FarmerDashboardPage() {
    return (
        <div className="space-y-8">

            <Welcome />

            <Stats />

            <div className="grid gap-6 lg:grid-cols-3">

                <div className="lg:col-span-2">
                    <RecentResources />
                </div>

                <WeatherCard/>

            </div>

            <QuickActions />

            <RecommendedResources/>

        </div>
    );
}

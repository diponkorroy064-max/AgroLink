import { ShieldCheck } from "lucide-react";
import AdminOverview from "@/components/dashboard/admin/AdminOverview";
import RecentUsers from "@/components/dashboard/admin/RecentUsers";
import AdminStatistics from "@/components/dashboard/admin/AdminStatistics";
import PlatformAnalytics from "./PlatformAnalytics";
import QuickActions from "@/components/dashboard/admin/QuickActions ";
import RecentResources from "@/components/dashboard/admin/RecentResources";

const AdminDashboardPage = () => {
    return (
        <div className="space-y-8">

            {/* Header */}
            <section className="rounded-3xl bg-linear-to-r from-green-600 via-emerald-600 to-green-700 p-8 text-white shadow-lg">
                <div className="flex items-center gap-5">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                        <ShieldCheck size={34} />
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold">
                            Admin Dashboard
                        </h1>

                        <p className="mt-2 max-w-3xl text-green-100 leading-7">
                            Welcome to the AgroLink administration panel.
                            Monitor platform activities, manage users,
                            review resources, and oversee system performance.
                        </p>
                    </div>

                </div>
            </section>

            {/* Welcome */}
            <AdminOverview />

            {/* Statistics */}
            <AdminStatistics/>

            {/* Quick Actions */}
            <QuickActions/>

            {/* Analytics */}
            <PlatformAnalytics/>

            {/* Tables */}
            <div className="grid gap-8 xl:grid-cols-2">
                <RecentUsers/>
                <RecentResources/>
            </div>
        </div>
    );
};

export default AdminDashboardPage;

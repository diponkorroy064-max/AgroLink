import { BarChart3 } from "lucide-react";
import AdminStatistics from "@/components/dashboard/admin/AdminStatistics";
import PlatformAnalytics from "@/components/dashboard/admin/PlatformAnalytics";

const AdminAnalyticsPage = () => {
    return (
        <div className="space-y-8">

            {/* Hero */}
            <section className="rounded-3xl bg-linear-to-r from-green-600 via-emerald-600 to-green-700 p-8 text-white shadow-lg">

                <div className="flex items-center gap-5">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                        <BarChart3 size={34} />
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold">
                            Platform Analytics
                        </h1>

                        <p className="mt-2 max-w-3xl leading-7 text-green-100">
                            Monitor AgroLink`s overall performance, user growth,
                            engagement, and resource publishing statistics.
                        </p>
                    </div>

                </div>

            </section>

            {/* Statistics Cards */}
            <AdminStatistics />

            {/* Charts */}
            <PlatformAnalytics/>

        </div>
    );
};

export default AdminAnalyticsPage;

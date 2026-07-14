import GeneralSettings from "@/components/dashboard/admin/GeneralSettings";
import NotificationSettings from "@/components/dashboard/admin/NotificationSettings";
import PlatformSettings from "@/components/dashboard/admin/PlatformSettings";
import SecuritySettings from "@/components/dashboard/admin/SecuritySettings";
import { Settings } from "lucide-react";


const AdminSettingsPage = () => {
    return (
        <div className="space-y-8">

            {/* Hero Section */}
            <section className="rounded-3xl bg-linear-to-r from-green-600 via-emerald-600 to-green-700 p-8 text-white shadow-lg">

                <div className="flex items-center gap-5">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                        <Settings size={34} />
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold">
                            Admin Settings
                        </h1>

                        <p className="mt-2 max-w-3xl leading-7 text-green-100">
                            Configure AgroLink platform settings, notifications,
                            security, and general system preferences.
                        </p>
                    </div>

                </div>

            </section>

            <GeneralSettings/>

            <PlatformSettings/>

            <SecuritySettings/>

            <NotificationSettings/>

        </div>
    );
};

export default AdminSettingsPage;

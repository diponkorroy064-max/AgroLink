import MyResourcesTable from "@/components/dashboard/farmer/my-resources/MyResourcesTable";
import { FolderOpen } from "lucide-react";

export default function MyResourcesPage() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="rounded-3xl bg-linear-to-r from-green-600 to-emerald-600 p-8 text-white shadow">
                <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-white/20 p-4">
                        <FolderOpen size={36} />
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold">
                            My Resources
                        </h1>

                        <p className="mt-2 text-green-100">
                            View, manage, edit, and publish all of your agricultural resources.
                        </p>
                    </div>
                </div>
            </div>

            {/* Table */}
            <MyResourcesTable />
        </div>
    );
}

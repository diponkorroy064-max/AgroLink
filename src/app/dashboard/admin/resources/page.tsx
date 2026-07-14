import ResourcesTable from "@/components/dashboard/admin/ResourcesTable";
import { FileText } from "lucide-react";

const AdminResourcesPage = () => {
    return (
        <div className="space-y-8">

            {/* Header */}
            <section className="rounded-3xl bg-linear-to-r from-green-600 via-emerald-600 to-green-700 p-8 text-white shadow-lg">

                <div className="flex items-center gap-5">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                        <FileText size={34} />
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold">
                            Resource Management
                        </h1>

                        <p className="mt-2 max-w-3xl leading-7 text-green-100">
                            Review, approve, reject, edit, and manage all
                            agricultural resources published by farmers,
                            experts, students, and businesses.
                        </p>
                    </div>

                </div>

            </section>

            {/* Resources Table */}
            <ResourcesTable/>

        </div>
    );
};

export default AdminResourcesPage;

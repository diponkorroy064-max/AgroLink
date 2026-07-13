import PublishedResourcesTable from "@/components/dashboard/expert/PublishedResourcesTable";
import { FileText } from "lucide-react";

export default function PublishedResourcesPage() {
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
                            Published Resources
                        </h1>

                        <p className="mt-2 max-w-3xl text-green-100 leading-7">
                            Manage all of your published agricultural resources,
                            research papers, farming guides, and educational
                            content from one place.
                        </p>
                    </div>

                </div>
            </section>

            <PublishedResourcesTable />

        </div>
    );
};

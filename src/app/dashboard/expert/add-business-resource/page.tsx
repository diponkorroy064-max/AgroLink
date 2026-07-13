import PublishResourceForm from "@/components/dashboard/expert/PublishResourceForm";
import { FileText } from "lucide-react";

const AddExpertResourcePage = () => {
    return (
        <div className="space-y-8">

            {/* Page Header */}
            <section className="rounded-3xl bg-linear-to-r from-green-600 via-emerald-600 to-green-700 p-8 text-white shadow-lg">
                <div className="flex items-center gap-5">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                        <FileText size={34} />
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold">
                            Publish Agricultural Resource
                        </h1>

                        <p className="mt-2 max-w-3xl text-green-100 leading-7">
                            Share your agricultural expertise with the AgroLink
                            community by publishing research articles, farming
                            guides, best practices, educational materials, and
                            modern agricultural technologies.
                        </p>
                    </div>

                </div>
            </section>

            {/* Publish Resource Form */}
            <PublishResourceForm/>

        </div>
    );
};

export default AddExpertResourcePage;

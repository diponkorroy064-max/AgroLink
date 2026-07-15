import Link from "next/link";
import { ChevronRight, PlusCircle } from "lucide-react";
import AddResourceForm from "@/components/dashboard/farmer/add-resource/AddResourceForm";

export default function AddResource() {
    return (
        <div className="space-y-8">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
                <Link href="/dashboard/farmer" className="hover:text-green-600">
                    Dashboard
                </Link>

                <ChevronRight size={16} className="mx-2" />

                <span className="font-medium text-gray-700">
                    Add Resource
                </span>
            </div>

            {/* Header */}
            <div className="rounded-3xl bg-linear-to-r from-green-600 to-emerald-600 p-8 text-white shadow">
                <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-white/20 p-4">
                        <PlusCircle size={36} />
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold">
                            Add New Resource
                        </h1>

                        <p className="mt-2 text-green-100">
                            Share your agricultural knowledge, farming
                            techniques, research, or educational resources with
                            the AgroLink community.
                        </p>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
                <AddResourceForm/>
            </div>
        </div>
    );
}


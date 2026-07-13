import FarmerProfileForm from "@/components/dashboard/farmer/profile/FarmerProfileForm";
import { UserRound } from "lucide-react";

export default function FarmerProfilePage() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="rounded-3xl bg-linear-to-r from-green-600 to-emerald-600 p-8 text-white shadow">
                <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-white/20 p-4">
                        <UserRound size={36} />
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold">
                            My Profile
                        </h1>

                        <p className="mt-2 text-green-100">
                            Manage your personal information and farming details.
                        </p>
                    </div>
                </div>
            </div>

            {/* Profile Form */}
            <FarmerProfileForm/>
        </div>
    );
}

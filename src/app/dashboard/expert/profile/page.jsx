import { UserRound } from "lucide-react";
import ExpertProfileCard from "@/components/dashboard/expert/ExpertProfileCard";

const ExpertProfilePage = () => {
    return (
        <div className="space-y-8">

            {/* Header */}
            <section className="rounded-3xl bg-linear-to-r from-green-600 via-emerald-600 to-green-700 p-8 text-white shadow-lg">
                <div className="flex items-center gap-5">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                        <UserRound size={34} />
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold">
                            My Profile
                        </h1>

                        <p className="mt-2 max-w-3xl text-green-100 leading-7">
                            Manage your personal information, professional details,
                            and public profile as an Agricultural Expert.
                        </p>
                    </div>

                </div>
            </section>

            <ExpertProfileCard />
        </div>
    );
};

export default ExpertProfilePage;

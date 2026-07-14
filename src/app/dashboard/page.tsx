"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

// interface user {
//     id: string;
//     name: string;
//     email: string;
//     role: "farmer" | "expert" | "student" | "business" | "admin";
// }

const DashboardPage = () => {
    const router = useRouter();
    const { data, isPending } = authClient.useSession();


    useEffect(() => {
        if (isPending) return;

        if (!data?.user) {
            router.replace("/auth/login");
            return;
        }

        switch (data.user?.role) {
            case "farmer":
                router.replace("/dashboard/farmer");
                break;

            case "expert":
                router.replace("/dashboard/expert");
                break;

            case "student":
                router.replace("/dashboard/student");
                break;

            case "business":
                router.replace("/dashboard/business");
                break;

            case "admin":
                router.replace("/dashboard/admin");
                break;

            default:
                router.replace("/");
        }
    }, [data, isPending, router]);

    return (
        <div className="flex min-h-[70vh] items-center justify-center">
            <div className="text-center">
                <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-green-600 border-t-transparent"></div>
                <h2 className="text-xl font-semibold text-gray-700">
                    Redirecting to your dashboard...
                </h2>
            </div>
        </div>
    );
};

export default DashboardPage;

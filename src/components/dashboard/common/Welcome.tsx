import Link from "next/link";
import {
    CalendarDays,
    Sprout,
    Plus,
    BookOpen,
    Briefcase,
    GraduationCap,
    UserCog,
} from "lucide-react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Welcome() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;

    const name = user?.name || "User";
    const role = (user?.role || "farmer") as
        | "farmer"
        | "expert"
        | "student"
        | "business"
        | "admin";

    const hour = new Date().getHours();

    let greeting = "Good Evening";

    if (hour < 12) greeting = "Good Morning";
    else if (hour < 18) greeting = "Good Afternoon";

    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const roleContent = {
        farmer: {
            title: "Farmer",
            description:
                "Manage your agricultural resources, discover modern farming techniques, and connect with experts to improve your productivity.",
            addLink: "/dashboard/farmer/add-resource",
            addText: "Add Resource",
            icon: <Plus size={20} />,
        },

        expert: {
            title: "Agricultural Expert",
            description:
                "Publish agricultural research, review community resources, and help farmers by sharing your professional expertise.",
            addLink: "/dashboard/expert/add-resource",
            addText: "Publish Resource",
            icon: <BookOpen size={20} />,
        },

        student: {
            title: "Agriculture Student",
            description:
                "Explore agricultural learning materials, upload research, and collaborate with experts and farmers.",
            addLink: "/dashboard/student/add-resource",
            addText: "Upload Research",
            icon: <GraduationCap size={20} />,
        },

        business: {
            title: "Agricultural Business",
            description:
                "Manage your agricultural products, connect with farmers, and grow your business through AgroLink.",
            addLink: "/dashboard/business/add-resource",
            addText: "Add Listing",
            icon: <Briefcase size={20} />,
        },

        admin: {
            title: "Administrator",
            description:
                "Manage users, resources, reports, and platform activities to keep AgroLink running smoothly.",
            addLink: "/dashboard/admin",
            addText: "Admin Panel",
            icon: <UserCog size={20} />,
        },
    };

    const currentRole = roleContent[role];

    return (
        <section className="overflow-hidden rounded-3xl bg-linear-to-r from-green-600 via-emerald-600 to-green-700 p-8 text-white shadow-lg">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

                {/* Left */}
                <div>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur">
                        <CalendarDays size={18} />
                        <span>{today}</span>
                    </div>

                    <h1 className="text-4xl font-bold">
                        {greeting}, {name}! 👋
                    </h1>

                    <p className="mt-2 text-xl font-semibold text-green-100">
                        Welcome to the {currentRole.title} Dashboard
                    </p>

                    <p className="mt-4 max-w-2xl leading-7 text-green-100">
                        {currentRole.description}
                    </p>
                </div>

                {/* Right */}
                <div className="flex flex-wrap gap-4">

                    <Link
                        href={currentRole.addLink}
                        className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-green-700 transition hover:scale-105"
                    >
                        {currentRole.icon}
                        {currentRole.addText}
                    </Link>

                    <Link
                        href="/explore"
                        className="flex items-center gap-2 rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-green-700"
                    >
                        <BookOpen size={20} />
                        Explore Resources
                    </Link>

                </div>
            </div>

            <div className="mt-8 flex items-center gap-3 text-green-100">
                <Sprout size={22} />
                <span className="text-sm">
                    Empowering agriculture through knowledge, innovation, and collaboration.
                </span>
            </div>
        </section>
    );
}

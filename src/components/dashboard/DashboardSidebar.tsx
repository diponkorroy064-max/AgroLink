"use client";
import Link from "next/link";
import { getSidebarLinks } from "@/utils/getSidebarLinks";
import { Leaf } from "lucide-react";
import { Avatar } from "@heroui/react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

interface DashboardSidebarProps {
    user?: {
        name?: string;
        role?: string;
        image?: string;
        photoURL?: string;
    };
    sidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function DashboardSidebar({
    user,
    sidebarOpen,
    setSidebarOpen,
}: DashboardSidebarProps) {
    console.log('role from dashboard sidebar', user);
    const links = getSidebarLinks(user?.role || "");
    const pathname = usePathname();

    return (
        <aside className={`fixed left-0 top-20 h-[calc(100vh-80px)] w-60 border-r z-400 bg-white px-5 py-6 shadow-sm transition-transform
        duration-300 ${sidebarOpen? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}>

            {/* Logo + User */}
            <div className="mb-8">

                {/* Dashboard Logo */}
                <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                        <Leaf className="text-green-700" size={26} />
                    </div>

                    <div>
                        <h2 className="font-bold text-gray-900">
                            AgroLink
                        </h2>

                        <p className="text-sm text-gray-500">
                            Dashboard
                        </p>
                    </div>
                </div>

                {/* User */}
                <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">

                    <Avatar size="lg">
                        <Avatar.Image
                            alt="Large Avatar"
                            src={user?.photoURL}
                        />
                        <Avatar.Fallback>LG</Avatar.Fallback>
                    </Avatar>

                    <div>
                        <h3 className="font-semibold text-gray-900">
                            {user?.name || "Guest User"}
                        </h3>

                        <p className="text-sm capitalize text-green-600">
                            {user?.role}
                        </p>
                    </div>

                </div>
            </div>

            <nav className="space-y-2">
                {links.map((link) => {
                    const Icon = link.icon;
                    const active = pathname === link.href

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center gap-3 rounded-xl p-3 transition-all
                                ${active
                                    ? "bg-green-600 text-white shadow"
                                    : "text-gray-700 hover:bg-green-100 hover:text-green-700"
                                }`}
                        >
                            <Icon size={20} />
                            <span>{link.title}</span>
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}

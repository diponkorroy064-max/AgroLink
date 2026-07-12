"use client";
import { Avatar } from "@heroui/react";
import { Menu, Bell, Search, CalendarDays } from "lucide-react";

interface DashboardNavbarProps {
    user: {
        name: string;
        role: string;
        photoURL?: string;
    };
    onMenuClick?: () => void;
}

export default function DashboardNavbar({
    user,
    onMenuClick,
}: DashboardNavbarProps) {
    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <header className="sticky top-0 z-40 border-b bg-white">
            <div className="flex h-20 items-center justify-between px-4 lg:px-8">

                {/* left */}
                {/* <div></div> */}

                {/* middle */}
                <div className="flex items-center gap-4">

                    {/* Mobile Menu */}
                    <button
                        onClick={onMenuClick}
                        className="rounded-lg p-2 transition hover:bg-gray-100 lg:hidden"
                    >
                        <Menu className="h-6 w-6" />
                    </button>

                    {/* Search */}
                    <div className="relative hidden md:block">
                        <Search
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                            type="text"
                            placeholder="Search resources..."
                            className="w-80 rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none transition focus:border-green-600"
                        />
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-6">

                    {/* Date */}
                    <div className="hidden items-center gap-2 text-sm text-gray-500 lg:flex">
                        <CalendarDays size={18} />
                        <span>{today}</span>
                    </div>

                    {/* Notification */}
                    <button className="relative rounded-xl p-2 transition hover:bg-gray-100">
                        <Bell className="h-6 w-6 text-gray-600" />

                        <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-red-500"></span>
                    </button>

                    {/* User */}
                    <div className="flex items-center gap-3">

                        <Avatar size="lg">
                            <Avatar.Image
                                alt="Large Avatar"
                                src={user?.photoURL || "/default-avatar.png"}
                            />
                            <Avatar.Fallback>LG</Avatar.Fallback>
                        </Avatar>

                        <div className="hidden lg:block">
                            <h4 className="font-semibold text-gray-800">
                                {user?.name}
                            </h4>

                            <p className="text-sm capitalize text-gray-500">
                                {user?.role}
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </header>
    );
}

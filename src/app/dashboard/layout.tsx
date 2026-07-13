"use client";
import { ReactNode } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import { authClient } from "@/lib/auth-client";

interface DashboardLayoutProps {
    children: ReactNode;
}

export default function DashboardLayout({children}: DashboardLayoutProps) {
    const { data } = authClient.useSession();
    // console.log('data from layout', data);
    const user = data?.user;
    // console.log('user from layout', user);

    return (
        <div className="min-h-full bg-gray-100" >
            {/* Top Navbar */}
            < DashboardNavbar user={user} />

            {/* Sidebar + Content */}
            < div className="flex" >

                <DashboardSidebar user={user} />

                <main className="flex-1 md:ml-60">
                    <div className="mx-auto max-w-7xl p-6">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}


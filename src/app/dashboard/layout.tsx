"use client";
import { ReactNode } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import { authClient } from "@/lib/auth-client";

interface DashboardLayoutProps {
    children: ReactNode;
}

export default function DashboardLayout({
    children,
}: DashboardLayoutProps) {

    const { data } = authClient.useSession();
    console.log('data from layout', data);
    const user = data?.user;
    console.log('user from layout', user);

    return (
        <div className="min-h-screen bg-gray-100" >

            {/* Top Navbar */}
            < DashboardNavbar user={user} />

            {/* Sidebar + Content */}
            < div className="flex" >

                <DashboardSidebar role={user?.role} />

                < main className="flex-1 lg:ml-72 p-6" >
                    {children}
                </main>

            </div>

        </div>
    );
}


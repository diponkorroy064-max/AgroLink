"use client";
import { ReactNode, useState } from "react";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { authClient } from "@/lib/auth-client";

interface DashboardLayoutProps {
    children: ReactNode;
}

export default function DashboardLayout({ children}: DashboardLayoutProps) {
    const { data } = authClient.useSession();
    const user = data?.user;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">

            <DashboardNavbar
                user={user}
                sidebarOpen={sidebarOpen}
                onMenuClick={() => setSidebarOpen(!sidebarOpen)}
            />

            <DashboardSidebar
                user={user}
                sidebarOpen={sidebarOpen}
            />

            <main className="p-6 lg:ml-60">
                {children}
            </main>
        </div>
    );
}

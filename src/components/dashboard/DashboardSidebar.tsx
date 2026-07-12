"use client";
import Link from "next/link";
import { getSidebarLinks } from "@/utils/getSidebarLinks";

interface DashboardSidebarProps { role: string;}

export default function DashboardSidebar({ role }: DashboardSidebarProps) {
    console.log('role from dashboard sidebar', role);
    
    const links = getSidebarLinks(role);

    return (
        <aside className="h-full w-60 overflow-y-auto border-r px-2.5 md:px-5 bg-white shadow">
            <nav className="space-y-2">
                {links.map((link) => {
                    const Icon = link.icon;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="flex items-center gap-3 rounded-lg p-3 hover:bg-green-100"
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

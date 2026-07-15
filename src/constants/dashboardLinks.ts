import { Home, User, PlusCircle, FolderOpen, Settings,Users, BarChart3, ClipboardList, Briefcase, BookOpen} from "lucide-react";

export const farmerLinks = [
    {
        title: "Dashboard",
        href: "/dashboard/farmer",
        icon: Home,
    },
    {
        title: "Add Resource",
        href: "/dashboard/farmer/add-resource",
        icon: PlusCircle,
    },
    {
        title: "My Resources",
        href: "/dashboard/farmer/my-resources",
        icon: FolderOpen,
    },
    {
        title: "My Profile",
        href: "/dashboard/farmer/profile",
        icon: User,
    },
    {
        title: "Settings",
        href: "/dashboard/farmer/settings",
        icon: Settings,
    },
];

export const studentLinks = [
    {
        title: "Dashboard",
        href: "/dashboard/student",
        icon: Home,
    },
    {
        title: "Learning Resources",
        href: "/dashboard/student/resources",
        icon: BookOpen,
    },
    {
        title: "Upload Research",
        href: "/dashboard/student/add-resource",
        icon: PlusCircle,
    },
    {
        title: "Profile",
        href: "/dashboard/student/profile",
        icon: User,
    },
    {
        title: "Settings",
        href: "/dashboard/student/settings",
        icon: Settings,
    },
];

export const expertLinks = [
    {
        title: "Dashboard",
        href: "/dashboard/expert",
        icon: Home,
    },
    {
        title: "Add Resource",
        href: "/dashboard/expert/add-business-resource",
        icon: PlusCircle,
    },
    {
        title: "All Resources",
        href: "/dashboard/expert/my-resources",
        icon: ClipboardList,
    },
    {
        title: "Profile",
        href: "/dashboard/expert/profile",
        icon: User,
    },
    {
        title: "Settings",
        href: "/dashboard/expert/settings",
        icon: Settings,
    },
];

export const businessLinks = [
    {
        title: "Dashboard",
        href: "/dashboard/business",
        icon: Home,
    },
    {
        title: "Add Business Resource",
        href: "/dashboard/business/add-resource",
        icon: Briefcase,
    },
    {
        title: "My Listings",
        href: "/dashboard/business/my-resources",
        icon: FolderOpen,
    },
    {
        title: "Profile",
        href: "/dashboard/business/profile",
        icon: User,
    },
    {
        title: "Settings",
        href: "/dashboard/business/settings",
        icon: Settings,
    },
];

export const adminLinks = [
    {
        title: "Dashboard",
        href: "/dashboard/admin",
        icon: Home,
    },
    {
        title: "Users",
        href: "/dashboard/admin/users",
        icon: Users,
    },
    {
        title: "Resources",
        href: "/dashboard/admin/resources",
        icon: FolderOpen,
    },
    {
        title: "Analytics",
        href: "/dashboard/admin/analytics",
        icon: BarChart3,
    },
    {
        title: "Settings",
        href: "/dashboard/admin/settings",
        icon: Settings,
    },
];

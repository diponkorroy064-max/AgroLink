import { adminLinks, businessLinks, expertLinks, farmerLinks,studentLinks} from "@/constants/dashboardLinks";

export const getSidebarLinks = (role: string) => {
    switch (role) {
        case "farmer":
            return farmerLinks;

        case "student":
            return studentLinks;

        case "expert":
            return expertLinks;

        case "business":
            return businessLinks;

        case "admin":
            return adminLinks;

        default:
            return [];
    }
};


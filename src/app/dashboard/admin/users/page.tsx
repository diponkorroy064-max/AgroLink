import UsersTable from "@/components/dashboard/admin/UsersTable";
import { Users } from "lucide-react";

const AdminUsersPage = () => {
    return (
        <div className="space-y-8">

            {/* Header */}
            <section className="rounded-3xl bg-linear-to-r from-green-600 via-emerald-600 to-green-700 p-8 text-white shadow-lg">

                <div className="flex items-center gap-5">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                        <Users size={34} />
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold">
                            User Management
                        </h1>

                        <p className="mt-2 max-w-3xl leading-7 text-green-100">
                            View, search, edit, manage roles, and monitor all
                            registered users across the AgroLink platform.
                        </p>
                    </div>

                </div>

            </section>

            {/* Users Table */}
            <UsersTable/>

        </div>
    );
};

export default AdminUsersPage;

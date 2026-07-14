"use client";

import { Save } from "lucide-react";

export default function GeneralSettings() {
    return (
        <section className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                    General Settings
                </h2>

                <p className="mt-2 text-gray-500">
                    Configure your platform`s basic information.
                </p>
            </div>

            <form className="space-y-6">

                {/* Platform Name */}
                <div>
                    <label className="mb-2 block font-medium text-gray-700">
                        Platform Name
                    </label>

                    <input
                        type="text"
                        defaultValue="AgroLink"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                    />
                </div>

                {/* Website URL */}
                <div>
                    <label className="mb-2 block font-medium text-gray-700">
                        Website URL
                    </label>

                    <input
                        type="url"
                        defaultValue="https://agrolink.com"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                    />
                </div>

                {/* Support Email */}
                <div>
                    <label className="mb-2 block font-medium text-gray-700">
                        Support Email
                    </label>

                    <input
                        type="email"
                        defaultValue="support@agrolink.com"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                    />
                </div>

                {/* Contact Number */}
                <div>
                    <label className="mb-2 block font-medium text-gray-700">
                        Contact Number
                    </label>

                    <input
                        type="tel"
                        defaultValue="+8801700000000"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                    />
                </div>

                {/* Address */}
                <div>
                    <label className="mb-2 block font-medium text-gray-700">
                        Office Address
                    </label>

                    <textarea
                        rows={4}
                        defaultValue="Dhaka, Bangladesh"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                    />
                </div>

                {/* About */}
                <div>
                    <label className="mb-2 block font-medium text-gray-700">
                        About Platform
                    </label>

                    <textarea
                        rows={5}
                        defaultValue="AgroLink connects farmers, agricultural experts, students, and businesses through a modern digital platform."
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                    />
                </div>

                {/* Logo Upload */}
                <div>
                    <label className="mb-2 block font-medium text-gray-700">
                        Platform Logo
                    </label>

                    <input
                        type="file"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 file:mr-4 file:rounded-lg file:border-0 file:bg-green-600 file:px-4 file:py-2 file:text-white hover:file:bg-green-700"
                    />
                </div>

                {/* Save Button */}
                <div className="pt-4">
                    <button
                        type="submit"
                        className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
                    >
                        <Save size={18} />
                        Save Changes
                    </button>
                </div>

            </form>

        </section>
    );
}

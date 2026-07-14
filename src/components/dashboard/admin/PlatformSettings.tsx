"use client";

import { Save } from "lucide-react";

export default function PlatformSettings() {
    return (
        <section className="rounded-3xl bg-white p-8 shadow-sm">

            {/* Header */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                    Platform Settings
                </h2>

                <p className="mt-2 text-gray-500">
                    Configure platform behavior and default system preferences.
                </p>
            </div>

            <form className="space-y-8">

                {/* Default User Role */}
                <div>
                    <label className="mb-2 block font-medium text-gray-700">
                        Default User Role
                    </label>

                    <select className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600">
                        <option>Farmer</option>
                        <option>Student</option>
                        <option>Business</option>
                    </select>
                </div>

                {/* Upload Limit */}
                <div>
                    <label className="mb-2 block font-medium text-gray-700">
                        Maximum Upload Size (MB)
                    </label>

                    <input
                        type="number"
                        defaultValue={20}
                        min={1}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                    />
                </div>

                {/* Auto Delete */}
                <div>
                    <label className="mb-2 block font-medium text-gray-700">
                        Auto Delete Pending Resources (Days)
                    </label>

                    <input
                        type="number"
                        defaultValue={30}
                        min={1}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                    />
                </div>

                {/* Toggles */}
                <div className="space-y-5">

                    <div className="flex items-center justify-between rounded-xl border p-4">
                        <div>
                            <h4 className="font-semibold text-gray-900">
                                Allow New User Registration
                            </h4>

                            <p className="text-sm text-gray-500">
                                Users can create new accounts.
                            </p>
                        </div>

                        <input
                            type="checkbox"
                            defaultChecked
                            className="h-5 w-5 accent-green-600"
                        />
                    </div>

                    <div className="flex items-center justify-between rounded-xl border p-4">
                        <div>
                            <h4 className="font-semibold text-gray-900">
                                Auto Approve Resources
                            </h4>

                            <p className="text-sm text-gray-500">
                                Newly uploaded resources are approved automatically.
                            </p>
                        </div>

                        <input
                            type="checkbox"
                            className="h-5 w-5 accent-green-600"
                        />
                    </div>

                    <div className="flex items-center justify-between rounded-xl border p-4">
                        <div>
                            <h4 className="font-semibold text-gray-900">
                                Enable Expert Verification
                            </h4>

                            <p className="text-sm text-gray-500">
                                Experts require admin verification before publishing.
                            </p>
                        </div>

                        <input
                            type="checkbox"
                            defaultChecked
                            className="h-5 w-5 accent-green-600"
                        />
                    </div>

                    <div className="flex items-center justify-between rounded-xl border p-4">
                        <div>
                            <h4 className="font-semibold text-gray-900">
                                Enable Maintenance Mode
                            </h4>

                            <p className="text-sm text-gray-500">
                                Temporarily disable public access to the platform.
                            </p>
                        </div>

                        <input
                            type="checkbox"
                            className="h-5 w-5 accent-green-600"
                        />
                    </div>

                    <div className="flex items-center justify-between rounded-xl border p-4">
                        <div>
                            <h4 className="font-semibold text-gray-900">
                                Allow Public Resource Viewing
                            </h4>

                            <p className="text-sm text-gray-500">
                                Visitors can browse approved resources without logging in.
                            </p>
                        </div>

                        <input
                            type="checkbox"
                            defaultChecked
                            className="h-5 w-5 accent-green-600"
                        />
                    </div>

                </div>

                {/* Save Button */}
                <div>
                    <button
                        type="submit"
                        className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
                    >
                        <Save size={18} />
                        Save Platform Settings
                    </button>
                </div>

            </form>

        </section>
    );
}

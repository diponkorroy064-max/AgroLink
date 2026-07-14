"use client";

import { Save, ShieldCheck } from "lucide-react";

export default function SecuritySettings() {
    return (
        <section className="rounded-3xl bg-white p-8 shadow-sm">

            {/* Header */}
            <div className="mb-8 flex items-center gap-3">
                <div className="rounded-xl bg-green-100 p-3">
                    <ShieldCheck className="text-green-600" size={24} />
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Security Settings
                    </h2>

                    <p className="mt-1 text-gray-500">
                        Update your password and configure platform security options.
                    </p>
                </div>
            </div>

            <form className="space-y-8">

                {/* Change Password */}
                <div className="space-y-5 rounded-2xl border border-gray-200 p-6">

                    <h3 className="text-lg font-semibold text-gray-900">
                        Change Password
                    </h3>

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            Current Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter current password"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            New Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter new password"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            Confirm New Password
                        </label>

                        <input
                            type="password"
                            placeholder="Confirm new password"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                        />
                    </div>

                </div>

                {/* Security Options */}
                <div className="space-y-5">

                    <div className="flex items-center justify-between rounded-xl border border-gray-200 p-4">
                        <div>
                            <h4 className="font-semibold text-gray-900">
                                Two-Factor Authentication (2FA)
                            </h4>

                            <p className="text-sm text-gray-500">
                                Add an extra layer of security to your account.
                            </p>
                        </div>

                        <input
                            type="checkbox"
                            className="h-5 w-5 accent-green-600"
                        />
                    </div>

                    <div className="flex items-center justify-between rounded-xl border border-gray-200 p-4">
                        <div>
                            <h4 className="font-semibold text-gray-900">
                                Email Login Alerts
                            </h4>

                            <p className="text-sm text-gray-500">
                                Receive an email whenever your account signs in.
                            </p>
                        </div>

                        <input
                            type="checkbox"
                            defaultChecked
                            className="h-5 w-5 accent-green-600"
                        />
                    </div>

                    <div className="flex items-center justify-between rounded-xl border border-gray-200 p-4">
                        <div>
                            <h4 className="font-semibold text-gray-900">
                                Auto Logout
                            </h4>

                            <p className="text-sm text-gray-500">
                                Automatically sign out after 30 minutes of inactivity.
                            </p>
                        </div>

                        <input
                            type="checkbox"
                            defaultChecked
                            className="h-5 w-5 accent-green-600"
                        />
                    </div>

                    <div className="flex items-center justify-between rounded-xl border border-gray-200 p-4">
                        <div>
                            <h4 className="font-semibold text-gray-900">
                                Require Strong Passwords
                            </h4>

                            <p className="text-sm text-gray-500">
                                Force users to use uppercase letters, numbers and special characters.
                            </p>
                        </div>

                        <input
                            type="checkbox"
                            defaultChecked
                            className="h-5 w-5 accent-green-600"
                        />
                    </div>

                    <div className="flex items-center justify-between rounded-xl border border-gray-200 p-4">
                        <div>
                            <h4 className="font-semibold text-gray-900">
                                Session Timeout
                            </h4>

                            <p className="text-sm text-gray-500">
                                End inactive sessions after a specified time.
                            </p>
                        </div>

                        <select className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-green-600">
                            <option>15 Minutes</option>
                            <option>30 Minutes</option>
                            <option>1 Hour</option>
                            <option>2 Hours</option>
                            <option>Never</option>
                        </select>
                    </div>

                </div>

                {/* Save */}
                <div>
                    <button
                        type="submit"
                        className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
                    >
                        <Save size={18} />
                        Save Security Settings
                    </button>
                </div>

            </form>

        </section>
    );
}

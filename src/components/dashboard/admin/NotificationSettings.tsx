"use client";

import { Save, Bell } from "lucide-react";

export default function NotificationSettings() {
    return (
        <section className="rounded-3xl bg-white p-8 shadow-sm">

            {/* Header */}
            <div className="mb-8 flex items-center gap-3">
                <div className="rounded-xl bg-green-100 p-3">
                    <Bell className="text-green-600" size={24} />
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Notification Settings
                    </h2>

                    <p className="mt-1 text-gray-500">
                        Configure email, system, and platform notifications.
                    </p>
                </div>
            </div>

            <form className="space-y-8">

                {/* Email Notifications */}
                <div className="space-y-5 rounded-2xl border border-gray-200 p-6">

                    <h3 className="text-lg font-semibold text-gray-900">
                        Email Notifications
                    </h3>

                    <div className="flex items-center justify-between rounded-xl border p-4">
                        <div>
                            <h4 className="font-semibold text-gray-900">
                                New User Registration
                            </h4>

                            <p className="text-sm text-gray-500">
                                Receive an email whenever a new user registers.
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
                                New Resource Submission
                            </h4>

                            <p className="text-sm text-gray-500">
                                Get notified when a resource is uploaded.
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
                                Resource Approval Requests
                            </h4>

                            <p className="text-sm text-gray-500">
                                Notify when resources are waiting for approval.
                            </p>
                        </div>

                        <input
                            type="checkbox"
                            defaultChecked
                            className="h-5 w-5 accent-green-600"
                        />
                    </div>

                </div>

                {/* Platform Notifications */}
                <div className="space-y-5 rounded-2xl border border-gray-200 p-6">

                    <h3 className="text-lg font-semibold text-gray-900">
                        Platform Notifications
                    </h3>

                    <div className="flex items-center justify-between rounded-xl border p-4">
                        <div>
                            <h4 className="font-semibold text-gray-900">
                                Weekly Activity Report
                            </h4>

                            <p className="text-sm text-gray-500">
                                Receive a summary of weekly platform activities.
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
                                Monthly Analytics Report
                            </h4>

                            <p className="text-sm text-gray-500">
                                Receive platform analytics every month.
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
                                System Maintenance Alerts
                            </h4>

                            <p className="text-sm text-gray-500">
                                Get notified before scheduled maintenance.
                            </p>
                        </div>

                        <input
                            type="checkbox"
                            defaultChecked
                            className="h-5 w-5 accent-green-600"
                        />
                    </div>

                </div>

                {/* Security Notifications */}
                <div className="space-y-5 rounded-2xl border border-gray-200 p-6">

                    <h3 className="text-lg font-semibold text-gray-900">
                        Security Notifications
                    </h3>

                    <div className="flex items-center justify-between rounded-xl border p-4">
                        <div>
                            <h4 className="font-semibold text-gray-900">
                                Failed Login Attempts
                            </h4>

                            <p className="text-sm text-gray-500">
                                Receive alerts when multiple failed logins occur.
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
                                Admin Account Changes
                            </h4>

                            <p className="text-sm text-gray-500">
                                Notify when administrator information changes.
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
                                Suspicious Activity Detection
                            </h4>

                            <p className="text-sm text-gray-500">
                                Get instant alerts for suspicious platform activity.
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
                        Save Notification Settings
                    </button>
                </div>

            </form>

        </section>
    );
}

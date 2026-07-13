"use client";
import { Avatar } from "@heroui/react";
import { Mail, Phone, MapPin, GraduationCap, Briefcase, BookOpen, Award, Edit, Lock} from "lucide-react";

export default function ExpertProfileCard() {
    return (
        <div className="space-y-8">

            {/* Profile Card */}
            <section className="rounded-3xl bg-white p-8 shadow-sm">

                <div className="flex flex-col items-center gap-6 lg:flex-row">

                    <Avatar className="size-44">
                        <Avatar.Image
                            alt="Extra Large"
                            src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
                        />
                        <Avatar.Fallback>XL</Avatar.Fallback>
                    </Avatar>

                    <div className="flex-1">

                        <h2 className="text-3xl font-bold text-gray-900">
                            Dr. John Doe
                        </h2>

                        <p className="mt-2 text-lg font-medium text-green-600">
                            Agricultural Expert
                        </p>

                        <p className="mt-1 text-gray-500">
                            Sher-e-Bangla Agricultural University
                        </p>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">

                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-green-600" />
                                <span>john@example.com</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-green-600" />
                                <span>+880 1712345678</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <MapPin size={18} className="text-green-600" />
                                <span>Dhaka, Bangladesh</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Award size={18} className="text-green-600" />
                                <span>12 Years Experience</span>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Professional Information */}
            <section className="rounded-3xl bg-white p-8 shadow-sm">

                <h2 className="mb-6 text-2xl font-bold">
                    Professional Information
                </h2>

                <div className="grid gap-8 md:grid-cols-2">

                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <GraduationCap className="text-green-600" />
                            <div>
                                <h4 className="font-semibold">
                                    Qualification
                                </h4>
                                <p className="text-gray-600">
                                    PhD in Agriculture
                                </p>
                            </div>
                        </div>

                        <div className="mb-5 flex items-center gap-3">
                            <Briefcase className="text-green-600" />
                            <div>
                                <h4 className="font-semibold">
                                    Institution
                                </h4>
                                <p className="text-gray-600">
                                    Sher-e-Bangla Agricultural University
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <BookOpen className="text-green-600" />
                            <div>
                                <h4 className="font-semibold">
                                    Specialization
                                </h4>
                                <p className="text-gray-600">
                                    Crop Science & Sustainable Agriculture
                                </p>
                            </div>
                        </div>

                    </div>

                    <div>

                        <h4 className="font-semibold">
                            Research Interests
                        </h4>

                        <div className="mt-3 flex flex-wrap gap-2">

                            {[
                                "Organic Farming",
                                "Soil Health",
                                "Climate Smart Agriculture",
                                "Plant Nutrition",
                                "Integrated Pest Management",
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full bg-green-100 px-4 py-2 text-sm text-green-700"
                                >
                                    {item}
                                </span>
                            ))}

                        </div>

                        <h4 className="mt-8 font-semibold">
                            Biography
                        </h4>

                        <p className="mt-3 leading-7 text-gray-600">
                            Passionate agricultural researcher dedicated to
                            improving sustainable farming practices. Published
                            numerous research papers and actively helps farmers
                            adopt modern agricultural technologies.
                        </p>

                    </div>

                </div>

            </section>

            {/* Statistics */}
            <section className="grid gap-6 md:grid-cols-4">

                <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                    <h3 className="text-3xl font-bold text-green-600">
                        48
                    </h3>

                    <p className="mt-2 text-gray-500">
                        Published Resources
                    </p>
                </div>

                <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                    <h3 className="text-3xl font-bold text-blue-600">
                        18.7K
                    </h3>

                    <p className="mt-2 text-gray-500">
                        Total Views
                    </p>
                </div>

                <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                    <h3 className="text-3xl font-bold text-purple-600">
                        3.4K
                    </h3>

                    <p className="mt-2 text-gray-500">
                        Followers
                    </p>
                </div>

                <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                    <h3 className="text-3xl font-bold text-yellow-600">
                        ⭐ 4.9
                    </h3>

                    <p className="mt-2 text-gray-500">
                        Average Rating
                    </p>
                </div>

            </section>

            {/* Actions */}
            <section className="flex flex-wrap justify-end gap-4">

                <button className="flex items-center gap-2 rounded-xl border px-6 py-3 font-semibold transition hover:bg-gray-100">
                    <Lock size={18} />
                    Change Password
                </button>

                <button className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700">
                    <Edit size={18} />
                    Edit Profile
                </button>

            </section>

        </div>
    );
}

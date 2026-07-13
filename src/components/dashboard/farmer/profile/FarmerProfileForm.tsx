"use client";
import Image from "next/image";
import { Camera } from "lucide-react";
import { useForm } from "react-hook-form";

interface ProfileFormData {
    name: string;
    email: string;
    phone: string;
    district: string;
    farmType: string;
    experience: string;
    bio: string;
}

export default function FarmerProfileForm() {
    const { register, handleSubmit} = useForm<ProfileFormData>({
        defaultValues: {
            name: "Diponkor Roy",
            email: "diponkor064@gmail.com",
            phone: "+8801712345678",
            district: "Dhaka",
            farmType: "Crop Farming",
            experience: "5 Years",
            bio: "Passionate about sustainable agriculture and smart farming techniques.",
        },
    });

    const onSubmit = (data: ProfileFormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 rounded-3xl bg-white p-8 shadow-sm">
            {/* Avatar */}
            <div className="flex flex-col items-center">
                <div className="relative">
                    <Image src="https://i.pravatar.cc/200?img=12" alt="Profile" width={120} height={120} className="rounded-full object-cover"/>

                    <button
                        type="button"
                        className="absolute bottom-0 right-0 rounded-full bg-green-600 p-2 text-white">
                        <Camera size={18} />
                    </button>
                </div>

                <h2 className="mt-4 text-2xl font-bold">
                    Diponkor Roy
                </h2>

                <p className="text-green-600">
                    Farmer
                </p>
            </div>

            {/* Form */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label className="mb-2 block font-medium">
                        Full Name
                    </label>

                    <input
                        {...register("name")}
                        className="w-full rounded-xl border p-3 outline-none focus:border-green-600"
                    />
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Email
                    </label>

                    <input
                        disabled
                        {...register("email")}
                        className="w-full rounded-xl border bg-gray-100 p-3"
                    />
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Phone Number
                    </label>

                    <input
                        {...register("phone")}
                        className="w-full rounded-xl border p-3 outline-none focus:border-green-600"
                    />
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        District
                    </label>

                    <input
                        {...register("district")}
                        className="w-full rounded-xl border p-3 outline-none focus:border-green-600"
                    />
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Farm Type
                    </label>

                    <select {...register("farmType")} className="w-full rounded-xl border p-3 outline-none focus:border-green-600">
                        <option>Crop Farming</option>
                        <option>Vegetable Farming</option>
                        <option>Fruit Farming</option>
                        <option>Livestock</option>
                        <option>Poultry</option>
                        <option>Fish Farming</option>
                        <option>Mixed Farming</option>
                    </select>
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Experience
                    </label>

                    <select {...register("experience")} className="w-full rounded-xl border p-3 outline-none focus:border-green-600">
                        <option>Less than 1 Year</option>
                        <option>1-3 Years</option>
                        <option>3-5 Years</option>
                        <option>5-10 Years</option>
                        <option>10+ Years</option>
                    </select>
                </div>

                <div className="md:col-span-2">
                    <label className="mb-2 block font-medium">
                        About Me
                    </label>

                    <textarea
                        rows={5}
                        {...register("bio")}
                        className="w-full rounded-xl border p-3 outline-none focus:border-green-600"
                    />
                </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4">
                <button
                    type="reset"
                    className="rounded-xl border px-6 py-3 font-medium hover:bg-gray-100"
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="rounded-xl bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-700"
                >
                    Save Changes
                </button>
            </div>
        </form>
    );
}

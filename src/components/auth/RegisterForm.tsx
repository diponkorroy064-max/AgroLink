"use client";
import Link from "next/link";
import { Eye, EyeOff, Leaf } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterFormData } from "@/types/auth";
import toast from "react-hot-toast";

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>();

    const onSubmit = async (data: RegisterFormData) => {
        try {
            if (data.password !== data.confirmPassword) {
                throw new Error("Passwords do not match.");
            }

            const userData = {
                name: data.name,
                email: data.email,
                photoURL: data.photoURL || "",
                role: data.role,
                password: data.password,
            };

            console.log(userData);

            // const response = await fetch(...)

            toast.success("Registration successful!");
        }
        catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("Something went wrong!");
            }
        }
    };


    return (
        <section className="flex items-center justify-center bg-gray-50 px-6 py-10">
            <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-xl">
                <div className="mb-8 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <Leaf className="text-green-600" />
                    </div>

                    <h2 className="mt-5 text-3xl font-bold">
                        Create an Account
                    </h2>

                    <p className="mt-2 text-gray-600">
                        Join AgroLink and start exploring smart agriculture.
                    </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>

                    {/* Full Name */}
                    <div>
                        <label className="mb-2 block font-medium">
                            Full Name
                        </label>

                        <input
                            type="text"
                            {...register("name", {
                                required: "Name is required",
                            })}
                            placeholder="Enter your full name"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.name.message}
                            </p>)}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="mb-2 block font-medium">
                            Email Address
                        </label>

                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                            })}
                            placeholder="Enter your email"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.email.message}
                            </p>)}
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="mb-2 block font-medium">
                            Photo URL
                        </label>

                        <input
                            type="url"
                            {...register("photoURL")}
                            placeholder="https://..."
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
                        />
                        {errors.photoURL && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.photoURL.message}
                            </p>)}
                    </div>

                    {/* Role */}
                    <div>
                        <label className="mb-2 block font-medium">
                            Select Role
                        </label>

                        <select
                            {...register("role", {
                                required: "Role is required",
                            })}
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Choose your role
                            </option>

                            <option value="farmer">
                                👨‍🌾 Farmer
                            </option>

                            <option value="student">
                                🎓 Agriculture Student
                            </option>

                            <option value="expert">
                                👨‍🔬 Agricultural Expert
                            </option>

                            <option value="business">
                                🏢 Agribusiness Professional
                            </option>
                        </select>
                        {errors.role && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.role.message}
                            </p>)}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="mb-2 block font-medium">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                {...register("password", {
                                    required: "Password is required",
                                })}
                                placeholder="Create password"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 focus:border-green-600 focus:outline-none"
                            />
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.password.message}
                                </p>)}

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2"
                            >
                                {showPassword ? (
                                    <EyeOff size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="mb-2 block font-medium">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            {...register("confirmPassword", {
                                required: "Confirm your password",
                            })}
                            placeholder="Confirm password"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
                        />
                        {errors.confirmPassword && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
                    >
                        Create Account
                    </button>

                    <p className="text-center text-gray-600">
                        Already have an account?{" "}
                        <Link
                            href="/auth/login"
                            className="font-semibold text-green-600 hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    );
}

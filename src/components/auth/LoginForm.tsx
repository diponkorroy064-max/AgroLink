"use client";
import Link from "next/link";
import { Eye, EyeOff, Leaf } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginFormData } from "@/types/auth";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

    const onSubmit = async (data: LoginFormData) => {
        try {
            console.log("Login Data:", data);

            // Send data to backend
            // const response = await loginUser(data);

            // console.log(response);

            // toast.success("Login Successful!");

            // router.push("/dashboard");
        } catch (error) {
            console.error(error);

            // toast.error("Invalid email or password");
        }
    };


    return (
        <section className="flex items-center justify-center bg-gray-50 p-6">
            <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
                <div className="mb-8 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <Leaf className="text-green-600" />
                    </div>

                    <h2 className="mt-5 text-3xl font-bold text-gray-900">
                        Welcome Back
                    </h2>

                    <p className="mt-2 text-gray-600">
                        Login to continue using AgroLink.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600"
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.email.message}
                            </p>)}
                    </div>

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
                                placeholder="Enter your password"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none transition focus:border-green-600"
                            />
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.password.message}
                                </p>
                            )}

                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                                {showPassword ? (
                                    <EyeOff size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="cursor-pointer" />
                            Remember me
                        </label>

                        <Link
                            href="/forgot-password"
                            className="text-green-600 hover:underline"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
                    >
                        Login
                    </button>

                    <p className="text-center text-gray-600">
                        Do not have an account?{" "}
                        <Link
                            href="/auth/signup"
                            className="font-semibold text-green-600"
                        >
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    );
}

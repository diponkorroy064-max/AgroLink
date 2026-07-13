"use client";

import { useForm } from "react-hook-form";

interface PublishResourceFormData {
    title: string;
    category: string;
    resourceType: string;
    difficulty: string;
    shortDescription: string;
    content: string;
    tags: string;
    language: string;
    visibility: string;
    videoUrl: string;
    author: string;
    institution: string;
}

export default function PublishResourceForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<PublishResourceFormData>();

    const onSubmit = (data: PublishResourceFormData) => {
        console.log(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
        >
            {/* Resource Information */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold">
                    Resource Information
                </h2>

                <div className="grid gap-6 md:grid-cols-2">

                    <div>
                        <label className="mb-2 block font-medium">
                            Resource Title
                        </label>

                        <input
                            type="text"
                            {...register("title", {
                                required: "Title is required",
                            })}
                            placeholder="Enter resource title"
                            className="w-full rounded-xl border p-3 outline-none focus:border-green-600"
                        />

                        <p className="mt-1 text-sm text-red-500">
                            {errors.title?.message}
                        </p>
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Category
                        </label>

                        <select
                            {...register("category", {
                                required: "Category is required",
                            })}
                            className="w-full rounded-xl border p-3 outline-none focus:border-green-600"
                        >
                            <option value="">Select Category</option>
                            <option>Crop Production</option>
                            <option>Soil Science</option>
                            <option>Irrigation</option>
                            <option>Pest Management</option>
                            <option>Livestock</option>
                            <option>Agricultural Technology</option>
                        </select>

                        <p className="mt-1 text-sm text-red-500">
                            {errors.category?.message}
                        </p>
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Resource Type
                        </label>

                        <select
                            {...register("resourceType")}
                            className="w-full rounded-xl border p-3"
                        >
                            <option>Research Paper</option>
                            <option>Guide</option>
                            <option>Tutorial</option>
                            <option>Article</option>
                            <option>Case Study</option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Difficulty Level
                        </label>

                        <select
                            {...register("difficulty")}
                            className="w-full rounded-xl border p-3"
                        >
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                        </select>
                    </div>

                </div>
            </div>

            {/* Description */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold">
                    Resource Content
                </h2>

                <div className="space-y-6">

                    <div>
                        <label className="mb-2 block font-medium">
                            Short Description
                        </label>

                        <textarea
                            rows={3}
                            {...register("shortDescription")}
                            placeholder="Write a short description..."
                            className="w-full rounded-xl border p-3"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Full Content
                        </label>

                        <textarea
                            rows={8}
                            {...register("content")}
                            placeholder="Write your complete resource..."
                            className="w-full rounded-xl border p-3"
                        />
                    </div>

                </div>
            </div>

            {/* Media */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold">
                    Media & Attachments
                </h2>

                <div className="grid gap-6 md:grid-cols-2">

                    <div>
                        <label className="mb-2 block font-medium">
                            Cover Image
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            className="w-full rounded-xl border p-3"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Research PDF
                        </label>

                        <input
                            type="file"
                            accept=".pdf"
                            className="w-full rounded-xl border p-3"
                        />
                    </div>

                </div>

                <div className="mt-6">
                    <label className="mb-2 block font-medium">
                        YouTube Video URL
                    </label>

                    <input
                        type="url"
                        {...register("videoUrl")}
                        placeholder="https://youtube.com/..."
                        className="w-full rounded-xl border p-3"
                    />
                </div>
            </div>

            {/* Additional Information */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold">
                    Additional Information
                </h2>

                <div className="grid gap-6 md:grid-cols-2">

                    <div>
                        <label className="mb-2 block font-medium">
                            Tags
                        </label>

                        <input
                            {...register("tags")}
                            placeholder="Rice, Fertilizer, Organic"
                            className="w-full rounded-xl border p-3"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Language
                        </label>

                        <select
                            {...register("language")}
                            className="w-full rounded-xl border p-3"
                        >
                            <option>English</option>
                            <option>বাংলা</option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Visibility
                        </label>

                        <select
                            {...register("visibility")}
                            className="w-full rounded-xl border p-3"
                        >
                            <option>Public</option>
                            <option>Registered Users</option>
                            <option>Experts Only</option>
                        </select>
                    </div>

                </div>
            </div>

            {/* Author */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold">
                    Author Information
                </h2>

                <div className="grid gap-6 md:grid-cols-2">

                    <div>
                        <label className="mb-2 block font-medium">
                            Author Name
                        </label>

                        <input
                            {...register("author")}
                            placeholder="Dr. John Doe"
                            className="w-full rounded-xl border p-3"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Institution
                        </label>

                        <input
                            {...register("institution")}
                            placeholder="Sher-e-Bangla Agricultural University"
                            className="w-full rounded-xl border p-3"
                        />
                    </div>

                </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4">

                <button
                    type="button"
                    className="rounded-xl border px-6 py-3 font-semibold hover:bg-gray-100"
                >
                    Save Draft
                </button>

                <button
                    type="submit"
                    className="rounded-xl bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                    Publish Resource
                </button>

            </div>
        </form>
    );
}

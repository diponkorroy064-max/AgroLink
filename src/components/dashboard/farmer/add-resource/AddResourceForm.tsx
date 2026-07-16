"use client";
import { useForm } from "react-hook-form";
import { UploadCloud } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface ResourceFormData {
    title: string;
    category: string;
    resourceType: string;
    location: string;
    tags: string;
    description: string;
    content: string;
    youtubeLink?: string;
    image: FileList;
    pdf?: FileList;
}

export default function AddResourceForm() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ResourceFormData>();

    const onSubmit = async (data: ResourceFormData) => {
        try {
            const formData = new FormData();

            formData.append("title", data.title);
            formData.append("category", data.category);
            formData.append("resourceType", data.resourceType);
            formData.append("location", data.location);
            formData.append("tags", data.tags);
            formData.append("description", data.description);
            formData.append("content", data.content);

            if (data.youtubeLink) {
                formData.append("youtubeLink", data.youtubeLink);
            }
            formData.append("image", data.image[0]);
            if (data.pdf?.length) {
                formData.append("pdf", data.pdf[0]);
            }

            const response = await fetch("/api/resources", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                toast.success("Resource published successfully!");

                setTimeout(() => {
                    router.push("/dashboard/farmer/my-resources");
                }, 1200);
            } else {
                toast.error(result.message || "Failed to publish resource.");
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8">
            {/* Basic Information */}
            <div>
                <h2 className="mb-5 text-xl font-semibold">
                    Basic Information
                </h2>

                <div className="grid gap-6 md:grid-cols-2">
                    {/* Title */}
                    <div className="md:col-span-2">
                        <label className="mb-2 block font-medium">
                            Resource Title *
                        </label>

                        <input
                            type="text"
                            placeholder="Enter resource title"
                            {...register("title", {
                                required: "Title is required",
                            })}
                            className="w-full rounded-xl border p-3 outline-none focus:border-green-600" />

                        {errors.title && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.title.message}
                            </p>
                        )}
                    </div>

                    {/* Category */}
                    <div>
                        <label className="mb-2 block font-medium">
                            Category *
                        </label>

                        <select
                            {...register("category", {
                                required: "Category is required",
                            })}
                            className="w-full rounded-xl border p-3 outline-none focus:border-green-600">
                            <option value="">Select Category</option>
                            <option>Crop Production</option>
                            <option>Irrigation</option>
                            <option>Organic Farming</option>
                            <option>Livestock</option>
                            <option>Pest Management</option>
                            <option>Soil Health</option>
                            <option>Agricultural Machinery</option>
                        </select>

                        {errors.category && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.category.message}
                            </p>
                        )}
                    </div>

                    {/* Type */}
                    <div>
                        <label className="mb-2 block font-medium">
                            Resource Type *
                        </label>

                        <select
                            {...register("resourceType", {
                                required: "Resource type is required",
                            })}
                            className="w-full rounded-xl border p-3 outline-none focus:border-green-600">
                            <option value="">Select Type</option>
                            <option>Guide</option>
                            <option>Tutorial</option>
                            <option>Research</option>
                            <option>Video</option>
                            <option>Case Study</option>
                            <option>Tips</option>
                        </select>

                        {errors.resourceType && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.resourceType.message}
                            </p>
                        )}
                    </div>

                    {/* Location */}
                    <div>
                        <label className="mb-2 block font-medium">
                            Location
                        </label>

                        <input
                            type="text"
                            placeholder="Rajshahi"
                            {...register("location")}
                            className="w-full rounded-xl border p-3 outline-none focus:border-green-600"
                        />
                    </div>

                    {/* Tags */}
                    <div>
                        <label className="mb-2 block font-medium">
                            Tags
                        </label>

                        <input
                            type="text"
                            placeholder="Rice, Irrigation, Organic"
                            {...register("tags")}
                            className="w-full rounded-xl border p-3 outline-none focus:border-green-600"
                        />
                    </div>
                </div>
            </div>

            {/* Image Upload-- */}
            <div>
                <h2 className="mb-5 text-xl font-semibold">
                    Cover Image
                </h2>

                <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 p-8 transition hover:border-green-500">
                    <UploadCloud
                        size={40}
                        className="mb-3 text-green-600" />

                    <p className="font-medium">
                        Click to upload image
                    </p>

                    <span className="mt-1 text-sm text-gray-500">
                        JPG, PNG or WEBP
                    </span>

                    <input
                        type="file"
                        accept="image/*"
                        {...register("image", {
                            required: "Image is required",
                        })}
                        className="hidden" />
                </label>

                {errors.image && (
                    <p className="mt-2 text-sm text-red-500">
                        {errors.image.message}
                    </p>
                )}
            </div>

            {/* Description */}
            <div>
                <label className="mb-2 block font-medium">
                    Short Description *
                </label>

                <textarea
                    rows={4}
                    placeholder="Briefly describe this resource..."
                    {...register("description", {
                        required: "Description is required",
                    })}
                    className="w-full rounded-xl border p-3 outline-none focus:border-green-600" />

                {errors.description && (
                    <p className="mt-1 text-sm text-red-500">
                        {errors.description.message}
                    </p>
                )}
            </div>

            {/* Content */}
            <div>
                <label className="mb-2 block font-medium">
                    Detailed Content *
                </label>

                <textarea
                    rows={10}
                    placeholder="Write detailed resource content..."
                    {...register("content", {
                        required: "Content is required",
                    })}
                    className="w-full rounded-xl border p-3 outline-none focus:border-green-600" />

                {errors.content && (
                    <p className="mt-1 text-sm text-red-500">
                        {errors.content.message}
                    </p>
                )}
            </div>

            {/* Optional */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label className="mb-2 block font-medium">
                        YouTube Video (Optional)
                    </label>

                    <input
                        type="url"
                        placeholder="https://youtube.com/..."
                        {...register("youtubeLink")}
                        className="w-full rounded-xl border p-3 outline-none focus:border-green-600"
                    />
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        PDF File (Optional)
                    </label>

                    <input
                        type="file"
                        accept=".pdf"
                        {...register("pdf")}
                        className="w-full rounded-xl border p-3"
                    />
                </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4">
                <button
                    type="reset"
                    className="rounded-xl border px-6 py-3 font-medium hover:bg-gray-100">
                    Reset
                </button>

                <button
                    type="submit"
                    className="rounded-xl bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700">
                    Publish Resource
                </button>
            </div>
        </form>
    );
}

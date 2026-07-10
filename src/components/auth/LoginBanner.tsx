import Image from "next/image";
import { Leaf, BookOpen, Users } from "lucide-react";

export default function LoginBanner() {
    return (
        <section className="relative hidden overflow-hidden bg-linear-to-br from-green-800 via-green-700 to-emerald-600 lg:flex">
            <Image
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
                alt="Agriculture"
                fill
                className="object-cover opacity-20"
            />

            <div className="relative z-10 flex w-full flex-col justify-center px-10 text-white">
                <div className="flex items-center gap-3">
                    <Leaf className="h-10 w-10" />

                    <h1 className="text-4xl font-bold">
                        AgroLink
                    </h1>
                </div>

                <h2 className="mt-8 text-5xl font-bold leading-tight">
                    Welcome Back to the Future of Agriculture
                </h2>

                <p className="mt-4 max-w-lg text-lg leading-8 text-green-100">
                    Discover modern farming techniques, research resources,
                    smart agriculture technologies, and connect with thousands
                    of farmers and agricultural professionals.
                </p>

                <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-4">
                        <BookOpen className="text-green-300" />
                        <span>850+ Agricultural Resources</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <Users className="text-green-300" />
                        <span>12,000+ Active Community Members</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <Leaf className="text-green-300" />
                        <span>30+ Agricultural Categories</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

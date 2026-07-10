import Image from "next/image";
import { Leaf, Users, Sprout } from "lucide-react";

export default function RegisterBanner() {
    return (
        <section className="relative hidden overflow-hidden lg:flex">
            <Image
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399"
                alt="Agriculture"
                fill
                className="object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-br from-green-900/90 via-green-800/80 to-emerald-700/80" />

            <div className="relative z-10 flex flex-col justify-center px-16 text-white">
                <div className="flex items-center gap-3">
                    <Leaf className="h-10 w-10" />
                    <h1 className="text-4xl font-bold">AgroLink</h1>
                </div>

                <h2 className="mt-10 text-5xl font-bold leading-tight">
                    Join Bangladesh`s Smart Agriculture Community
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-green-100">
                    Connect with farmers, students, agricultural experts, and
                    agribusiness professionals. Learn, share, and grow together.
                </p>

                <div className="mt-10 space-y-5">
                    <div className="flex items-center gap-3">
                        <Users className="text-green-300" />
                        <span>12,000+ Community Members</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Sprout className="text-green-300" />
                        <span>850+ Verified Agricultural Resources</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Leaf className="text-green-300" />
                        <span>Modern Farming Knowledge & Innovation</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

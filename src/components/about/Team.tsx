import Image from "next/image";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import { LiaGithub, LiaLinkedin } from "react-icons/lia";
import { Mail } from "lucide-react";

const teamMembers = [
    {
        id: 1,
        name: "Dr. Mahmud Hasan",
        role: "Agricultural Research Lead",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
        id: 2,
        name: "Nusrat Jahan",
        role: "AgriTech Specialist",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
        id: 3,
        name: "Abdul Karim",
        role: "Smart Farming Consultant",
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    {
        id: 4,
        name: "Farhana Akter",
        role: "Community Manager",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
];

export default function Team() {
    return (
        <section className="bg-green-50 py-20">
            <Container>
                <SectionTitle
                    subtitle="Our Team"
                    title="Meet the People Behind AgroLink"
                    description="Our passionate team combines expertise in agriculture, technology, and innovation to empower farmers and build a smarter agricultural future."
                />

                <div className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="relative h-80 overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6 text-center">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    {member.name}
                                </h3>

                                <p className="mt-2 font-medium text-green-600">
                                    {member.role}
                                </p>

                                <div className="mt-6 flex justify-center gap-4">
                                    <button className="rounded-full bg-green-100 p-3 transition hover:bg-green-600 hover:text-white">
                                        <LiaLinkedin size={22} />
                                    </button>

                                    <button className="rounded-full bg-green-100 p-3 transition hover:bg-green-600 hover:text-white">
                                        <LiaGithub size={22} />
                                    </button>

                                    <button className="rounded-full bg-green-100 p-3 transition hover:bg-green-600 hover:text-white">
                                        <Mail size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

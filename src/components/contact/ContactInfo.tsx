import {
    Mail,
    Phone,
    MapPin,
    Clock,
} from "lucide-react";

import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";

const contacts = [
    {
        icon: Phone,
        title: "Phone",
        value: "+880 1700-000000",
    },
    {
        icon: Mail,
        title: "Email",
        value: "support@agrolink.com",
    },
    {
        icon: MapPin,
        title: "Office",
        value: "Dhaka, Bangladesh",
    },
    {
        icon: Clock,
        title: "Working Hours",
        value: "Sun - Thu (9 AM - 6 PM)",
    },
];

export default function ContactInfo() {
    return (
        <section className="py-20">
            <Container>
                <SectionTitle
                    subtitle="Contact Information"
                    title="Get in Touch"
                    description="Choose the best way to reach our team."
                />

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {contacts.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="rounded-3xl border bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                                    <Icon className="text-green-600" />
                                </div>

                                <h3 className="mt-6 text-xl font-bold">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-gray-600">
                                    {item.value}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}

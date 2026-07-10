"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";

const faqs = [
    {
        question: "What is AgroLink?",
        answer:
            "AgroLink is an agricultural technology platform where farmers, students, researchers, and agricultural professionals can discover, share, and explore modern farming resources and technologies.",
    },
    {
        question: "Who can use AgroLink?",
        answer:
            "Anyone interested in agriculture can use AgroLink, including farmers, agriculture students, researchers, extension officers, agribusiness professionals, and farming enthusiasts.",
    },
    {
        question: "Can I share my own agricultural resources?",
        answer:
            "Yes. Registered users can add agricultural resources, farming guides, research articles, technologies, and useful agricultural services through the Add Resource page.",
    },
    {
        question: "Is AgroLink free to use?",
        answer:
            "Yes. Browsing resources is free for everyone. Users only need an account to add or manage their own resources.",
    },
    {
        question: "What types of resources are available?",
        answer:
            "AgroLink includes crop production guides, irrigation systems, farm machinery, pest management, soil health, organic farming, greenhouse technologies, climate-smart agriculture, and much more.",
    },
];


export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20">
            <Container>
                <SectionTitle
                    subtitle="FAQ"
                    title="Frequently Asked Questions"
                    description="Find answers to the most common questions about AgroLink and how the platform supports modern agriculture."
                />

                <div className="mx-auto mt-12 max-w-4xl space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                                className="flex w-full items-center justify-between p-6 text-left"
                            >
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {faq.question}
                                </h3>

                                {openIndex === index ? (
                                    <ChevronUp className="text-green-600" />
                                ) : (
                                    <ChevronDown className="text-green-600" />
                                )}
                            </button>

                            {openIndex === index && (
                                <div className="border-t border-gray-100 px-6 pb-6">
                                    <p className="pt-4 leading-7 text-gray-600">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

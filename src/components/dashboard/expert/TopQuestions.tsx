"use client";

import Link from "next/link";
import {
    MessageCircle,
    Clock3,
    ArrowRight,
    Reply,
} from "lucide-react";

const questions = [
    {
        id: 1,
        question: "What is the best fertilizer schedule for Aman rice?",
        farmer: "Abdul Karim",
        category: "Crop Nutrition",
        time: "15 minutes ago",
        replies: 2,
    },
    {
        id: 2,
        question: "How can I control bacterial leaf blight naturally?",
        farmer: "Mst. Salma Begum",
        category: "Plant Disease",
        time: "1 hour ago",
        replies: 0,
    },
    {
        id: 3,
        question: "Which irrigation method is suitable for tomatoes during summer?",
        farmer: "Rakib Hasan",
        category: "Irrigation",
        time: "3 hours ago",
        replies: 1,
    },
];

export default function TopQuestions() {
    return (
        <section className="rounded-3xl bg-white p-6 shadow-sm">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Community Questions
                    </h2>

                    <p className="mt-1 text-gray-500">
                        Farmers are waiting for your expert advice.
                    </p>
                </div>

                <Link
                    href="/dashboard/expert/questions"
                    className="flex items-center gap-2 font-medium text-green-600 hover:text-green-700"
                >
                    View All
                    <ArrowRight size={18} />
                </Link>
            </div>

            <div className="space-y-5">
                {questions.map((item) => (
                    <div
                        key={item.id}
                        className="rounded-2xl border border-gray-200 p-5 transition-all hover:border-green-500 hover:shadow-md"
                    >
                        <div className="flex items-start gap-4">
                            <div className="rounded-2xl bg-green-100 p-3 text-green-700">
                                <MessageCircle size={26} />
                            </div>

                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {item.question}
                                </h3>

                                <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-500">
                                    <span>
                                        Asked by{" "}
                                        <span className="font-medium text-gray-700">
                                            {item.farmer}
                                        </span>
                                    </span>

                                    <span className="rounded-full bg-green-100 px-3 py-1 text-green-700">
                                        {item.category}
                                    </span>
                                </div>

                                <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <Clock3 size={15} />
                                        {item.time}
                                    </span>

                                    <span className="flex items-center gap-1">
                                        <Reply size={15} />
                                        {item.replies} Replies
                                    </span>
                                </div>
                            </div>

                            <button className="rounded-xl bg-green-600 px-5 py-2 font-medium text-white transition hover:bg-green-700">
                                Answer
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

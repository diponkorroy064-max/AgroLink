"use client";

import Container from "../shared/Container";

export default function SearchFilter() {
    return (
        <section className="py-10">
            <Container>
                <div className="grid gap-4 rounded-2xl border bg-white p-6 shadow md:grid-cols-4">

                    <input
                        type="text"
                        placeholder="Search resources..."
                        className="rounded-xl border px-4 py-3 outline-none focus:border-green-600"
                    />

                    <select className="rounded-xl border px-4 py-3">
                        <option>All Categories</option>
                        <option>Crop Production</option>
                        <option>Irrigation</option>
                        <option>Machinery</option>
                        <option>Organic Farming</option>
                        <option>Soil Management</option>
                    </select>

                    <select className="rounded-xl border px-4 py-3">
                        <option>All Locations</option>
                        <option>Dhaka</option>
                        <option>Rajshahi</option>
                        <option>Khulna</option>
                        <option>Sylhet</option>
                    </select>

                    <select className="rounded-xl border px-4 py-3">
                        <option>Newest</option>
                        <option>Oldest</option>
                        <option>Highest Rated</option>
                    </select>

                </div>
            </Container>
        </section>
    );
}

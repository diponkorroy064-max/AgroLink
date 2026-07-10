import Container from "../shared/Container";
import PrimaryButton from "../shared/PrimaryButton";

const CallToAction = () => {
    return (
        <section className="py-20">
            <Container>
                <div className="overflow-hidden rounded-3xl bg-linear-to-r from-green-700 via-green-600 to-emerald-600 px-8 py-16 text-white shadow-2xl lg:px-20">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
                            🌱 Join Our Growing Community
                        </span>

                        <h2 className="mt-6 text-4xl font-bold md:text-5xl">
                            Grow Smarter with AgroLink
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-green-100">
                            Stay connected with the latest agricultural technologies,
                            farming guides, research articles, and expert insights.
                            Join thousands of farmers, students, and researchers who
                            are building the future of agriculture.
                        </p>

                        {/* Newsletter Form */}
                        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 md:flex-row">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 rounded-xl border border-white/30 bg-white px-5 py-4 text-gray-900 outline-none focus:ring-4 focus:ring-green-300"
                            />

                            <button className="rounded-xl bg-amber-500 px-8 py-4 font-semibold transition hover:bg-amber-600">
                                Subscribe
                            </button>
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            <PrimaryButton
                                href="/explore"
                                className="border-2 bg-white text-green-700! hover:bg-gray-100 hover:text-white! hover:border-white!"
                            >
                                Explore Resources
                            </PrimaryButton>

                            <PrimaryButton
                                href="/register"
                                variant="outline"
                                className="border-white text-white! hover:bg-white! hover:text-green-700!"
                            >
                                Join AgroLink
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CallToAction;

import Image from "next/image";
import Container from "../shared/Container";

export default function ContactHero() {
    return (
        <section className="bg-linear-to-r from-green-800 via-green-700 to-emerald-600 py-24">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="text-white">
                        <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
                            Contact Us
                        </span>

                        <h1 className="mt-6 text-5xl font-bold leading-tight">
                            We`d Love to Hear From You
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-green-100">
                            Have questions about AgroLink? Need assistance or
                            want to collaborate? Reach out to our team we are
                            always happy to help.
                        </p>
                    </div>

                    <Image
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                        alt="Contact AgroLink"
                        width={650}
                        height={450}
                        className="rounded-3xl object-cover shadow-2xl"
                    />
                </div>
            </Container>
        </section>
    );
}

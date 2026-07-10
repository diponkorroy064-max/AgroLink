import Image from "next/image";
import Container from "../shared/Container";

export default function AboutHero() {
    return (
        <section className="bg-linear-to-r from-green-800 via-green-700 to-emerald-600 py-24">
            <Container>
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <div className="text-white">
                        <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
                            About AgroLink
                        </span>

                        <h1 className="mt-6 text-5xl font-bold leading-tight">
                            Empowering Agriculture Through Technology
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-green-100">
                            AgroLink is an agricultural technology platform designed to
                            connect farmers, students, researchers, and agricultural
                            professionals with modern farming knowledge, smart tools, and
                            trusted resources.
                        </p>
                    </div>

                    <Image
                        src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
                        alt="Agriculture"
                        width={650}
                        height={500}
                        className="rounded-3xl object-cover shadow-2xl"
                    />
                </div>
            </Container>
        </section>
    );
}

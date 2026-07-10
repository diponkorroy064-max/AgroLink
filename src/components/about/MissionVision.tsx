import { Target, Eye } from "lucide-react";
import Container from "../shared/Container";

export default function MissionVision() {
    return (
        <section className="bg-green-50 py-20">
            <Container>
                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="rounded-3xl bg-white p-10 shadow-lg">
                        <Target className="mb-6 text-green-600" size={48} />

                        <h2 className="text-3xl font-bold">
                            Our Mission
                        </h2>

                        <p className="mt-5 leading-8 text-gray-600">
                            To empower farmers and agricultural professionals through
                            accessible technology, knowledge sharing, and sustainable
                            agricultural practices.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-10 shadow-lg">
                        <Eye className="mb-6 text-green-600" size={48} />

                        <h2 className="text-3xl font-bold">
                            Our Vision
                        </h2>

                        <p className="mt-5 leading-8 text-gray-600">
                            To become the leading digital platform connecting agriculture,
                            innovation, education, and sustainability worldwide.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}

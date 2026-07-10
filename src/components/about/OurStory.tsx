import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";

export default function OurStory() {
    return (
        <section className="py-20">
            <Container>
                <SectionTitle subtitle="Our Story" title="Connecting Agriculture with Innovation" description="AgroLink was created to bridge the gap between traditional farming and modern agricultural technology."
                />

                <div className="mx-auto max-w-4xl space-y-6 text-center text-lg leading-8 text-gray-600">
                    <p>
                        Agriculture is rapidly evolving with new technologies, research,
                        and sustainable farming practices. However, many farmers still
                        struggle to access reliable information and modern solutions.
                    </p>

                    <p>
                        AgroLink aims to solve this challenge by providing a single
                        platform where agricultural resources, smart farming techniques,
                        research publications, and expert knowledge are available to
                        everyone.
                    </p>
                </div>
            </Container>
        </section>
    );
}

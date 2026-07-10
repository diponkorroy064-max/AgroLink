import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import Team from "@/components/about/Team";
import Impact from "@/components/about/Impact";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <OurStory />
            <MissionVision />
            <CoreValues />
            <Team />
            <Impact />
            <AboutCTA />
        </main>
    );
}

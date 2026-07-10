import ExploreBanner from "@/components/explore/ExploreBanner";
import ResourceGrid from "@/components/explore/ResourceGrid";
import SearchFilter from "@/components/explore/SearchFilter";

export default function ExplorePage() {
    return (
        <main>
            <ExploreBanner></ExploreBanner>
            <SearchFilter></SearchFilter>
            <ResourceGrid></ResourceGrid>
        </main>
    );
}


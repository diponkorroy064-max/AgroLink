import CallToAction from "@/components/home/CallToAction";
import Categories from "@/components/home/Categories";
import FAQ from "@/components/home/FAQ";
import FeaturedResources from "@/components/home/FeaturedResources";
import Hero from "@/components/home/Hero";
import LatestResources from "@/components/home/LatestResources";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";


export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <FeaturedResources></FeaturedResources>
      <Categories></Categories>
      <WhyChooseUs></WhyChooseUs>
      <Statistics></Statistics>
      <LatestResources></LatestResources>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
      <CallToAction></CallToAction>
    </div>
  );
}


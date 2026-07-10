import CallToAction from "@/components/home/CallToAction";
import Categories from "@/components/home/Categories";
import FAQ from "@/components/home/FAQ";
import FeaturedResources from "@/components/home/FeaturedResources";
import Hero from "@/components/home/Hero";
import LatestResources from "@/components/home/LatestResources";
import Navbar from "@/components/home/Navbar";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Footer from "@/components/shared/Footer";


export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <FeaturedResources></FeaturedResources>
      <Categories></Categories>
      <WhyChooseUs></WhyChooseUs>
      <Statistics></Statistics>
      <LatestResources></LatestResources>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </div>
  );
}


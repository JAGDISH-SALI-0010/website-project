import HeroSection from "@/components/home/HeroSection";
import TechMarquee from "@/components/home/TechMarquee";
import FeaturedResources from "@/components/home/FeaturedResources";
import AiAdvisor from "@/components/home/AiAdvisor";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AiAdvisor />
      <TechMarquee />
      <FeaturedResources />
    </>
  );
}
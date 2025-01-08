import Banner from "@/components/Banner";
import BusinessPartners from "@/components/BusinessPartners";
import DigitalGoalsSection from "@/components/DigitalGoalsSection";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PartnerSection from "@/components/PartnerSection";
import ServicesSection from "@/components/ServiceSection";
import SmoothScroll from "@/components/SmoothScroll";
import TeamSection from "@/components/TeamSection";
import { WorkSection } from "@/components/WorkSection";



import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SmoothScroll>

      <HeroSection />
      <WorkSection/>
      <TeamSection/>
      <PartnerSection/>
      <Banner/>
      <BusinessPartners/>
      <DigitalGoalsSection/>
      <ServicesSection/>

      <Feedback/>
      <Footer/>

      </SmoothScroll>
    </div>
  );
}

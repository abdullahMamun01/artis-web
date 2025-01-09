import Banner from "@/components/Banner";
import BusinessPartners from "@/components/BusinessPartners";
import DigitalExperiance from "@/components/DigitalExperiance";
import DigitalGoalsSection from "@/components/DigitalGoalsSection";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PartnerSection from "@/components/PartnerSection";
import ServicesSection from "@/components/ServiceSection";
import SmoothScroll from "@/components/SmoothScroll";
import TeamSection from "@/components/TeamSection";
import { WorkSection } from "@/components/WorkSection";
import fetchFeedback from "@/services/feedback.service";
import fetchHeroData from "@/services/fetchHeeroContent";
import fetchWorks from "@/services/work.service";



import Image from "next/image";
import { Suspense } from "react";

export default async function Home() {
  const works = await fetchWorks();
  const feedbacks = await fetchFeedback();
  const heroContent = await fetchHeroData();
  return (
    <div>
      <SmoothScroll>
        <Suspense fallback={<div>Loading...</div>}>

          <HeroSection heroContent={heroContent} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <WorkSection works={works} />
        </Suspense>
        <TeamSection />
        <PartnerSection />
        <Banner />
        <BusinessPartners />
        <DigitalGoalsSection />
        <DigitalExperiance />
        <ServicesSection />
        <Suspense fallback={<div>Loading...</div>}>
          <Feedback feedbacks={feedbacks} />
        </Suspense>
        <Footer />
      </SmoothScroll>

    </div>
  );
}

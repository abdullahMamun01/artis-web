import HeroSection from "@/components/HeroSection";
import PartnerSection from "@/components/PartnerSection";
import TeamSection from "@/components/TeamSection";
import { WorkSection } from "@/components/WorkSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WorkSection/>
      <TeamSection/>
      <PartnerSection/>
    </div>
  );
}

import { BlurFade } from "@/components/ui/blur-fade";

import SectionContainer from "../components/section-container";
import AboutUsPageHeader from "./components/header";
import MissionVision from "./sections/mission-vision";
import OurStory from "./sections/our-story";
import TeamSection from "./sections/our-team";

export default function PatitasAboutPage() {
  return (
    <div className="container mx-auto flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 pt-42 sm:pt-48 pb-12	sm:pb-20 px-4 sm:px-6 lg:px-8">
      <AboutUsPageHeader />

      <BlurFade delay={1} inView>
        <SectionContainer>
          <MissionVision />
        </SectionContainer>
      </BlurFade>

      <SectionContainer>
        <OurStory />
      </SectionContainer>

      <SectionContainer>
        <TeamSection />
      </SectionContainer>
    </div>
  );
}

import { BlurFade } from "@/components/ui/blur-fade";

import SectionContainer from "../components/section-container";
import AboutUsPageHeader from "./components/header";
import MissionVision from "./sections/mission-vision";
import OurStory from "./sections/our-story";
import TeamSection from "./sections/our-team";

export default function PatitasAboutPage() {
  return (
    <div className="container mx-auto flex flex-col items-center gap-16 pt-48 pb-16">
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

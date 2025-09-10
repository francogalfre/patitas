import SectionContainer from "../components/SectionContainer";

import HeroSection from "./sections/Hero";
import AdoptionStepsSection from "./sections/AdoptionSteps";

export default function PatitasHomePage() {
  return (
    <>
      <SectionContainer classname="pb-96">
        <HeroSection />
      </SectionContainer>
      <SectionContainer>
        <AdoptionStepsSection />
      </SectionContainer>
    </>
  );
}

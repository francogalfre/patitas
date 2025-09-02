import SectionContainer from "./components/SectionContainer";

import HeroSection from "./sections/Hero";

export default function PatitasHomePage() {
  return (
    <>
      <SectionContainer>
        <HeroSection />
      </SectionContainer>
      <SectionContainer>
        <HeroSection />
      </SectionContainer>
    </>
  );
}

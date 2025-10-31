import SectionContainer from "../components/SectionContainer";

import { HeroSection } from "./sections/Hero";
import { FeaturesSection } from "./sections/Features";
import { TestimonialsSection } from "./sections/Testimonials";

export default function PatitasHomePage() {
  return (
    <>
      <HeroSection />
      
      <SectionContainer>
        <FeaturesSection />
      </SectionContainer>

      <TestimonialsSection />
    </>
  );
}

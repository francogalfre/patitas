import SectionContainer from "../components/section-container";

import { CallToActionSection } from "./sections/cta-section";
import { FAQSection } from "./sections/faq-section";
import { FeaturesSection } from "./sections/features-section";
import { HeroSection } from "./sections/hero-section";
import { TestimonialsSection } from "./sections/testimonials-section";

export default function PatitasHomePage() {
  return (
    <>
      <HeroSection />

      <SectionContainer classname="pt-12">
        <FeaturesSection />
      </SectionContainer>

      <TestimonialsSection />

      <SectionContainer>
        <FAQSection />
      </SectionContainer>

      <SectionContainer>
        <CallToActionSection />
      </SectionContainer>
    </>
  );
}

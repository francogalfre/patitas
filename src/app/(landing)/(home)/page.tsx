import SectionContainer from "../components/SectionContainer";

import { HeroSection } from "./sections/Hero";
import { FeaturesSection } from "./sections/Features";
import { TestimonialsSection } from "./sections/Testimonials";
import { FAQSection} from "./sections/FAQs";
import { CallToActionSection } from "./sections/CallToAction";

export default function PatitasHomePage() {
  return (
    <>
      <HeroSection />
      
      <SectionContainer>
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

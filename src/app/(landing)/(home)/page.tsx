import SectionContainer from "../components/SectionContainer";

import { HeroSection } from "./sections/Hero";
import { FeaturesSection } from "./sections/Features";
import { FAQSection } from "./sections/FAQs";
import { CallToActionSection } from "./sections/CallToAction";
import { TestimonialsSection } from "./sections/Testimonials";

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

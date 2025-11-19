import SectionContainer from "../components/SectionContainer";
import { CallToActionSection } from "./sections/CallToAction";
import { FAQSection } from "./sections/FAQs";
import { FeaturesSection } from "./sections/Features";
import { HeroSection } from "./sections/Hero";
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

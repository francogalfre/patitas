import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import FaqList from "../faqs/faq-list";

interface FaqItem {
	question: string;
	answer: string;
}

interface FAQSectionProps {
	badge?: string;
	heading?: string;
	description?: string;
	faqs: Array<FaqItem>;
}

export const Faq = ({
	badge = "FAQ",
	heading = "Common Questions & Answers",
	description = "Find out all the essential details about our platform and how it can serve your needs.",
	faqs,
}: FAQSectionProps) => {
	return (
		<section>
			<div className="container">
				<div className="text-center">
					<BlurFade className="w-fit mx-auto" delay={0.2} inView>
						<Badge className="text-md px-4 py-1 font-medium font-raleway bg-primary/70 mb-4">
							{badge}
						</Badge>
					</BlurFade>
					<div className="flex gap-4 flex-col mt-4">
						<BlurFade delay={0.4} inView>
							<h2 className="font-poppins text-3xl font-medium tracking-tight sm:max-w-5xl sm:text-5xl leading-14">
								{heading}
							</h2>
						</BlurFade>
						<BlurFade delay={0.6} inView>
							<p className="text-md max-w-[600px] sm:max-w-5xl font-raleway text-muted-foreground sm:text-xl">
								{description}
							</p>
						</BlurFade>
					</div>
				</div>

				<FaqList faqs={faqs} />
			</div>
		</section>
	);
};

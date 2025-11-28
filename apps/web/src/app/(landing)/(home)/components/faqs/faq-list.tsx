import { BlurFade } from "@/components/ui/blur-fade";

interface FaqItem {
	question: string;
	answer: string;
}

type FaqListProps = {
	faqs: FaqItem[];
};

const FaqList = ({ faqs }: FaqListProps) => {
	return (
		<div className="mx-auto mt-18 max-w-5xl flex flex-col items-center">
			{faqs.map((faq, index) => (
				<BlurFade
					key={faq.question}
					delay={0.8 + 0.2 * index}
					inView
					className="mb-8 mt-4 flex gap-6"
				>
					<span className="flex size-7 shrink-0 items-center justify-center rounded-sm font-serif bg-primary text-lg text-white/80">
						{index + 1}
					</span>
					<div>
						<div className="mb-2 flex items-center justify-between">
							<h3 className="font-poppins text-3xl font-medium tracking-tight sm:max-w-4xl sm:text-xl">
								{faq.question}
							</h3>
						</div>
						<p className="text-md max-w-[600px] sm:max-w-4xl font-raleway text-muted-foreground sm:text-md">
							{faq.answer}
						</p>
					</div>
				</BlurFade>
			))}
		</div>
	);
};

export default FaqList;

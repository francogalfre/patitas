import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

import { BlurFade } from "@/components/ui/blur-fade";

interface Feature {
	title: string;
	description: string;
}

interface FeaturesSectionProps {
	features: Array<Feature>;
	badge: string;
	title: string;
	description: string;
}

function Feature({
	features,
	badge,
	title,
	description,
}: FeaturesSectionProps) {
	return (
		<section className="w-full lg:py-16">
			<div className="container mx-auto">
				<header className="flex gap-4 py-10 lg:py-18 flex-col items-start">
					<BlurFade delay={0.2} inView>
						<Badge className="text-md px-4 py-1 font-medium font-raleway bg-primary/70 mb-4">
							{badge}
						</Badge>
					</BlurFade>
					<div className="flex gap-4 flex-col">
						<BlurFade delay={0.4} inView>
							<h2 className="font-poppins text-3xl font-medium tracking-tight sm:max-w-6xl sm:text-5xl leading-14">
								{title}
							</h2>
						</BlurFade>
						<BlurFade delay={0.6} inView>
							<p className="text-md max-w-[600px] sm:max-w-6xl font-raleway text-muted-foreground sm:text-xl">
								{description}
							</p>
						</BlurFade>
					</div>
				</header>

				<div className="w-full">
					<ul className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
						{features.map((feature, index) => (
							<BlurFade delay={0.8 + 0.2 * index} inView key={feature.title}>
								<li className="w-full">
									<article className="flex flex-row gap-6 items-start">
										<Check aria-hidden className="w-6 h-6 mt-2 text-primary" />
										<div className="flex flex-col gap-1">
											<h3 className="text-lg font-medium font-poppins">
												{feature.title}
											</h3>
											<p className="text-muted-foreground text-md font-raleway">
												{feature.description}
											</p>
										</div>
									</article>
								</li>
							</BlurFade>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

export { Feature };

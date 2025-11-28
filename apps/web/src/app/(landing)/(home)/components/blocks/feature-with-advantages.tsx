import { Badge } from "@/components/ui/badge";

import { BlurFade } from "@/components/ui/blur-fade";
import FeaturesList from "@/app/(landing)/(home)/components/features/features-list";

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
					<FeaturesList features={features} />
				</div>
			</div>
		</section>
	);
}

export { Feature };

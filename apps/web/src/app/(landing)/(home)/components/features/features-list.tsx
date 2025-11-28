import { BlurFade } from "@/components/ui/blur-fade";
import { Check } from "lucide-react";

type Feature = {
	title: string;
	description: string;
};

type FeatureListProps = {
	features: Feature[];
};

const FeaturesList = ({ features }: FeatureListProps) => {
	return (
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
	);
};

export default FeaturesList;

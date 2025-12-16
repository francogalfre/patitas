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
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
      {features.map((feature, index) => (
        <BlurFade delay={0.8 + 0.2 * index} inView key={feature.title}>
          <li className="w-full">
            <article className="flex flex-row gap-4 sm:gap-6 items-start">
              <Check
                aria-hidden
                className="w-5 h-5 sm:w-6 sm:h-6 mt-1 sm:mt-2 text-primary shrink-0"
              />
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="text-base sm:text-lg font-medium font-poppins">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground font-raleway leading-relaxed">
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

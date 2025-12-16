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
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 sm:gap-6 py-8 sm:py-10 lg:py-14">
          <BlurFade delay={0.2} inView>
            <Badge className="text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 font-medium font-raleway bg-primary/70 w-fit">
              {badge}
            </Badge>
          </BlurFade>

          <div className="flex flex-col gap-3 sm:gap-4">
            <BlurFade delay={0.4} inView>
              <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
                {title}
              </h2>
            </BlurFade>

            <BlurFade delay={0.6} inView>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl font-raleway text-muted-foreground leading-relaxed">
                {description}
              </p>
            </BlurFade>
          </div>
        </header>

        <div className="w-full mt-6 sm:mt-8 lg:mt-10">
          <FeaturesList features={features} />
        </div>
      </div>
    </section>
  );
}

export { Feature };

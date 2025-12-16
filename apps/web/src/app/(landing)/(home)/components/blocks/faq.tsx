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
  heading = "Preguntas Frecuentes",
  description = "Encuentra respuestas a las dudas más comunes sobre nuestra plataforma.",
  faqs,
}: FAQSectionProps) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <BlurFade className="w-fit mx-auto" delay={0.2} inView>
            <Badge className="text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 font-medium font-raleway bg-primary/70">
              {badge}
            </Badge>
          </BlurFade>

          <div className="flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-6">
            <BlurFade delay={0.4} inView>
              <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight px-4">
                {heading}
              </h2>
            </BlurFade>

            <BlurFade delay={0.6} inView>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-raleway text-muted-foreground leading-relaxed px-4">
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

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
    <div className="mx-auto mt-10 sm:mt-14 lg:mt-18 max-w-4xl px-4">
      {faqs.map((faq, index) => (
        <BlurFade
          key={faq.question}
          delay={0.8 + 0.2 * index}
          inView
          className="mb-6 sm:mb-8 flex gap-4 sm:gap-6 border-b border-gray-200 pb-6 sm:pb-8 last:border-0"
        >
          <span className="flex size-6 sm:size-7 shrink-0 items-center justify-center rounded-sm font-serif bg-primary text-sm sm:text-base text-white/90">
            {index + 1}
          </span>

          <div className="flex-1 min-w-0">
            <h3 className="font-poppins text-base sm:text-lg md:text-xl font-medium tracking-tight mb-2 sm:mb-3">
              {faq.question}
            </h3>
            <p className="text-sm sm:text-base font-raleway text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </BlurFade>
      ))}
    </div>
  );
};

export default FaqList;

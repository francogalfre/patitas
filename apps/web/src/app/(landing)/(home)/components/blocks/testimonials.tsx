"use client";

import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import { BlurFade } from "@/components/ui/blur-fade";
import TestimonialsCarousel from "../testimonials/testimonials-carousel";

type Testimonial = {
  title: string;
  description: string;
  user: string;
  avatarUrl: string;
  avatarFallback: string;
};

type TestimonialsProps = {
  title: string;
  description: string;
  testimonials: Testimonial[];
};

function Testimonials({ title, description, testimonials }: TestimonialsProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const interval = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);

    return () => clearTimeout(interval);
  }, [api, current]);

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex flex-col gap-10 sm:gap-12 lg:gap-14">
        <header className="max-w-4xl mx-auto px-4 text-start space-y-3 sm:space-y-4">
          <BlurFade delay={0.4} inView>
            <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
              {title}
            </h2>
          </BlurFade>

          <BlurFade delay={0.6} inView>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-raleway text-muted-foreground leading-relaxed">
              {description}
            </p>
          </BlurFade>
        </header>

        <BlurFade delay={0.8} inView>
          <TestimonialsCarousel testimonials={testimonials} setApi={setApi} />
        </BlurFade>
      </div>
    </section>
  );
}

export { Testimonials };

"use client";

import { Heart, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";

interface CallToActionSectionProps {
  title: string;
  description: string;
}

function CTA({ title, description }: CallToActionSectionProps) {
  return (
    <BlurFade delay={0.4} inView className="w-full py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col text-center bg-primary/90 rounded-xl sm:rounded-2xl p-6 sm:p-10 lg:p-14 gap-6 sm:gap-8 items-center">
          <div className="flex flex-col gap-3 sm:gap-4 max-w-3xl">
            <h3 className="font-serif text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight leading-tight">
              {title}
            </h3>

            <p className="text-sm sm:text-base md:text-lg font-raleway text-white/90 leading-relaxed px-4">
              {description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Link href="/pets" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto py-5 sm:py-6 px-6 sm:px-8 gap-2 rounded-lg text-sm sm:text-base font-raleway  transition-colors"
              >
                Explorar mascotas <Heart className="w-4 h-4" />
              </Button>
            </Link>

            <Link href="/new-pet" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto text-white bg-secondary/90 py-5 sm:py-6 px-6 sm:px-8 gap-2 rounded-lg text-sm sm:text-base hover:bg-secondary/80 transition-colors font-raleway"
              >
                Publicar mascota <Plus className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </BlurFade>
  );
}

export { CTA };

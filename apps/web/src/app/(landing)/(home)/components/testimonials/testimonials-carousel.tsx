import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import { User } from "lucide-react";
import type React from "react";

type Testimonial = {
  title: string;
  description: string;
  user: string;
  avatarUrl: string;
  avatarFallback: string;
};

type TestimonialsCarouselProps = {
  testimonials: Testimonial[];
  setApi: React.Dispatch<React.SetStateAction<CarouselApi | undefined>>;
};

const TestimonialsCarousel = ({
  testimonials,
  setApi,
}: TestimonialsCarouselProps) => {
  return (
    <div className="w-screen -mx-[calc(50vw-50%)]">
      <Carousel setApi={setApi} className="w-screen">
        <CarouselContent>
          {testimonials.map(
            ({ title, description, user, avatarUrl, avatarFallback }) => (
              <CarouselItem
                className="basis-[85%] sm:basis-3/4 lg:basis-1/2"
                key={`${title}-${user}`}
              >
                <article className="bg-border rounded-lg sm:rounded-xl p-4 sm:p-6 min-h-[280px] sm:min-h-[320px] lg:aspect-[16/7] flex flex-col justify-between">
                  <header className="bg-muted w-fit rounded-full p-1.5 sm:p-2">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 stroke-1" />
                  </header>

                  <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-0">
                    <main className="flex flex-col gap-2 sm:gap-3">
                      <h3 className="text-lg sm:text-xl lg:text-2xl tracking-tight font-poppins leading-tight">
                        {title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground font-raleway max-w-xl leading-relaxed line-clamp-3 sm:line-clamp-none">
                        {description}
                      </p>
                    </main>

                    <footer className="flex items-center gap-2 text-sm sm:text-base">
                      <span className="text-muted-foreground">Por</span>
                      <Avatar className="h-5 w-5 sm:h-6 sm:w-6">
                        <AvatarImage src={avatarUrl} />
                        <AvatarFallback>{avatarFallback}</AvatarFallback>
                      </Avatar>
                      <span className="truncate">{user}</span>
                    </footer>
                  </div>
                </article>
              </CarouselItem>
            )
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TestimonialsCarousel;

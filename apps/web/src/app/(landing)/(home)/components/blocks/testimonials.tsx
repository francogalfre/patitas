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
		if (!api) {
			return;
		}

		setTimeout(() => {
			if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
				setCurrent(0);
				api.scrollTo(0);
			} else {
				api.scrollNext();
				setCurrent(current + 1);
			}
		}, 4000);
	}, [api, current]);

	return (
		<section className="w-full py-20 lg:py-40">
			<div className="container mx-auto flex flex-col gap-14">
				<header className="max-w-5xl mx-auto px-4 space-y-4">
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
				</header>

				<BlurFade delay={0.8} inView>
					<TestimonialsCarousel testimonials={testimonials} setApi={setApi} />
				</BlurFade>
			</div>
		</section>
	);
}

export { Testimonials };

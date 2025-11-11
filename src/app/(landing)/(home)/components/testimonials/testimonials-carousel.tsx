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
							<CarouselItem className="lg:basis-1/2" key={`${title}-${user}`}>
								<article className="bg-border rounded-xl p-6 aspect-[16/7] flex flex-col justify-between">
									<header className="bg-muted w-fit rounded-full p-2">
										<User className="w-6 h-6 stroke-1" />
									</header>

									<div className="space-y-6">
										<main className="flex flex-col gap-3">
											<h3 className="text-2xl tracking-tight font-poppins">
												{title}
											</h3>
											<p className="text-muted-foreground font-raleway max-w-xl text-base">
												{description}
											</p>
										</main>

										<footer className="flex items-center gap-2 text-md">
											<span className="text-muted-foreground">By</span>
											<Avatar className="h-6 w-6">
												<AvatarImage src={avatarUrl} />
												<AvatarFallback>{avatarFallback}</AvatarFallback>
											</Avatar>
											<span>{user}</span>
										</footer>
									</div>
								</article>
							</CarouselItem>
						),
					)}
				</CarouselContent>
			</Carousel>
		</div>
	);
};

export default TestimonialsCarousel;

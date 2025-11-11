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
		<BlurFade delay={0.4} inView className="w-full py-20 lg:py-16">
			<div className="container mx-auto flex flex-col text-center bg-primary/90 rounded-2xl p-4 lg:p-14 gap-6 items-center">
				<div className="flex flex-col gap-4">
					<h3 className="font-serif text-white text-3xl font-normal tracking-tighter sm:text-5xl leading-14">
						{title}
					</h3>

					<p className="text-md font-raleway text-white/90 sm:text-lg">
						{description}
					</p>
				</div>
				<div className="flex flex-row gap-4">
					<Link href={"/pets"}>
						<Button
							size={"lg"}
							variant="outline"
							className="py-6 gap-2 rounded-lg text-md font-raleway"
						>
							Explorar Mascotas <Heart className="w-4 h-4" />
						</Button>
					</Link>
					<Link href={"/new-pet"}>
						<Button
							size={"lg"}
							variant="secondary"
							className="text-white bg-secondary/90 py-6 gap-2 rounded-lg text-md hover:bg-secondary/80 transition-color font-raleway"
						>
							Publicar Mascota <Plus className="w-4 h-4" />
						</Button>
					</Link>
				</div>
			</div>
		</BlurFade>
	);
}

export { CTA };

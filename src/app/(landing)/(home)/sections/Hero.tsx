"use client";

import Image from "next/image";

import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";

import HeroButtons from "../components/hero/hero-buttons";

export const HeroSection = () => {
	return (
		<div
			className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center z-0"
			style={{ backgroundImage: "url('/landing/hero-background.webp')" }}
		>
			<div className="flex w-full mx-auto z-10 text-center justify-center">
				<header className="space-y-6">
					<BlurFade delay={0.2}>
						<Image
							priority={true}
							src={"/patitas/logo1000.webp"}
							width={100}
							height={100}
							alt="Logo de Patitas"
							className="justify-self-center hover:scale-105 hover:rotate-12 transition-transform duration-300"
						/>
					</BlurFade>

					<div className="space-y-6 pt-6">
						<BlurFade delay={0.4}>
							<h1 className="text-6xl font-serif text-white font-normal tracking-tighter">
								Encuentra a tu nuevo mejor amigo
							</h1>
						</BlurFade>
						<BlurFade delay={0.6}>
							<p className="text-lg text-pretty text-white/90 w-3xl justify-self-center">
								Conectamos mascotas necesitadas con familias amorosas en toda
								Argentina. Cada adopción es una segunda oportunidad para ser
								feliz.
							</p>
						</BlurFade>
					</div>

					<BlurFade delay={0.8}>
						<HeroButtons />
					</BlurFade>
				</header>
			</div>

			<motion.div
				initial={{ backdropFilter: "blur(20px)" }}
				animate={{ backdropFilter: "blur(0px)" }}
				transition={{ duration: 0.4, ease: "easeOut" }}
				className="absolute inset-0 bg-black/50 backdrop-brightness-90 h-screen"
			/>
		</div>
	);
};

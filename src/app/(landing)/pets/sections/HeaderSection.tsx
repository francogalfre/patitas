"use client";

import { motion } from "motion/react";

import { SearchInput } from "../components/search";

interface HeaderSectionProps {
	search: string;
	setSearch: (value: string) => void;
}

export const HeaderSection = ({ search, setSearch }: HeaderSectionProps) => {
	return (
		<header className="w-full flex flex-col justify-center text-center gap-8 z-20 pb-20">
			<div className="space-y-6">
				<motion.h2
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						type: "spring",
						duration: 1.5,
						delay: 0.1,
						stiffness: 200,
					}}
					className="text-5xl items-center font-serif font-normal tracking-tighter"
				>
					Encuentra a tu nuevo mejor amigo
				</motion.h2>
				<motion.p
					className="text-lg text-pretty text-black/90 w-3xl justify-self-center"
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						type: "spring",
						duration: 1.5,
						delay: 0.2,
						stiffness: 200,
					}}
				>
					Explora cientos de mascotas esperando un hogar lleno de amor. Usa
					nuestros filtros para encontrar la compañía perfecta para ti.
				</motion.p>
			</div>

			<SearchInput search={search} setSearch={setSearch} />
		</header>
	);
};

"use client";

import { motion } from "motion/react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const SuccessModal = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 50, type: "spring" }}
			className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
		>
			<div className="bg-white max-w-lg w-full mx-4 p-12 rounded-xl text-center space-y-6">
				<Image
					className="justify-self-center"
					src="/patitas/logo1000.webp"
					width={100}
					height={100}
					alt="Logo de Patitas"
				/>
				<div className="space-y-4">
					<div className="space-y-2">
						<h2 className="text-3xl text-primary font-semibold">
							¡Felicidades!
						</h2>
						<h4 className="text-lg">Tu mascota ya fue cargada en Patitas.</h4>
					</div>
					<p>
						¡Gracias por ayudar a que más peluditos encuentren una familia! 🐶
					</p>
				</div>

				<Link href={"/"}>
					<Button size={"lg"} className="text-md py-6 w-full">
						Volver al inicio
					</Button>
				</Link>
			</div>
		</motion.div>
	);
};

export default SuccessModal;

import Link from "next/link";

const links = [
	{
		title: "Inicio",
		href: "/",
	},
	{
		title: "Encontrar Mascotas",
		href: "/pets",
	},
	{
		title: "Nuestras Guías",
		href: "/guides",
	},
	{
		title: "Quienes somos",
		href: "/about-us",
	},
];

export default function Footer() {
	return (
		<footer className="bg-primary py-8">
			<div className="mx-auto max-w-5xl px-6">
				<Link
					href="#hero"
					aria-label="Ir al inicio"
					className="mx-auto block size-fit"
				>
					<img
						src="/patitas/logo1000.webp"
						alt="Logo de Patitas"
						className="size-18"
					/>
				</Link>

				<div className="space-y-4 mt-8">
					<div className="flex flex-wrap justify-center gap-6">
						{links.map((link, index) => (
							<Link
								key={index}
								href={link.href}
								className="text-white hover:text-white/80 block duration-150 text-lg"
							>
								<span>{link.title}</span>
							</Link>
						))}
					</div>

					<span className="text-white block text-center text-sm">
						© {new Date().getFullYear()} Patitas, todos los derechos reservados
					</span>
				</div>
			</div>
		</footer>
	);
}

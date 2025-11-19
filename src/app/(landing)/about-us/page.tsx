import { Heart, Home, Sparkles, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionContainer from "../components/SectionContainer";

const PatitasAboutPage = () => {
	return (
		<div className="min-h-screen pt-48">
			<section className="relative overflow-hidden min-h-screen px-6 pt-10 text-black">
				<SectionContainer>
					<div className="grid gap-12 md:grid-cols-2 md:items-center">
						<div>
							<h1 className="mb-6 text-5xl font-medium leading-tight">
								Conectando{" "}
								<span className="text-primary font-bold">Corazones</span>{" "}
								Creando <span className="text-primary font-bold">Hogares</span>
							</h1>
							<p className="mb-8 text-xl leading-relaxed text-black">
								Una plataforma donde cada mascota encuentra su familia y cada
								familia encuentra su compañero perfecto.
							</p>
							<Link href={"/pets"}>
								<Button
									size={"lg"}
									className="text-white py-6 text-md rounded-sm hover:bg-primary/80 transition-color"
								>
									Explorar Mascotas
								</Button>
							</Link>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<div className="h-48 overflow-hidden rounded-2xl bg-black/20 backdrop-blur-sm"></div>
							<div className="h-48 overflow-hidden rounded-2xl bg-black/20 backdrop-blur-sm"></div>
							<div className="h-48 overflow-hidden rounded-2xl bg-black/20 backdrop-blur-sm"></div>
							<div className="h-48 overflow-hidden rounded-2xl bg-black/20 backdrop-blur-sm"></div>
						</div>
					</div>
				</SectionContainer>
			</section>

			<SectionContainer>
				<h2 className="mb-12 text-center text-4xl font-bold text-[#171717]">
					Cómo Funciona Patitas
				</h2>
				<p className="mx-auto mb-16 max-w-2xl text-center text-lg text-gray-600">
					Conectamos tecnología con empatía para crear un proceso de adopción
					transparente y significativo que beneficia tanto a las mascotas como a
					sus futuros dueños.
				</p>
				<div className="grid gap-8 md:grid-cols-3">
					<div className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md">
						<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
							<Heart className="h-7 w-7 text-[#a18ed1]" />
						</div>
						<h3 className="mb-3 text-xl font-bold text-[#171717]">
							Publica con Amor
						</h3>
						<p className="leading-relaxed text-gray-600">
							Comparte la historia de tu mascota de forma sencilla. Cada perfil
							ayuda a encontrar el hogar perfecto.
						</p>
					</div>
					<div className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md">
						<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
							<Users className="h-7 w-7 text-[#a18ed1]" />
						</div>
						<h3 className="mb-3 text-xl font-bold text-[#171717]">
							Conecta y Conoce
						</h3>
						<p className="leading-relaxed text-gray-600">
							Explora perfiles, conoce historias y encuentra a tu futuro
							compañero de vida.
						</p>
					</div>
					<div className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md">
						<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
							<Home className="h-7 w-7 text-[#a18ed1]" />
						</div>
						<h3 className="mb-3 text-xl font-bold text-[#171717]">
							Crea un Hogar
						</h3>
						<p className="leading-relaxed text-gray-600">
							Completa el proceso de adopción y comienza una nueva historia
							juntos.
						</p>
					</div>
				</div>
			</SectionContainer>

			<section className="bg-primary pt-20 text-white">
				<SectionContainer>
					<div className="mx-auto max-w-4xl text-center">
						<div className="mb-6 flex justify-center">
							<Sparkles className="h-12 w-12" />
						</div>
						<h2 className="mb-8 text-4xl font-bold">Nuestros Valores</h2>
						<p className="mb-12 text-xl leading-relaxed text-purple-50">
							Creemos en la transparencia, el respeto y el bienestar animal.
							Cada adopción es una promesa de amor y cuidado que tomamos en
							serio.
						</p>
						<div className="grid gap-6 md:grid-cols-2">
							<div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
								<h3 className="mb-2 text-xl font-bold">Compromiso</h3>
								<p className="text-purple-50">
									Con el bienestar de cada mascota y la felicidad de cada
									familia.
								</p>
							</div>
							<div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
								<h3 className="mb-2 text-xl font-bold">Transparencia</h3>
								<p className="text-purple-50">
									Información clara y honesta en cada paso del proceso.
								</p>
							</div>
							<div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
								<h3 className="mb-2 text-xl font-bold">Empatía</h3>
								<p className="text-purple-50">
									Entendemos que adoptar es una decisión importante y emocional.
								</p>
							</div>
							<div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
								<h3 className="mb-2 text-xl font-bold">Comunidad</h3>
								<p className="text-purple-50">
									Construimos una red de personas que aman a los animales.
								</p>
							</div>
						</div>
					</div>
				</SectionContainer>
			</section>

			<section className="py-20 max-w-7xl w-full full mx-auto">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="mb-6 text-4xl font-semibold text-[#171717]">
						¿Listo para Hacer la Diferencia?
					</h2>
					<p className="mb-8 text-xl text-gray-600">
						Únete a nuestra comunidad y ayuda a crear historias de amor entre
						mascotas y familias.
					</p>
					<Link href={"/pets"}>
						<Button
							size={"lg"}
							className="text-white py-8 rounded-full text-md hover:bg-primary/80 transition-color max-w-lg w-full"
						>
							Explorar Mascotas
						</Button>
					</Link>
				</div>
			</section>
		</div>
	);
};

export default PatitasAboutPage;

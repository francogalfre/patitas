import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";

function GuidesPageHeader() {
	return (
		<header className="text-center space-y-4">
			<BlurFade delay={0.2} inView className="max-w-4xl w-full">
				<h2 className="text-5xl items-center font-serif font-normal tracking-tighter">
					Guías Esenciales para Padres de Mascotas
				</h2>
			</BlurFade>
			<BlurFade delay={0.4} inView>
				<p className="text-lg text-pretty text-black/90 w-4xl justify-self-center">
					Descubre consejos de expertos y profundiza tus conocimientos sobre
					nutrición, comportamiento y salud preventiva para asegurar la
					felicidad y el bienestar de tu compañero.
				</p>
			</BlurFade>
			<BlurFade delay={0.8}>
				<Button className="w-full sm:w-auto" asChild>
					<a href={"/adopcion"} rel="noopener">
						Ver Mascotas en Adopción
						<ArrowRight className="ml-2 size-4" />
					</a>
				</Button>
			</BlurFade>
		</header>
	);
}

export default GuidesPageHeader;

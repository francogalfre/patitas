import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";

import Link from "next/link";

const HeroButtons = () => {
	return (
		<div className="space-x-3 flex gap-3 justify-center">
			<MagneticButton>
				<Link href={"/pets"}>
					<Button
						size={"lg"}
						className="text-white py-6 text-md rounded-lg hover:bg-primary/80 transition-color"
					>
						Explorar Mascotas
					</Button>
				</Link>
			</MagneticButton>

			<Link href={"/new-pet"}>
				<Button
					size={"lg"}
					variant="secondary"
					className="text-white bg-secondary/90 py-6 rounded-lg text-md hover:bg-secondary/80 transition-color"
				>
					Publicar nueva mascota
				</Button>
			</Link>
		</div>
	);
};

export default HeroButtons;

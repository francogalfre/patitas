import type { Pet } from "@/db/schema/pet";

export default function PetBasicInfo({ pet }: { pet: Pet }) {
	return (
		<div className="mb-12 text-lg font-raleway sm:flex sm:items-center sm:gap-10">
			<p className="font-normal">
				Especie: <span className="capitalize font-medium">{pet.species}</span>
			</p>
			<p className="font-normal">
				Tamaño: <span className="capitalize font-medium">{pet.size}</span>
			</p>
			<p className="font-normal">
				Género: <span className="capitalize font-medium">{pet.gender}</span>
			</p>
		</div>
	);
}

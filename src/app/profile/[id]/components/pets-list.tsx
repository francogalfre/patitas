import { PetCard } from "@/components/pet-card";
import type { Pet } from "@/db/schema/pet";

interface PetsListProps {
	isOwner: boolean;
	pets: Pet[];
}

const PetsList = ({ isOwner, pets }: PetsListProps) => {
	return (
		<section>
			<h3 className="text-2xl font-medium font-poppins mb-6">
				{isOwner ? "Tus mascotas" : "Mascotas publicadas"}
			</h3>
			<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{pets.length <= 0 ? (
					<div className="col-span-full flex justify-center items-center">
						<h2 className="text-center text-lg font-raleway">
							El usuario no tiene mascotas publicadas
						</h2>
					</div>
				) : (
					pets.map((pet) => (
						<PetCard
							key={pet.id}
							id={pet.id}
							imageUrl={pet.photos[0]}
							name={pet.name}
							location={pet.location_city}
							specie={pet.species}
							gender={pet.gender}
							is_adopted={pet.is_adopted}
						/>
					))
				)}
			</div>
		</section>
	);
};

export default PetsList;

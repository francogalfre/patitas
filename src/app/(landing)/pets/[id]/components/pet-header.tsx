import { MapPin } from "lucide-react";
import type { Pet } from "@/db/schema/pet";

export default function PetHeader({ pet }: { pet: Pet }) {
	return (
		<div className="space-y-3">
			<h1 className="text-xl font-semibold tracking-tighter text-gray-900 sm:text-6xl dark:text-white">
				{pet.name}
			</h1>

			<span className="text-xl font-medium flex items-center gap-2">
				<MapPin size={18} />
				{pet.location_city}
			</span>
		</div>
	);
}

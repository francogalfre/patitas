import { MapPin } from "lucide-react";
import type { Pet } from "@/types/pet";

export default function PetHeader({ pet }: { pet: Pet }) {
  return (
    <div className="space-y-3">
      <h1 className="text-6xl font-semibold tracking-tighter text-gray-900 sm:text-6xl dark:text-white">
        {pet.name}
      </h1>

      <aside
        aria-label={`Información de localización y publicación de ${pet.name}`}
        className="flex items-end w-full justify-between"
      >
        <address
          className="not-italic flex items-center gap-2 text-xl font-medium"
          aria-label="Ubicación"
        >
          <MapPin size={18} aria-hidden="true" />
          <span>{pet.location_city}</span>
        </address>
        <span>
          Fecha de publicación: {new Date(pet.createdAt).toLocaleDateString()}
        </span>
      </aside>
    </div>
  );
}

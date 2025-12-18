import { MapPin } from "lucide-react";
import type { Pet } from "@/types/pet";

export default function PetHeader({ pet }: { pet: Pet }) {
  return (
    <div className="space-y-2 sm:space-y-3">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tighter text-gray-900 dark:text-white">
        {pet.name}
      </h1>

      <aside
        aria-label={`Información de localización y publicación de ${pet.name}`}
        className="flex flex-col sm:flex-row sm:items-end w-full sm:justify-between gap-1 sm:gap-2"
      >
        <address
          className="not-italic flex items-center gap-2 text-base sm:text-lg lg:text-xl font-medium"
          aria-label="Ubicación"
        >
          <MapPin
            size={16}
            className="sm:w-[18px] sm:h-[18px]"
            aria-hidden="true"
          />
          <span>{pet.location_city}</span>
        </address>
        <span className="text-sm sm:text-base text-gray-600">
          Publicado: {new Date(pet.createdAt).toLocaleDateString()}
        </span>
      </aside>
    </div>
  );
}

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { Pet } from "@/db/schema/pet";

import Link from "next/link";

const PetCard = ({ id, photos, name, gender, age, location_city }: Pet) => {
  return (
    <Link key={id} href={`/mascotas/${id}`} className="cursor-pointer">
      <DirectionAwareHover imageUrl={photos?.[0]}>
        <h2 className="text-xl">{name}</h2>
        <p className="capitalize">
          {gender} - {age}
        </p>
        <p className="text-gray-200">{location_city}</p>
      </DirectionAwareHover>
    </Link>
  );
};

export default PetCard;

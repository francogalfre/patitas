import React from "react";

import { getPetById } from "../actions/getPets";

import Image from "next/image";

const PatitasMascotDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const pet = await getPetById({ id });

  return (
    <main>
      <div>
        {pet.photos?.map((photo, index) => (
          <Image src={photo} alt={`${pet.name} foto numero ${index}`} />
        ))}
      </div>
      <h2>{pet.name}</h2>
      <p>{pet.description}</p>
    </main>
  );
};

export default PatitasMascotDetailsPage;

import React from "react";

import { getPetById } from "../actions/getPets";

import { Button } from "@/components/ui/button";
import { getUserById } from "@/db/queries/getUserById";

import Image from "next/image";

const PatitasMascotDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const pet = await getPetById({ id });
  const owner = await getUserById(pet.owner_id)

  const whatsappLink = `https://wa.me/${pet.contact_phone}`;
  const mailtoLink = `https://mail.google.com/mail/?view=cm&to=${pet.contact_email}`;

  return (
    <section className="min-h-screen py-12 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="mx-auto space-y-4">
            <Image
              className="w-full rounded-lg size-96"
              src={pet.photos?.[0]}
              alt={`${pet.name} imagen principal`}
              width={1200}
              height={1200}
            />

            {
              pet.photos?.length > 1 && (
                <div className="flex w-full justify-between gap-4">
                  {
                    pet.photos.map((photo, index) => (
                      <Image
                        key={photo + index}
                        className="w-full rounded-lg size-32 object-cover"
                        src={photo}
                        alt={`${pet.name} imagen ${index + 1}`}
                        width={300}
                        height={300}
                      />
                    ))
                  }
                </div>
              )
            }
          </div>

          <div className="mt-6 space-y-6 sm:mt-8 lg:mt-0">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-6xl dark:text-white">
                {pet.name}
              </h1>

              <span className="text-xl font-medium">{pet.location_city}</span>
            </div>

            <p className="mb-6 text-gray-500 dark:text-gray-400">
              {pet.description}
            </p>

            <div className="mt-4 sm:flex sm:items-center sm:gap-10">
                <p>Especie: <span>{pet.species}</span></p>
                <p>Tamaño: <span>{pet.size}</span></p>
                <p>Genero: <span>{pet.gender}</span></p>
            </div>

            <div className="mt-6 sm:mt-8 sm:flex sm:items-center sm:gap-4">
              <Button 
                asChild 
                size={"lg"} 
                className="text-lg px-12 py-6"                
              >
                <a href={mailtoLink} target="_blank">Quiero adoptarlo</a>
              </Button>
              <Button asChild variant={"secondary"} size={"lg"} className="text-lg text-white px-12 py-6">
                <a href={whatsappLink} target="_blank">Llamar</a>
              </Button>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl">
              <h2>Información del dueño</h2>
              <p>Nombre: {owner?.name}</p>
              <p>Email: {owner?.email}</p>
            </div>

            {
              pet.special_care && (
                <>
                    <hr />

                    <h2>Cuidados especiales</h2>
                    <p className="text-gray-500 dark:text-gray-400">
                      {pet.special_care}
                    </p>
                </>
              )
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatitasMascotDetailsPage;

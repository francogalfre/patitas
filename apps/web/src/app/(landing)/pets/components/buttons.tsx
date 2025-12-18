"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { deletePet } from "../actions/deletePet";
import { setPetAdopted } from "../actions/setPetAdopted";
import { useRouter } from "next/navigation";

interface ButtonsProps {
  isOwner: boolean;
  isAdopted: boolean;
  mail: string;
  whatsapp: string;
  petId: string;
  photos: string[];
}

const Buttons = ({
  isOwner,
  isAdopted,
  mail,
  whatsapp,
  petId,
}: ButtonsProps) => {
  const [isDeleting, startDeleteTransition] = useTransition();
  const [isAdopting, startAdoptTransition] = useTransition();

  const router = useRouter();

  if (!isOwner && !isAdopted) {
    return (
      <div className="w-full mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
        <Button asChild className="text-md px-8 py-4 sm:py-6 w-full flex-1">
          <a href={mail} target="_blank" rel="noopener noreferrer">
            Quiero adoptarlo
          </a>
        </Button>

        <Button
          asChild
          variant="secondary"
          className="text-md text-white px-8 py-4 sm:py-6 w-full flex-1"
        >
          <a href={whatsapp} target="_blank" rel="noopener noreferrer">
            Contactar por WhatsApp
          </a>
        </Button>
      </div>
    );
  }

  const handleDelete = () => {
    startDeleteTransition(async () => {
      const result = await deletePet({ id: petId });

      if (result.success) {
        router.push("/pets");
      }
    });
  };

  const handleSetPetAdopted = () => {
    startAdoptTransition(async () => {
      const result = await setPetAdopted({ id: petId });

      if (result.success) {
        router.refresh();
      }
    });
  };

  if (isOwner) {
    return (
      <div className="w-full mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
        {!isAdopted && (
          <Button
            onClick={handleSetPetAdopted}
            className="text-md px-8 py-4 sm:py-6 w-full flex-1"
            disabled={isAdopting}
          >
            {isAdopting ? "Marcando..." : "Marcar como adoptado"}
          </Button>
        )}

        <Button
          onClick={handleDelete}
          disabled={isDeleting}
          variant={"secondary"}
          className="text-md text-white px-8 py-4 sm:py-6 w-full flex-1"
        >
          {isDeleting ? "Eliminando..." : "Eliminar mascota"}
        </Button>
      </div>
    );
  }
};

export default Buttons;

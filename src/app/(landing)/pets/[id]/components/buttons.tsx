"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { deletePetAction } from "../actions/deletePetAction";
import { setPetAdoptedAction } from "../actions/setPetAdoptedAction";

interface ButtonsProps {
	isOwner: boolean;
	isAdopted: boolean;
	mail: string;
	whatsapp: string;
	petId: string;
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

	if (!isOwner && !isAdopted) {
		return (
			<div className="w-full mt-6 sm:mt-8 sm:flex sm:items-center sm:gap-4">
				<Button asChild size="lg" className="text-lg px-12 py-6 w-full">
					<a href={mail} target="_blank" rel="noopener noreferrer">
						Quiero adoptarlo
					</a>
				</Button>

				<Button
					asChild
					variant="secondary"
					size="lg"
					className="text-lg text-white px-12 py-6 w-full"
				>
					<a href={whatsapp} target="_blank" rel="noopener noreferrer">
						Contactar por WhatsApp
					</a>
				</Button>
			</div>
		);
	}

	const handleDelete = () => {
		startDeleteTransition(() => {
			deletePetAction(petId);
		});
	};

	const handleSetPetAdopted = () => {
		startAdoptTransition(() => {
			setPetAdoptedAction(petId);
		});
	};

	if (isOwner) {
		return (
			<div className="mt-6 sm:mt-12 flex flex-col sm:flex-row sm:items-center sm:gap-4">
				{!isAdopted && (
					<Button
						onClick={handleSetPetAdopted}
						size="lg"
						className="text-lg px-12 py-6 cursor-pointer w-full sm:flex-1"
						disabled={isAdopting}
					>
						{isAdopting ? "Marcando..." : "Marcar como adoptado"}
					</Button>
				)}

				<Button
					onClick={handleDelete}
					disabled={isDeleting}
					variant={"secondary"}
					size={"lg"}
					className="text-lg text-white px-12 py-6 w-full cursor-pointer sm:flex-1"
				>
					{isDeleting ? "Eliminando..." : "Eliminar mascota"}
				</Button>
			</div>
		);
	}
};

export default Buttons;

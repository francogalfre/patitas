"use client";

import { PencilLine } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import type { User } from "@/db/schema/user";
import EditProfileDialogForm from "./dialog-form";

const EditProfileDialog = ({ user }: { user: User }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<form>
				<DialogTrigger asChild>
					<Button asChild>
						<Button className="flex items-center gap-2 text-md">
							<PencilLine className="size-4" />
							Editar Perfil
						</Button>
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px] lg:max-w-[540px] space-y-4">
					<DialogHeader>
						<DialogTitle className="font-poppins text-xl font-medium">
							Editar tu perfil
						</DialogTitle>
						<DialogDescription className="font-raleway text-md font-medium text-gray-600">
							Haz cambios en tu perfil aquí. Haz clic en guardar cuando hayas
							terminado.
						</DialogDescription>
					</DialogHeader>

					<EditProfileDialogForm user={user} setIsOpen={setIsOpen} />
				</DialogContent>
			</form>
		</Dialog>
	);
};

export default EditProfileDialog;

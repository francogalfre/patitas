"use client";

import { DialogClose } from "@radix-ui/react-dialog";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import type { User } from "@/db/schema/user";
import { deleteUserProfile } from "../../actions/deleteProfile";

const DeleteProfileDialog = ({ user }: { user: User }) => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	const handleDeleteProfile = async () => {
		const { success } = await deleteUserProfile(user.id);

		if (success) {
			setIsOpen(false);
			router.push("/");
		}
	};

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<form>
				<DialogTrigger asChild>
					<Button asChild>
						<Button
							variant="destructive"
							className="flex items-center gap-2 w-full text-md bg-red-500 hover:bg-red-600 duration-200"
						>
							<Trash className="size-4" />
							Eliminar Cuenta
						</Button>
					</Button>
				</DialogTrigger>

				<DialogContent className="sm:max-w-[425px] lg:max-w-[540px] space-y-4">
					<DialogHeader>
						<DialogTitle className="font-poppins text-xl font-medium">
							Eliminar tu perfil
						</DialogTitle>
						<DialogDescription className="font-raleway text-md font-medium text-gray-600">
							Esta acción es permanente y no podrás recuperar tu información más
							adelante. ¿Estás seguro de que querés continuar?
						</DialogDescription>
					</DialogHeader>

					<DialogFooter>
						<DialogClose asChild>
							<Button variant="outline" size={"lg"} className="text-md">
								Cancelar
							</Button>
						</DialogClose>
						<Button
							type="button"
							onClick={handleDeleteProfile}
							size={"lg"}
							className="text-md"
						>
							Eliminar cuenta
						</Button>
					</DialogFooter>
				</DialogContent>
			</form>
		</Dialog>
	);
};

export default DeleteProfileDialog;

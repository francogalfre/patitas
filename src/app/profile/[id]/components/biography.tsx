"use client";

import { Textarea } from "@/components/ui/textarea";
import { PencilLine } from "lucide-react";

import type { User } from "@/db/schema/user";
import { type FormEvent, useEffect, useState } from "react";

interface BiographyProps {
	isOwner: boolean;
	user: User;
}

const Biography = ({ isOwner, user }: BiographyProps) => {
	const [isEditing, setIsEditing] = useState(false);
	const [bioText, setBioText] = useState(user.bio);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const bio = formData.get("bio");

		setBioText(bio);
	};

	useEffect(() => alert("Cambiando la descripcion"), [bioText]);

	return (
		<div>
			{!isOwner ? (
				<p>{user?.bio}</p>
			) : (
				<div>
					{isEditing ? (
						<form onSubmit={handleSubmit} className="space-y-2">
							<Textarea
								name="bio"
								className="resize-none min-h-32 max-h-32 border-gray-400 w-full break-words whitespace-pre-wrap placeholder:text-md text-md font-raleway text-gray-600"
								maxLength={200}
								wrap="soft"
							/>
							<button
								type="button"
								onClick={() => {
									setIsEditing(false);
								}}
								className="px-4 py-2 bg-blue-600 text-white rounded-lg"
							>
								Guardar
							</button>
						</form>
					) : (
						<p className="text-gray-600 flex items-center gap-2 text-md">
							{user.bio}
							<button
								type="button"
								className="cursor-pointer"
								onClick={() => isOwner && setIsEditing(true)}
							>
								<PencilLine size={18} />
							</button>
						</p>
					)}
				</div>
			)}
		</div>
	);
};

export default Biography;

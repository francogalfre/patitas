"use client";

import { useState, useTransition } from "react";

import { PencilLine } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import type { User } from "@/types/user";
import { updateProfileBio } from "../actions/updateProfileBio";

interface BiographyProps {
  isOwner: boolean;
  user: User;
}

export default function Biography({ isOwner, user }: BiographyProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [bioLenght, setBioLenght] = useState(user.bio.length);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (formData: FormData) => {
    const bio = formData.get("bio") as string;

    startTransition(async () => {
      const { success, profile } = await updateProfileBio({
        bio,
        id: user.id,
      });

      if (success) {
        setIsEditing(false);
      }
    });
  };

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBioLenght(e.target.value.length);
  };

  return (
    <div>
      {!isOwner ? (
        <p className="text-gray-600 text-md">{user.bio}</p>
      ) : (
        <div>
          {isEditing ? (
            <form action={handleSubmit} className="space-y-4">
              <Textarea
                onChange={handleBioChange}
                name="bio"
                defaultValue={user.bio}
                className="resize-none min-h-24 max-h-24 border-gray-400 w-full wrap-break-words whitespace-pre-wrap font-raleway text-gray-600"
                maxLength={300}
                minLength={20}
                wrap="soft"
                disabled={isPending}
              />
              <p className="text-sm text-gray-500">
                ({bioLenght}/300) Minimo 20 caracteres
              </p>

              <Button
                type="submit"
                disabled={isPending}
                className="px-4 py-2 bg-primary text-md text-white rounded-lg disabled:opacity-50"
              >
                {isPending ? "Guardando..." : "Guardar"}
              </Button>
              <Button
                type="button"
                variant={"outline"}
                onClick={() => setIsEditing(false)}
                className="ml-2 px-4 py-2 rounded-lg"
              >
                Cancelar
              </Button>
            </form>
          ) : (
            <p className="text-gray-600 text-md">
              {user.bio}
              <button
                type="button"
                className="cursor-pointer ml-2"
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
}

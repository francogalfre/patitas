import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { FormTextInput } from "@/components/text-input";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { updateProfile } from "../../actions/updateProfile";

import type { User } from "@/types/user";
import type { Dispatch, SetStateAction } from "react";
import { type FieldError, useForm } from "react-hook-form";
import { type EditProfileData, EditProfileFormSchema } from "../../schema";

const EditProfileDialogForm = ({
  user,
  setIsOpen,
}: {
  user: User;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isLoading },
  } = useForm({
    resolver: zodResolver(EditProfileFormSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: EditProfileData) => {
    const { success } = await updateProfile({
      id: user.id,
      fullName: data.fullName,
      email: data.email,
    });

    if (success) {
      setIsOpen(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <FormTextInput
        label="Nombre y Apellido"
        defaultValue={user.name}
        registration={{ ...register("fullName") }}
        error={errors.fullName as FieldError}
      />

      <FormTextInput
        type="email"
        label="Correo electronico"
        defaultValue={user.email}
        registration={{ ...register("email") }}
        error={errors.email as FieldError}
      />

      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline" size={"lg"} className="text-md">
            Cancelar
          </Button>
        </DialogClose>
        <Button
          type="submit"
          size="lg"
          className="text-md"
          disabled={isSubmitting || isLoading}
        >
          Guardar cambios
        </Button>
      </DialogFooter>
    </form>
  );
};

export default EditProfileDialogForm;

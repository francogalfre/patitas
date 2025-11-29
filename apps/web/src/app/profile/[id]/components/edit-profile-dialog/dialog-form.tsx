import { zodResolver } from "@hookform/resolvers/zod";
import type { Dispatch, SetStateAction } from "react";
import { type FieldError, useForm } from "react-hook-form";
import { FormTextInput } from "@/components/text-input";
import { Button } from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import type { User } from "@/db/schema/user";
import { updateUserProfile } from "../../actions/updateProfile";
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
    const { success } = await updateUserProfile(
      user.id,
      data.fullName,
      data.email
    );

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
          size={"lg"}
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

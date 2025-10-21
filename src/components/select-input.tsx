import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

import { Control, Controller, FieldError } from "react-hook-form";
import { PetRegistrationFormType } from "@/app/new-pet/schema";

interface FormSelectInputProps {
  label?: string;
  options: readonly string[];
  placeholder?: string;
  name: keyof PetRegistrationFormType; // Usamos una key del schema
  control: Control<PetRegistrationFormType>;
  isRequired?: boolean;
}

export const FormSelectInput = ({
  label,
  options,
  placeholder,
  name,
  control,
  isRequired = false,
}: FormSelectInputProps) => {
  return (
    <div className="space-y-2">
      <Label className="text-md font-normal text-gray-700 gap-1">
        {label}
        {isRequired && <span className="text-red-500 text-4xl">*</span>}
      </Label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value as string}
              required={isRequired}
            >
              <SelectTrigger
                className={`capitalize max-w-xs w-full border-gray-400 min-h-12 ${error && "border-red-500"}`}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent className="capitalize">
                {options.map((option: string, index: number) => (
                  <SelectItem key={index} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {error && <p className="text-red-500 text-sm">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};

import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

import { type Control, Controller, FieldError } from "react-hook-form";
import type { PetRegistrationFormType } from "@/app/new-pet/schema";

interface FormSelectInputProps {
  label?: string;
  options: readonly string[];
  placeholder?: string;
  name: keyof PetRegistrationFormType;
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
    <div className="space-y-1">
      <Label className="text-sm sm:text-md font-normal text-gray-700 flex items-center gap-1">
        {label}
        {isRequired && <span className="text-red-500 text-3xl">*</span>}
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
                className={`capitalize md:max-w-xs w-full border-gray-400 md:text-sm h-12 ${error && "border-red-500"}`}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent className="capitalize text-sm sm:text-base">
                {options.map((option: string, index: number) => (
                  <SelectItem
                    key={index}
                    value={option}
                    className="text-xs sm:text-base h-12 border-gray-400"
                  >
                    <p className="text-sm sm:text-sm">{option}</p>
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

"use client";

import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Checkbox } from "./ui/checkbox";

interface FormCheckboxInputProps {
  label?: string;
  registration: UseFormRegisterReturn;
  error: FieldError;
  isRequired?: boolean;
}

export const FormCheckboxInput = ({
  label,
  registration,
  error,
  isRequired = false,
}: FormCheckboxInputProps) => {
  return (
    <div className="flex items-center gap-4 sm:gap-4 w-fit">
      <Checkbox
        type="checkbox"
        className={`${error && "border-red-500"} border-gray-400 shadow-none w-4 h-4 sm:w-5 sm:h-5`}
        required={isRequired}
        {...registration}
        id={label || registration.name}
      />

      {label && (
        <Label
          htmlFor={label || registration.name}
          className={`${error && "text-red-500"} text-sm sm:text-md font-normal text-gray-700 flex items-center gap-1`}
        >
          {label}
        </Label>
      )}
    </div>
  );
};

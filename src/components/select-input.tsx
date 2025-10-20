import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormSelectInputProps {
  label?: string;
  options: readonly string[];
  registration: UseFormRegisterReturn;
  placeholder?: string;
  error: FieldError;
  isRequired?: boolean;
}

export const FormSelectInput = ({
  label,
  options,
  placeholder,
  registration,
  error,
  isRequired = false,
}: FormSelectInputProps) => {
  return (
    <div className="space-y-2">
      <Label className="text-md font-normal text-gray-700 gap-1">
        {label}
        {isRequired && <span className="text-red-500 text-4xl">*</span>}
      </Label>

      <Select {...registration}>
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
    </div>
  );
};

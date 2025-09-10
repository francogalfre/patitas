import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface AuthFormInputProps {
  label: string;
  registration: UseFormRegisterReturn;
  type?: string;
  placeholder?: string;
  error: FieldError;
}

const AuthFormInput = ({
  label,
  registration,
  type = "text",
  placeholder,
  error,
}: AuthFormInputProps) => {
  return (
    <div className="space-y-3">
      <Label htmlFor="name" className="text-md font-normal text-gray-700">
        {label}
      </Label>
      <Input
        type={type}
        {...registration}
        className={`h-12 border-gray-400 ${error ? "border-red-500" : ""}`}
        placeholder={placeholder}
      />

      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default AuthFormInput;

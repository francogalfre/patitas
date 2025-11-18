"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Eye, EyeOff } from "lucide-react";

import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormTextInputProps {
	label?: string;
	registration: UseFormRegisterReturn;
	type?: string;
	placeholder?: string;
	error: FieldError;
	isRequired?: boolean;
}

export const FormTextInput = ({
	label,
	registration,
	type = "text",
	placeholder,
	error,
	isRequired = false,
}: FormTextInputProps) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	return (
		<div className="space-y-3">
			{label && (
				<Label className="text-md font-normal text-gray-700 flex items-center gap-1">
					{label}
					{isRequired && <span className="text-red-500 text-4xl">*</span>}
				</Label>
			)}

			{type !== "password" ? (
				<Input
					id={label}
					type={type}
					{...registration}
					className={`h-12 border-gray-400 ${error ? "border-red-500" : ""}`}
					placeholder={placeholder}
					required={isRequired}
				/>
			) : (
				<div className="relative">
					<Input
						required={isRequired}
						id={label}
						type={isPasswordVisible ? "text" : "password"}
						{...registration}
						className={`h-12 border-gray-400 ${error ? "border-red-500" : ""}`}
						placeholder={placeholder}
					/>
					<button
						type="button"
						onClick={() => setIsPasswordVisible(!isPasswordVisible)}
						className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 "
					>
						{isPasswordVisible ? (
							<EyeOff className="size-5" />
						) : (
							<Eye className="size-5" />
						)}
					</button>
				</div>
			)}

			{error && <p className="text-red-500 text-sm">{error.message}</p>}
		</div>
	);
};

"use client";

import React from "react";

import { Label } from "@/components/ui/label";
import { Checkbox } from "./ui/checkbox";

import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

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
		<div className="flex items-center gap-4 w-fit">
			<Checkbox
				className={`${error && "border-red-500"} border-gray-400 shadow-none`}
				required={isRequired}
				{...registration}
				id={registration.name}
			/>

			{label && (
				<Label
					htmlFor={registration.name}
					className={`${error && "text-red-500"} text-md font-normal text-gray-700 flex items-center gap-1`}
				>
					{label}
				</Label>
			)}
		</div>
	);
};

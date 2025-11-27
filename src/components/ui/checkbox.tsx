"use client";

import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Checkbox({ className, checked, ...props }: CheckboxProps) {
	return (
		<label
			className={cn(
				"relative inline-flex items-center cursor-pointer",
				props.disabled && "opacity-50 cursor-not-allowed",
			)}
		>
			<input
				type="checkbox"
				checked={checked}
				className="peer sr-only"
				{...props}
			/>

			<span
				className={cn(
					"size-4 rounded-[4px] border shadow-xs shrink-0 transition-all",
					"border-input dark:bg-input/30",
					"peer-checked:bg-primary peer-checked:border-primary peer-checked:text-primary-foreground",
					"outline-none peer-focus-visible:ring-[3px] peer-focus-visible:ring-ring/50 peer-focus-visible:border-ring",
					"peer-aria-invalid:ring-destructive/20 peer-aria-invalid:border-destructive",
					className,
				)}
			>
				<span className="grid place-content-center text-white">
					{checked && <CheckIcon className="size-3.5" />}
				</span>
			</span>
		</label>
	);
}

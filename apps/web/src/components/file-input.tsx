"use client";

import type React from "react";
import { useState } from "react";

import { Label } from "@/components/ui/label";
import Image from "next/image";

import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
interface FormFileInputProps {
  label?: string;
  registration: UseFormRegisterReturn;
  error: FieldError;
  isRequired?: boolean;
  maxFiles: number;
}

export const FormFileInput = ({
  label,
  registration,
  error,
  isRequired = false,
  maxFiles,
}: FormFileInputProps) => {
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [localError, setLocalError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (files.length > maxFiles) {
      setLocalError(`Solo puedes subir hasta ${maxFiles} archivos`);
      e.target.value = "";
      setPreviewImages([]);
      return;
    }

    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
    setLocalError("");
  };

  return (
    <div className="space-y-2 sm:space-y-4">
      {label && (
        <Label className="text-md font-normal text-gray-700 flex items-center gap-1">
          {label}
          {isRequired && <span className="text-red-500 text-3xl">*</span>}
        </Label>
      )}

      <div className="flex items-center justify-center w-full">
        <label
          htmlFor={registration.name}
          className={`flex flex-col items-center justify-center w-full h-48 sm:h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition ${(error || localError) && "border-red-500"}`}
        >
          <div className="flex flex-col items-center justify-center pt-4 pb-5 sm:pt-5 sm:pb-6 px-4">
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-xs sm:text-sm text-gray-500 text-center">
              <span className="font-semibold">Click para subir</span> o arrastra
              y suelta
            </p>
            <p className="text-xs text-gray-500">PNG, JPG, JPEG o WEBP</p>
          </div>

          <input
            {...registration}
            id={registration.name}
            type="file"
            accept="image/png, image/jpeg, image/jpg, image/webp"
            className="sr-only"
            multiple
            required={isRequired}
            onChange={(e) => {
              registration.onChange(e);
              handleChange(e);
            }}
          />
        </label>
      </div>

      {localError && <p className="text-sm text-red-500 mt-1">{localError}</p>}
      {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}

      {previewImages.length > 0 && (
        <div className="w-full flex flex-wrap gap-2 sm:gap-3">
          {previewImages.map((image) => (
            <Image
              src={image}
              key={image}
              alt="Preview"
              width={100}
              height={100}
              className="rounded-lg object-cover border w-16 h-16 sm:w-[100px] sm:h-[100px]"
            />
          ))}
        </div>
      )}
    </div>
  );
};

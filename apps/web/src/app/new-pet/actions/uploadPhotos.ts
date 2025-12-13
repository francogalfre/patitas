"use server";

import { supabaseStorage } from "@/db/supabase/storage/client";

export interface UploadResult {
  success: boolean;
  urls?: string[];
  error?: string;
}

export async function uploadPetPhotos(
  id: string,
  photos: FileList
): Promise<UploadResult> {
  const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
  const invalidFiles = Array.from(photos).filter(
    (photo) => !allowedTypes.includes(photo.type)
  );

  if (invalidFiles.length > 0) {
    return {
      success: false,
      error: "Formato de imagen no permitido",
    };
  }

  if (photos.length === 0) {
    return {
      success: false,
      error: "Sin imagenes para subir",
    };
  }

  if (photos.length > 3) {
    return {
      success: false,
      error: "El maximo es de 3 imagenes",
    };
  }

  const uploadUrls = [];

  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];

    const fileExt = photo.name.split(".").pop() || "jpg";
    const fileName = `${id}_${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error } = await supabaseStorage.storage
      .from("pet-pics")
      .upload(filePath, photo);

    if (error) {
      return {
        success: false,
        error: "Error al guardar la imagen",
      };
    }

    const { data } = supabaseStorage.storage
      .from("pet-pics")
      .getPublicUrl(filePath);
    uploadUrls.push(data.publicUrl);
  }

  return {
    success: true,
    urls: uploadUrls,
  };
}

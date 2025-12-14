import { supabaseStorage } from "@/config/supabase";

export const getRandomAvatar = async (): Promise<string> => {
  const totalAvatars = 4;

  const randomNumber = Math.floor(Math.random() * totalAvatars) + 1;
  const randomAvatarName = `patitas_default_avatar_${randomNumber}`;

  const { data } = supabaseStorage.storage
    .from("avatars")
    .getPublicUrl(randomAvatarName);

  if (!data || !data.publicUrl) {
    console.error(`Error al obtener la URL pública para: ${randomAvatarName}`);
    return "URL_DE_FALLBACK_O_NULO";
  }

  return data.publicUrl;
};

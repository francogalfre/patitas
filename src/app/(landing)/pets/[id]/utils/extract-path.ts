export function extractFilePath(publicUrl: string) {
  const parts = publicUrl.split("/pet-pics");

  return parts[1].slice(1);
}

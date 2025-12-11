export function extractFilePath(publicUrl: string): string {
  if (!publicUrl) {
    return "";
  }

  const separator = "/pet-pics";

  if (!publicUrl.includes(separator)) {
    console.error(`La URL no contiene el separador esperado: ${separator}`);
    return "";
  }

  const parts = publicUrl.split(separator);

  if (!parts[1]) {
    return "";
  }

  return parts[1].slice(1);
}

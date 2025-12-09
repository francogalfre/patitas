export type PetSpecies = "perro" | "gato" | "conejo" | "ave" | "otro";
export type PetAge = "cachorro" | "joven" | "adulto" | "senior";
export type PetSize = "pequeño" | "mediano" | "grande";
export type PetGender = "macho" | "hembra";

export interface Pet {
  id: string;
  owner_id: string;
  name: string;
  species: PetSpecies;
  gender: PetGender;
  age: PetAge;
  size: PetSize;
  description: string;
  good_with_kids: boolean;
  good_with_dogs: boolean;
  good_with_cats: boolean;
  is_vaccinated: boolean;
  is_sterilized: boolean;
  special_care: string | null;
  photos: string[];
  contact_name: string;
  contact_phone: string;
  contact_email: string;
  location_city: string;
  is_adopted: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface CreatePetDTO {
  name: string;
  species: PetSpecies;
  gender: PetGender;
  age: PetAge;
  size: PetSize;
  description: string;
  good_with_kids: boolean;
  good_with_dogs: boolean;
  good_with_cats: boolean;
  is_vaccinated: boolean;
  is_sterilized: boolean;
  special_care?: string | null;
  photos: string[];
  contact_name: string;
  contact_phone: string;
  contact_email: string;
  location_city: string;
}

export interface UpdatePetDTO {
  name?: string;
  species?: PetSpecies;
  gender?: PetGender;
  age?: PetAge;
  size?: PetSize;
  description?: string;
  good_with_kids?: boolean;
  good_with_dogs?: boolean;
  good_with_cats?: boolean;
  is_vaccinated?: boolean;
  is_sterilized?: boolean;
  special_care?: string | null;
  photos?: string[];
  contact_name?: string;
  contact_phone?: string;
  contact_email?: string;
  location_city?: string;
  is_adopted?: boolean;
}

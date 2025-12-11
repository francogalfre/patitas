export interface User {
  id: string;
  name: string;
  email: string;
  bio: string;
  image: string;
  location: string | null;
  is_shelter: boolean;
  emailVerified: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface CreateUserDTO {
  id: string;
  name: string;
  email: string;
  bio?: string;
  image?: string;
  location?: string | null;
  is_shelter?: boolean;
  emailVerified?: boolean;
}

export interface UpdateUserDTO {
  name?: string;
  email?: string;
  bio?: string;
  image?: string;
  location?: string | null;
  is_shelter?: boolean;
  emailVerified?: boolean;
}

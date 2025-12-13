import { ArrowLeft } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getPetsByOwnerId } from "@/db/queries/getPetsByOwnerId";
import { getUserById } from "./actions/getUserById";
import { auth } from "@/lib/auth";

import Biography from "./components/biography";
import PetsList from "./components/pets-list";

import ProfileHeader from "./components/profile-header";

const PatitasProfilePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const { profile, pets, success, message } = await getUserById({ id: id });

  if (!success || !profile) {
    console.error("Error al cargar perfil:", message);
    return notFound();
  }

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const isOwner = session?.session?.userId === profile.id;

  return (
    <main className="min-h-screen my-20 w-full">
      <div className="max-w-4xl mx-auto px-6 py-8 bg-white rounded-xl space-y-8">
        <Link
          href={"/"}
          className="flex items-center gap-2 text-md font-medium"
        >
          <ArrowLeft size={18} />
          Volver al incio
        </Link>

        <ProfileHeader isOwner={isOwner} user={profile} />

        <hr />

        <Biography isOwner={isOwner} user={profile} />

        <hr />

        <PetsList isOwner={isOwner} pets={pets} />
      </div>
    </main>
  );
};

export default PatitasProfilePage;

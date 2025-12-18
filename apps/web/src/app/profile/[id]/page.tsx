import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";

import { getUserById } from "./actions/getUserById";

import Biography from "./components/biography";
import PetsList from "./components/pets-list";

import ProfileHeader from "./components/profile-header";
import { getApiSession } from "@/actions/getApiSession";

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

  const { session } = await getApiSession();

  const isOwner = session?.userId === profile.id;

  return (
    <main className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-white rounded-lg sm:rounded-xl space-y-6 sm:space-y-8">
        <Link
          href={"/"}
          className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base font-medium hover:text-primary transition-colors"
        >
          <ArrowLeft className="size-4 sm:size-[18px]" />
          Volver al inicio
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

import { getPetsByOwnerId } from "@/db/queries/getPetsByOwnerId";
import { getUserById } from "@/db/queries/getUserById";

import { headers } from "next/headers";
import { auth } from "@/lib/auth";

import { CircleCheck, PencilLine, ArrowLeft } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PatitasProfilePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const user = await getUserById(id);

  if (!user) {
    return <h2>Usuario no encontrado</h2>;
  }

  const pets = await getPetsByOwnerId(user.id)
  const session  = await auth.api.getSession({
    headers: await headers()
  })

  const isOwner = session?.session?.userId === user.id

  return (
    <main className="min-h-screen mt-20 w-full">
      <div className="max-w-4xl mx-auto px-6 py-8 bg-white rounded-xl space-y-8">
        <Link href={"/"} className="flex items-center gap-2 text-md font-medium">
          <ArrowLeft size={18} />
          Volver al incio
        </Link>
        <header className="mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Image 
              src={user?.image} 
              width={160} 
              height={160} 
              alt={`Avatar del usuario ${user?.name}`}
              className="rounded-full border-1 transition-transform hover:scale-105 hover:rotate-3" 
            />
            <div>
              {
                user?.is_shelter && (
                  <Badge className="mb-4 py-1 text-sm flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    Refugio Verificado
                  </Badge>
                )
              }
              <h2 className="text-4xl font-semibold font-poppins">{user?.name}</h2>
              <p className={`text-lg font-medium text-gray-600 font-raleway ${!user.emailVerified &&  "text-red-500"}`}>
                {user?.email}
              </p>
            </div>
          </div>

          {isOwner && (
            <Button className="flex items-center gap-2 text-md">
              <PencilLine className="size-4" />
              Editar Perfil
            </Button>
          )}
        </header>
        <hr />
        <p>{user?.bio}</p>
        <hr />
        <section>
            <h3 className="text-xl font-medium">
              {
                isOwner ? "Tus mascotas" : "Mascotas publicadas"
              }
            </h3>
            <div className="w-full flex flex-wrap gap-6">
              {
                pets.length <= 0 ? (
                  <div>
                    <h2>El usuario no tiene mascotas publicadas</h2>
                  </div>
                ) : (
                  pets.map((pet) => (
                    <div key={pet.id}>
                      <img src={pet.photos[0]} className="size-32" alt="" />
                      <h3>{pet.name}</h3>
                    </div>
                  ))
                )
              }
            </div>
        </section>
      </div>
    </main>
  );
};

export default PatitasProfilePage;

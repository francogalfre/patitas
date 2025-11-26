import { headers } from "next/headers";
import { notFound } from "next/navigation";

import AdoptedBadge from "@/components/adopted-badge";

import { getUserById } from "@/db/queries/getUserById";
import { auth } from "@/lib/auth";
import { getPetById } from "../actions/getPets";

import AdoptedMessage from "./components/adopted-message";
import AttributesBadges from "./components/attributes-badges";
import Buttons from "./components/buttons";
import OwnerInfo from "./components/owner-information";
import PetBasicInfo from "./components/pet-basic-info";
import PetHeader from "./components/pet-header";
import PhotosGrid from "./components/photos-grid";
import SpecialCares from "./components/special-cares";

import { getMailLink, getWhatsappLink } from "./utils/contact-links";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

const PatitasMascotDetailsPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { id } = await params;

  const pet = await getPetById({ id });

  if (!pet) {
    return notFound();
  }

  const owner = await getUserById(pet.owner_id);

  if (!owner) {
    return notFound();
  }

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const isOwner =
    pet.owner_id === session?.user.id ||
    session?.user.id === process.env.ADMIN_ID;

  const whatsappLink = getWhatsappLink(pet.contact_phone, pet.name);
  const mailtoLink = getMailLink(pet.contact_email);

  return (
    <section className="py-48 min-h-screen antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <Link
          href="/pets"
          className="flex items-center gap-2 no-underline bg-primary w-fit px-4 py-2 mb-6 rounded-full text-white transition-color hover:bg-primary/80 duration-200"
        >
          <MoveLeft size={16} /> Volver atras
        </Link>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="lg:sticky lg:top-28 self-start">
            <PhotosGrid photos={pet.photos} name={pet.name} />
          </div>

          <div className="mt-6 space-y-6 sm:mt-8 lg:mt-0">
            {pet.is_adopted && <AdoptedBadge />}

            <PetHeader pet={pet} />
            <p className="mb-6 text-gray-600 font-raleway text-pretty">
              {pet.description}
            </p>

            <PetBasicInfo pet={pet} />

            <AttributesBadges {...pet} />

            <Buttons
              isOwner={isOwner}
              isAdopted={pet.is_adopted}
              mail={mailtoLink}
              whatsapp={whatsappLink}
              petId={pet.id}
            />

            {pet.is_adopted && <AdoptedMessage name={pet.name} />}

            <OwnerInfo owner={owner} />

            {pet.special_care && (
              <footer className="mt-6">
                <SpecialCares specialCares={pet.special_care} />
              </footer>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatitasMascotDetailsPage;

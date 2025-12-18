import Link from "next/link";

import { MoveLeft } from "lucide-react";
import { notFound } from "next/navigation";

import { getPetById } from "../actions/getPetById";

import AdoptedBadge from "@/components/adopted-badge";
import {
  AdoptedMessage,
  AttributesBadges,
  Buttons,
  OwnerInfo,
  PetBasicInfo,
  PetHeader,
  PhotosGrid,
  SpecialCares,
} from "../components";

import { getMailLink, getWhatsappLink } from "@/utils";
import { getApiSession } from "@/actions/getApiSession";

const PatitasMascotDetailsPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { id } = await params;

  if (!id) {
    return notFound();
  }

  const { pet, owner, message, success } = await getPetById({ id });

  if (!pet || !success) {
    console.error(message);
    return notFound();
  }

  const { session, user } = await getApiSession();

  if (!owner) {
    return notFound();
  }

  const isOwner = user ? pet.owner_id === user.id : false;

  const whatsappLink = getWhatsappLink(pet.contact_phone, pet.name);
  const mailtoLink = getMailLink(pet.contact_email);

  return (
    <section className="pt-32 lg:pt-48 pb-12 sm:pb-16 min-h-screen antialiased">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="lg:sticky lg:top-36 self-start">
            <Link
              href="/pets"
              className="flex items-center gap-2 no-underline bg-primary w-fit px-3 sm:px-4 py-2 mb-4 sm:mb-6 rounded-full text-sm sm:text-base text-white transition-color hover:bg-primary/80 duration-200"
            >
              <MoveLeft size={16} /> Volver atras
            </Link>

            <PhotosGrid photos={pet.photos} name={pet.name} />
          </div>

          <div className="mt-6 space-y-4 sm:space-y-6 sm:mt-8 lg:mt-0 min-w-0">
            {pet.is_adopted && <AdoptedBadge />}

            <PetHeader pet={pet} />

            <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-600 font-raleway whitespace-normal wrap-break-words">
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
              photos={pet.photos}
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

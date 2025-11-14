import { getPetById } from "../actions/getPets";

import { getUserById } from "@/db/queries/getUserById";
import { getMailLink, getWhatsappLink } from "./utils/contact-links";

import PhotosGrid from "./components/photos-grid";
import OwnerInfo from "./components/owner-information";
import Buttons from "./components/buttons";
import SpecialCares from "./components/special-cares";
import AdoptedBadge from "@/components/adopted-badge";
import AttributesBadges from "./components/attributes-badges";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import AdoptedMessage from "./components/adopted-message";
import PetHeader from "./components/pet-header";
import PetBasicInfo from "./components/pet-basic-info";

const PatitasMascotDetailsPage = async ({
	params,
}: {
	params: { id: string };
}) => {
	const { id } = params;

	const pet = await getPetById({ id });
	const owner = await getUserById(pet.owner_id);

	if (!owner) {
		throw new Error("Owner not found");
	}

	const session = await auth.api.getSession({
		headers: await headers(),
	});

	const isOwner = pet.owner_id === session?.session.id;

	const whatsappLink = getWhatsappLink(pet.contact_phone, pet.name);
	const mailtoLink = getMailLink(pet.contact_email);

	return (
		<section className="py-48 min-h-screen antialiased">
			<div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
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

						{!pet.is_adopted && (
							<Buttons
								isOwner={isOwner}
								mail={mailtoLink}
								whatsapp={whatsappLink}
								petId={pet.id}
							/>
						)}

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

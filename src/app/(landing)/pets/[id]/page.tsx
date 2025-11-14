import { getPetById } from "../actions/getPets";

import { getUserById } from "@/db/queries/getUserById";
import { getMailLink, getWhatsappLink } from "./utils/contact-links";

import { MapPin } from "lucide-react";

import PhotosGrid from "./components/photos-grid";
import OwnerInfo from "./components/owner-information";
import Buttons from "./components/buttons";
import SpecialCares from "./components/special-cares";
import AdoptedBadge from "@/components/adopted-badge";
import AttributesBadges from "./components/attributes-badges";

const PatitasMascotDetailsPage = async ({
	params,
}: {
	params: Promise<{ id: string }>;
}) => {
	const { id } = await params;

	const pet = await getPetById({ id });
	const owner = await getUserById(pet.owner_id);

	const isOwner = pet.owner_id === owner?.id;

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

						<div className="space-y-3">
							<h1 className="text-xl font-semibold tracking-tighter text-gray-900 sm:text-6xl dark:text-white">
								{pet.name}
							</h1>

							<span className="text-xl font-medium flex items-center gap-2">
								<MapPin size={18} />
								{pet.location_city}
							</span>
						</div>

						<p className="mb-6 text-gray-600 font-raleway text-pretty">
							{pet.description}
						</p>

						<div className="mb-12 text-lg font-raleway sm:flex sm:items-center sm:gap-10">
							<p className="font-normal">
								Especie:{" "}
								<span className="capitalize font-medium">{pet.species}</span>
							</p>
							<p className="font-normal">
								Tamaño:{" "}
								<span className="capitalize font-medium">{pet.size}</span>
							</p>
							<p className="font-normal">
								Género:{" "}
								<span className="capitalize font-medoum">{pet.gender}</span>
							</p>
						</div>

						<AttributesBadges {...pet} />

						{!pet.is_adopted && (
							<Buttons
								isOwner={isOwner}
								mail={mailtoLink}
								whatsapp={whatsappLink}
								petId={pet.id}
							/>
						)}

						{pet.is_adopted && (
							<p className="my-12 text-gray-600 font-raleway text-pretty">
								¡Buenas noticias! {pet.name} ya está con su nueva familia, listo
								para vivir una vida llena de mimos y aventuras.
							</p>
						)}

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

import Image from "next/image";

interface AttributesBadgesProps {
	good_with_kids: boolean;
	good_with_cats: boolean;
	good_with_dogs: boolean;
	is_sterilized: boolean;
	is_vaccinated: boolean;
}

const AttributesBadges = ({
	good_with_kids,
	good_with_cats,
	good_with_dogs,
	is_sterilized,
	is_vaccinated,
}: AttributesBadgesProps) => {
	const badges = [
		{
			key: "good_with_kids",
			condition: good_with_kids,
			src: "/badges/good_with_kids.webp",
			alt: "Good with kids badge",
		},
		{
			key: "good_with_cats",
			condition: good_with_cats,
			src: "/badges/good_with_cats.webp",
			alt: "Good with cats badge",
		},
		{
			key: "good_with_dogs",
			condition: good_with_dogs,
			src: "/badges/good_with_dogs.webp",
			alt: "Good with dogs badge",
		},
		{
			key: "is_sterilized",
			condition: is_sterilized,
			src: "/badges/is_sterilized.webp",
			alt: "Sterilized badge",
		},
		{
			key: "is_vaccinated",
			condition: is_vaccinated,
			src: "/badges/is_vaccinated.webp",
			alt: "Vaccinated badge",
		},
	];

	return (
		<div className="flex items-center flex-wrap gap-4">
			{badges
				.filter((badge) => badge.condition)
				.map((badge) => (
					<Image
						className="size-24"
						key={badge.key}
						src={badge.src}
						alt={badge.alt}
						width={72}
						height={72}
					/>
				))}
		</div>
	);
};

export default AttributesBadges;

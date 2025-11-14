"use client";

import Image from "next/image";
import { useState } from "react";

const PhotosGrid = ({
	photos,
	name,
}: {
	photos: Array<string>;
	name: string;
}) => {
	const [principalImage, setPrincipalImage] = useState(photos[0]);

	return (
		<div className="mx-auto space-y-4">
			<Image
				className="w-full rounded-lg size-96 object-cover"
				src={principalImage}
				alt={`${name} imagen principal`}
				width={1200}
				height={1200}
			/>

			{photos?.length > 1 && (
				<div className="flex w-full justify-between gap-4">
					{photos.map((photo, index) => (
						<Image
							onClick={() => setPrincipalImage(photos[index])}
							key={photo + index}
							className="w-full max-h-60 h-full rounded-lg size-32 object-cover cursor-pointer"
							src={photo}
							alt={`${name} imagen ${index + 1}`}
							width={300}
							height={300}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default PhotosGrid;

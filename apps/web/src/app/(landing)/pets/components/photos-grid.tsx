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
    <div className="mx-auto space-y-3 sm:space-y-4">
      <Image
        loading="eager"
        className="w-full rounded-lg h-64 sm:h-80 lg:h-96 object-cover"
        src={principalImage}
        alt={`${name} imagen principal`}
        width={1200}
        height={1200}
      />

      {photos?.length > 1 && (
        <div className="w-full flex flex-wrap gap-2 sm:gap-4 lg:gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo}
              className="flex-1 min-w-[80px] sm:min-w-[100px] max-w-full"
            >
              <Image
                loading="eager"
                onClick={() => setPrincipalImage(photos[index])}
                className="w-full h-20 sm:h-32 lg:max-h-60 lg:h-full rounded-lg object-cover cursor-pointer hover:opacity-80 transition-opacity"
                src={photo}
                alt={`${name} imagen ${index + 1}`}
                width={400}
                height={400}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotosGrid;

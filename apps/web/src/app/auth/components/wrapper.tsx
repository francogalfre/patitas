import Image from "next/image";
import type React from "react";

interface AuthWrapperProps {
  children: React.ReactNode;
  image: string;
  alt: string;
}

const AuthWrapper = ({ children, image, alt }: AuthWrapperProps) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row h-screen w-full p-4 lg:p-6 gap-6 lg:gap-12">
        <div className="flex flex-col w-full my-auto mx-auto lg:flex-4 text-start">
          <div className="max-w-lg w-full mx-auto">{children}</div>
        </div>

        <Image
          src={image}
          className="hidden lg:block rounded-3xl lg:flex-3 object-cover brightness-75 opacity-95"
          alt={alt}
          fetchPriority="high"
          loading="eager"
          width={500}
          height={500}
        />
      </div>
    </>
  );
};

export default AuthWrapper;

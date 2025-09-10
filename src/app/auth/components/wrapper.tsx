import React from "react";

interface AuthWrapperProps {
  children: React.ReactNode;
  image: string;
  alt: string;
}

const AuthWrapper = ({ children, image, alt }: AuthWrapperProps) => {
  return (
    <>
      <div className="flex h-screen w-full p-6 gap-12">
        <div className="flex flex-col w-full my-auto mx-auto flex-4 text-start">
          <div className="max-w-lg mx-auto">{children}</div>
        </div>
        <img
          src={image}
          className="rounded-3xl flex-3 object-cover brightness-75 opacity-95"
          alt={alt}
          fetchPriority="high"
        />
      </div>
    </>
  );
};

export default AuthWrapper;

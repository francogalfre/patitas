import React, { type ReactNode } from "react";

const SectionContainer = ({
  id,
  children,
  classname,
}: {
  id?: string;
  children: ReactNode;
  classname?: string;
}) => {
  return (
    <section
      id={id}
      className={`max-w-6xl w-full mx-auto px-4 ${classname}`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;

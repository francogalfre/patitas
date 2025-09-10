import React, { type ReactNode } from "react";

const SectionContainer = ({
  children,
  classname,
}: {
  children: ReactNode;
  classname?: string;
}) => {
  return (
    <section
      className={`max-w-7xl w-full full mx-auto px-4 pb-48 ${classname}`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;

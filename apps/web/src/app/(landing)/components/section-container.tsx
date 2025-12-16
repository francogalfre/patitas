import type { ReactNode } from "react";

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
      className={`max-w-5xl w-full mx-auto px-6 sm:px-4 pb-12 sm:pb-36 ${classname}`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;

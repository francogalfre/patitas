import { BlurFade } from "@/components/ui/blur-fade";

import Image from "next/image";

const members = [
  {
    name: "Franco Galfré",
    role: "Lider de Tecnologia - CTO",
    avatar: "/landing/about/franco.webp",
  },
  {
    name: "Melody Taieti",
    role: "Lider de Comunidad y Operaciones - COO",
    avatar: "/landing/about/melody.webp",
  },
];

export default function TeamSection() {
  return (
    <section className="mx-auto max-w-5xl w-full px-4 sm:px-6 lg:px-8">
      <BlurFade delay={0.4} inView>
        <div className="flex flex-col gap-3 sm:gap-4 sm:grid sm:grid-cols-2">
          <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight leading-tight sm:leading-snug">
            Nuestro equipo
          </h2>
          <div className="mt-2 sm:mt-0">
            <p className="text-sm sm:text-base md:text-lg w-full font-raleway text-muted-foreground leading-relaxed">
              Trabajamos en estrecha colaboración con nuestra comunidad.
              Ajustamos continuamente Patitas basándonos en la experiencia de
              adoptantes y publicadores.
            </p>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.6} inView>
        <div className="mt-8 sm:mt-12 md:mt-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12">
            {members.map((member, index) => (
              <div key={index} className="group overflow-hidden">
                <Image
                  className="h-64 sm:h-80 md:h-96 w-full rounded-lg sm:rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 sm:group-hover:h-90 group-hover:rounded-xl"
                  src={member.avatar}
                  alt={`Imagen de ${member.name}`}
                  width="826"
                  height="1239"
                />
                <div className="px-1 sm:px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-title font-medium font-poppins text-lg sm:text-xl md:text-2xl transition-all duration-500 tracking-tight">
                      {member.name}
                    </h3>
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      {index + 1}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-muted-foreground inline-block sm:translate-y-6 text-xs sm:text-sm md:text-base sm:opacity-0 transition duration-300 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 font-raleway">
                      {member.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}

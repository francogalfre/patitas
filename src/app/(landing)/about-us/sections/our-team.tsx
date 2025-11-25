import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";

const members = [
  {
    name: "Franco Galfré",
    role: "Lider de Tecnologia - CTO",
    avatar: "https://alt.tailus.io/images/team/member-one.webp",
  },
  {
    name: "Melody Taieti",
    role: "Lider de Comunidad y Operaciones - COO",
    avatar: "https://alt.tailus.io/images/team/member-two.webp",
  },
];

export default function TeamSection() {
  return (
    <section className="mx-auto max-w-5xl">
      <BlurFade delay={0.4} inView>
        <div className="gap-4 sm:grid sm:grid-cols-2">
          <h2 className="font-poppins text-3xl font-medium tracking-tight sm:max-w-6xl sm:text-4xl leading-14">
            Nuestro equipo
          </h2>
          <div className="mt-6 sm:mt-0">
            <p className="text-md  w-full font-raleway text-muted-foreground sm:text-lg">
              Trabajamos en estrecha colaboración con nuestra comunidad.
              Ajustamos continuamente Patitas basándonos en la experiencia de
              adoptantes y publicadores.
            </p>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.6} inView>
        <div className="mt-12 md:mt-12">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-2">
            {members.map((member, index) => (
              <div key={index} className="group overflow-hidden">
                <img
                  className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                  src={member.avatar}
                  alt="team member"
                  width="826"
                  height="1239"
                />
                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-title font-medium font-poppins text-2xl transition-all duration-500 tracking-tight">
                      {member.name}
                    </h3>
                    <span className="text-sm">{index + 1}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-muted-foreground inline-block translate-y-6 text-md opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 font-raleway">
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

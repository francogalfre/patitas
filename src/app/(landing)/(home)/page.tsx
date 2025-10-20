import SectionContainer from "../components/SectionContainer";

import { HeroSection } from "./sections/Hero";
import { AdoptionStepsSection } from "./sections/AdoptionSteps";

export default function PatitasHomePage() {
  return (
    <>
      <HeroSection />

      <SectionContainer>
        <AdoptionStepsSection />
      </SectionContainer>

      <SectionContainer classname="pb-32">
        <section className="w-full flex flex-col items-center text-center space-y-8">
          <h2 className="text-4xl font-semibold">
            ¿Por qué adoptar con{" "}
            <span className="text-primary font-bold">Patitas?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Adoptar salva vidas y te conecta con un amigo fiel. En Patitas, te
            ayudamos a encontrar a tu compañero ideal de manera sencilla, segura
            y transparente.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full max-w-4xl">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-4">❤️</span>
              <h3 className="font-bold text-xl mb-2">Salva una vida</h3>
              <p className="text-gray-500">
                Cada adopción le da una segunda oportunidad a un perrito que lo
                necesita.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-4">🔎</span>
              <h3 className="font-bold text-xl mb-2">
                Encuentra tu compañero ideal
              </h3>
              <p className="text-gray-500">
                Filtra por tamaño, edad y personalidad para encontrar el perrito
                perfecto para ti.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-4">🤝</span>
              <h3 className="font-bold text-xl mb-2">Proceso seguro</h3>
              <p className="text-gray-500">
                Te acompañamos en cada paso para que la adopción sea fácil y
                responsable.
              </p>
            </div>
          </div>
        </section>
      </SectionContainer>

      <SectionContainer classname="pb-32">
        <section className="w-full flex flex-col items-center text-center space-y-8">
          <h2 className="text-4xl font-semibold">
            Testimonios de{" "}
            <span className="text-primary font-bold">adoptantes felices</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full max-w-4xl">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <p className="text-gray-600 italic mb-2">
                "Adoptar a Luna fue la mejor decisión. Ahora mi casa está llena
                de alegría y amor."
              </p>
              <span className="font-bold text-primary">- Carla M.</span>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <p className="text-gray-600 italic mb-2">
                "El proceso fue muy sencillo y el equipo de Patitas me ayudó en
                todo momento."
              </p>
              <span className="font-bold text-primary">- Andrés G.</span>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <p className="text-gray-600 italic mb-2">
                "Ahora Rocky es parte de nuestra familia. ¡Gracias Patitas!"
              </p>
              <span className="font-bold text-primary">- Sofía R.</span>
            </div>
          </div>
        </section>
      </SectionContainer>

      <div className="mb-32 w-full bg-primary py-12 flex flex-col items-center justify-center text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          ¿Listo para cambiar una vida?
        </h3>
        <p className="text-lg text-white mb-6 max-w-2xl">
          Da el siguiente paso y encuentra a tu compañero ideal. ¡Miles de
          mascotas esperan por un hogar lleno de amor!
        </p>
        <a
          href="/adoptar"
          className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Ver mascotas en adopción
        </a>
      </div>

      <SectionContainer classname="pb-32">
        <section className="w-full flex flex-col items-center text-center space-y-8">
          <h2 className="text-4xl font-semibold">
            Más información sobre{" "}
            <span className="text-primary font-bold">adopción responsable</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Adoptar es un compromiso de por vida. Antes de tomar la decisión,
            asegúrate de contar con el tiempo, espacio y recursos necesarios
            para cuidar a tu nuevo amigo. Si tienes dudas, nuestro equipo está
            aquí para orientarte en cada paso.
          </p>
          <a
            href="/adopcion-responsable"
            className="inline-block mt-4 px-6 py-3 bg-primary text-white rounded-lg font-semibold shadow hover:bg-primary/90 transition"
          >
            Aprende más sobre adopción responsable
          </a>
        </section>
      </SectionContainer>

      {/* Banner de Call to Action */}
    </>
  );
}

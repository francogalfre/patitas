import React from "react";

const steps = [
  {
    number: 1,
    title: "Explora",
    description:
      "Busca mascotas usando nuestros filtros avanzados por especie, edad, tamaño y ubicación.",
  },
  {
    number: 2,
    title: "Conecta",
    description:
      "Encuentra a tu compañero ideal y contacta directamente con el refugio o cuidador.",
  },
  {
    number: 3,
    title: "Conoce",
    description:
      "Programa una visita para conocer a tu futura mascota y asegurar la compatibilidad.",
  },
  {
    number: 4,
    title: "Adopta",
    description:
      "Completa el proceso de adopción y dale a una mascota el hogar amoroso que merece.",
  },
];

const AdoptionStepsSection = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl pb-4 font-medium">¿Cómo Funciona?</h2>
      <p className="text-gray-800 text-lg">
        Adoptar nunca fue tan fácil. Sigue estos simples pasos para encontrar a
        tu nuevo mejor amigo
      </p>
      <div className="flex mt-16">
        {steps.map((step) => (
          <article key={step.number}>
            <h4>{step.number}</h4>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AdoptionStepsSection;

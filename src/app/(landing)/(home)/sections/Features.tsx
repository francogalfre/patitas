import React from 'react'

import { Feature } from '@/components/blocks/feature-with-advantages'

const features = [
  {
    title: "Fácil de usar",
    description: "Diseñado para ser claro y simple en cada paso.",
  },
  {
    title: "Rápido y confiable",
    description: "Rendimiento ágil y disponibilidad constante.",
  },
  {
    title: "Hermoso y moderno",
    description: "Interfaz cuidada para una experiencia agradable.",
  },
  {
    title: "Filtros inteligentes",
    description: "Encuentra mascotas por tamaño, edad y ubicación.",
  },
  {
    title: "Comunicación segura",
    description: "Contacta a refugios y familias con confianza.",
  },
  {
    title: "Proceso responsable",
    description: "Guías y verificación para adopciones comprometidas.",
  },
];

export const FeaturesSection = () => {
  return (
    <div className='block'>
        <Feature 
          features={features} 
          badge='¿Por qué elegir Patitas?'
          title='Todo lo que necesitas para adoptar con confianza'
          description='Facilitamos cada paso para que adoptes de forma simple, segura y responsable. Desde filtros inteligentes hasta el contacto con refugios, te guiamos para decidir mejor.'
        />
    </div>
  )
}

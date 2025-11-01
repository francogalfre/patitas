import React from 'react'

import { Faq } from '@/components/blocks/faq'

const faqs = [
  {
    question: "¿Cómo funciona Patitas y cómo puedo adoptar una mascota?",
    answer:
      "Busca por tamaño, edad o ubicación, revisa los perfiles y contacta al refugio. Te guiamos en cada paso para una adopción responsable.",
  },
  {
    question: "¿Cuánto cuesta adoptar a través de Patitas?",
    answer:
      "La plataforma es gratuita. Algunos refugios pueden solicitar un aporte solidario para gastos veterinarios, que se coordina directamente con ellos.",
  },
  {
    question: "¿Qué requisitos necesito para adoptar una mascota?",
    answer:
      "Ser mayor de edad, tener tiempo y espacio adecuado, y compromiso a largo plazo. Te ayudamos a preparar tu postulación con nuestras guías.",
  },
  {
    question: "¿Puedo publicar mi mascota en adopción?",
    answer:
      "Sí, puedes crear un perfil con fotos y detalles. Los refugios también pueden registrarse. El proceso es sencillo y te damos todas las herramientas.",
  },
];

export const FAQSection = () => {
  return (
    <Faq 
      badge="Preguntas Frecuentes" 
      heading="Todo lo que necesitas saber sobre Patitas" 
      description="Resolvemos las dudas más comunes sobre nuestro proceso de adopción, requisitos y cómo usar la plataforma." 
      faqs={faqs} 
    />
  )
}

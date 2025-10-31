import React from 'react'

import { TestimonialsSection as TestimonialsBlock } from '@/components/blocks/testimonials-with-marquee'

const testimonials = [
  {
    author: {
      name: "Franco Galfre",
      handle: "@francogalfre",
      avatar: "https://github.com/Francogalfre.png"
    },
    text: "Adoptamos a Mora con Patitas y fue súper claro todo el proceso. Los filtros nos ayudaron a encontrarla y el seguimiento del refugio fue impecable.",
  },
  {
    author: {
      name: "Valentín Galfre",
      handle: "@valentingalfre",
      avatar: "https://github.com/galfrevn.png"
    },
    text: "La plataforma es muy fácil de usar y transmite confianza. Coordiné la visita en minutos y hoy Rocky es parte de la familia.",
  },
  {
    author: {
      name: "Melody Taieti",
      handle: "@melodytaieti",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=faces"
    },
    text: "Me encantó la responsabilidad del proceso. Te guían con todo: requisitos, adaptación y cuidados. Se nota el compromiso con las adopciones.",
  },
  {
    author: {
      name: "Bardus Diego",
      handle: "@x7x_diegol",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces"
    },
    text: "Gracias a Patitas conocimos a Coco. La comunicación con el refugio fue rápida y transparente. Recomendadísimo para adoptar con tranquilidad.",
  },
  {
    author: {
      name: "Gisela Fernandez",
      handle: "@gisefer",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces"
    },
    text: "Gran experiencia de principio a fin. Encontré perritos cerca mío y pude ver toda la información antes de postularme. Atención de diez.",
  },
]

export const TestimonialsSection = () => {
    return (
        <TestimonialsBlock
            title="Historias reales de adopción"
            description="Personas y familias que ya adoptaron con Patitas comparten cómo cambió su vida. Conoce sus experiencias y anímate a dar el siguiente paso."
            testimonials={testimonials}
        />
    )
}

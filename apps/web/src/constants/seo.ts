export const SEO_CONFIG = {
  siteName: "Patitas",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://patitas.site",
  title:
    "Patitas - Plataforma de Adopción Responsable de Mascotas en Argentina",
  titleTemplate: "%s | Patitas",
  description:
    "Conecta con perros, gatos y otras mascotas en adopción cerca de ti. Plataforma gratuita que simplifica la adopción responsable. Miles de animales buscan un hogar. ¡Adopta hoy!",

  keywords: [
    "adopción de mascotas Argentina",
    "adoptar perro",
    "adoptar gato",
    "mascotas en adopción",
    "adopción responsable",

    "perros en adopción cerca de mí",
    "gatos en adopción gratis",
    "refugio de animales",
    "rescate de mascotas",
    "adoptar cachorro",
    "adoptar gatito",

    "adopción mascotas Buenos Aires",
    "adopción mascotas Córdoba",
    "adopción mascotas Rosario",
    "adopción mascotas Santa Fe",

    "adopción conejos",
    "adopción aves",
    "adopción animales exóticos",

    "quiero adoptar un perro",
    "como adoptar una mascota",
    "dar en adopción mascota",
    "publicar mascota en adopción",
  ],

  authors: [
    { name: "Franco Galfré", url: "https://github.com/francogalfre" },
    { name: "Melody Taieti" },
  ],
  creator: "Patitas Team",
  publisher: "Patitas",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Animales y Mascotas",

  classification: "Adopción de Mascotas",
};

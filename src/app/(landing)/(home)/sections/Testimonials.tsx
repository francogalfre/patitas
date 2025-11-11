import { Testimonials } from "../components/blocks/testimonials";

const testimonials = [
	{
		title: "La pareja perfecta",
		description:
			"Encontramos a nuestro compañero ideal gracias a Patitas. El proceso fue fluido y nos apoyaron en todo momento.",
		user: "María Gómez",
		avatarUrl: "https://randomuser.me/api/portraits/women/65.jpg",
		avatarFallback: "MG",
	},
	{
		title: "Rápido y con cariño",
		description:
			"Como refugio, publicar mascotas fue sencillo. Conectamos con familias amorosas más rápido que nunca.",
		user: "Refugio San Paws",
		avatarUrl: "https://randomuser.me/api/portraits/men/12.jpg",
		avatarFallback: "SP",
	},
	{
		title: "Seguro y transparente",
		description:
			"Me encantó la transparencia. Los perfiles verificados y los pasos claros nos dieron confianza para adoptar.",
		user: "Lucía y Martín",
		avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
		avatarFallback: "LM",
	},
	{
		title: "Gran experiencia",
		description:
			"Desde la búsqueda hasta el día de la adopción, todo funcionó de manera impecable. Recomiendo mucho a Patitas.",
		user: "Carlos Pérez",
		avatarUrl: "https://randomuser.me/api/portraits/men/33.jpg",
		avatarFallback: "CP",
	},
	{
		title: "Comunidad que apoya",
		description:
			"Nos sentimos acompañados en cada paso. La comunidad y los consejos nos ayudaron a recibir a nuestro nuevo amigo.",
		user: "Familia Rodríguez",
		avatarUrl: "https://randomuser.me/api/portraits/women/22.jpg",
		avatarFallback: "FR",
	},
];

function TestimonialsSection() {
	return (
		<div className="block w-screen pb-36">
			<Testimonials
				title="Testimonios de quienes confiaron en Patitas"
				description="Miles de familias y refugios confían en nosotros para encontrar el compañero ideal. Conoce sus experiencias y cómo Patitas ayudó a crear nuevas historias de adopción responsables y felices."
				testimonials={testimonials}
			/>
		</div>
	);
}

export { TestimonialsSection };

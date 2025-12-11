export const getWhatsappLink = (phone: string, name: string) => {
	return `https://wa.me/${phone}?text=${encodeURIComponent(
		`¡Hola! Vi a ${name} en la página de adopciones y me encantaría saber más sobre ella!`,
	)}`;
};

export const getMailLink = (email: string) => {
	return `https://mail.google.com/mail/?view=cm&to=${email}`;
};

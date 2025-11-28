import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendAuthVerificationEmailProps {
	email: string;
	username: string;
	url: string;
}

export const SendAuthVerificationEmail = ({
	email,
	username,
	url,
}: SendAuthVerificationEmailProps) => {
	resend.emails.send({
		from: "Acme <onboarding@resend.dev>",
		to: email,
		subject: "Bienvenido a Patitas | Porfavor verifica tu correo",
		react: EmailTemplate({ username, url }),
	});
};

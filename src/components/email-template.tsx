interface EmailTemplateProps {
	username: string;
	url: string;
}

export function EmailTemplate({ username, url }: EmailTemplateProps) {
	return (
		<div className="font-sans max-w-2xl mx-auto bg-white p-0 leading-relaxed text-gray-800">
			<div className="bg-gray-50 py-10 px-5 text-center border-b border-gray-200">
				<h1 className="text-slate-700 text-3xl font-semibold m-0 font-poppins">
					¡Bienvenido a Patitas!
				</h1>
			</div>

			<div className="py-10 px-8 text-center">
				<h2 className="text-slate-700 text-2xl mb-5 font-medium">
					Hola, {username} 👋
				</h2>

				<p className="text-base text-gray-600 mb-8 leading-loose">
					Gracias por crear una cuenta en{" "}
					<strong className="text-slate-700">Patitas</strong>. Estamos
					emocionados de tenerte como parte de nuestra comunidad dedicada a
					conectar mascotas con familias amorosas.
				</p>

				<p className="text-base text-gray-600 mb-10 leading-loose">
					Para completar tu registro y comenzar a explorar todas las mascotas
					disponibles para adopción, por favor verifica tu cuenta haciendo clic
					en el botón de abajo:
				</p>

				<div className="mb-10">
					<a
						href={url}
						className="inline-block bg-green-600 hover:bg-green-700 text-white py-4 px-8 no-underline rounded-lg text-base font-semibold shadow-lg transition-all duration-300 ease-in-out"
					>
						Verificar mi cuenta
					</a>
				</div>

				<div className="bg-gray-50 p-5 rounded-lg mb-8">
					<h3 className="text-slate-700 text-lg mb-4 font-semibold">
						¿Qué puedes hacer en Patitas?
					</h3>
					<ul className="text-left text-gray-600 text-sm pl-5 space-y-2">
						<li>Explorar mascotas disponibles para adopción</li>
						<li>Conectar con familias que buscan adoptar</li>
						<li>Acceder a guías de cuidado para mascotas</li>
						<li>
							Formar parte de una comunidad comprometida con el bienestar animal
						</li>
					</ul>
				</div>

				<p className="text-sm text-gray-600 mb-5">
					Si no creaste una cuenta en Patitas, puedes ignorar este email de
					forma segura.
				</p>
			</div>

			<div className="bg-slate-700 text-white py-8 px-5 text-center">
				<p className="text-sm mb-3">
					© {new Date().getFullYear()} Patitas. Todos los derechos reservados.
				</p>
				<p className="text-xs text-gray-300">
					Este email fue enviado porque creaste una cuenta en nuestra
					plataforma.
				</p>
			</div>
		</div>
	);
}

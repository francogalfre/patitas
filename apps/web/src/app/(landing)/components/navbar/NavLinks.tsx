import Link from "next/link";

const NAV_LINKS = [
	{
		id: 1,
		text: "Inicio",
		href: "/",
	},
	{
		id: 2,
		text: "Adoptar",
		href: "/pets",
	},
	{
		id: 3,
		text: "Guías",
		href: "/guides",
	},
	{
		id: 4,
		text: "Quienes Somos",
		href: "/about-us",
	},
];

export const NavLinks = ({ pathname }: { pathname: string }) => {
	return (
		<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
			<ul className="flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 font-geist">
				{NAV_LINKS.map((link) => (
					<li
						className="hover:-translate-y-0.5 focus:scale-105 transition-transform duration-200"
						key={link.id}
					>
						<Link
							href={link.href}
							className={
								pathname === link.href
									? "text-primary font-medium"
									: "hover:text-primary transition-colors"
							}
						>
							{link.text}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AdoptedBadge from "@/app/(landing)/pets/components/adopted-badge";

interface PetCardProps extends React.HTMLAttributes<HTMLDivElement> {
	id: string;
	imageUrl: string;
	name: string;
	location: string;
	specie: string;
	gender: string;
	is_adopted: boolean;
}

const PetCard = React.forwardRef<HTMLDivElement, PetCardProps>(
	(
		{
			className,
			id,
			imageUrl,
			name,
			location,
			specie,
			gender,
			is_adopted = false,
		},
		ref,
	) => {
		const linkStyle = {
			boxShadow: `0 0 40px -15px hsl(var(--theme-color) / 0.5)`,
		};

		const gradientStyle = {
			background: `linear-gradient(to top, hsl(var(--theme-color) / 0.9), hsl(var(--theme-color) / 0.6) 30%, transparent 60%)`,
		};

		return (
			<div
				ref={ref}
				className={cn("group w-full h-full min-h-[420px]", className)}
			>
				<Link
					href={`/pets/${id}`}
					className="relative block w-full h-full min-h-[420px] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-[0_0_60px_-15px_hsl(var(--theme-color)/0.6)]"
					aria-label={`Explorar detalles de ${location}`}
					style={linkStyle}
				>
					<div
						className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
						style={{ backgroundImage: `url(${imageUrl})` }}
					/>

					<div className="absolute inset-0" style={gradientStyle} />

					{is_adopted && (
						<div className="absolute top-4 left-4 z-20">
							<AdoptedBadge />
						</div>
					)}

					<div className="relative flex flex-col justify-end h-full p-6 text-white">
						<div
							className="pointer-events-none absolute left-0 right-0 bottom-0 rounded-b-2xl h-1/2"
							style={{
								background:
									"linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.30), rgba(0,0,0,0.08), transparent 90%)",
							}}
						/>

						<h3 className="relative text-3xl font-semibold font-poppins tracking-tight capitalize z-10">
							{name}
						</h3>

						<div className="flex items-center w-full justify-between">
							<p className="relative text-md text-white/80 mt-1 font-medium capitalize z-10">
								{specie} - {gender}
							</p>
							<p className="relative text-md text-white/80 mt-1 font-medium capitalize z-10">
								{location}
							</p>
						</div>

						<button
							type="button"
							className="relative z-10 mt-4 flex items-center justify-between bg-[hsl(var(--theme-color)/0.2)] backdrop-blur-md border rounded-lg px-4 py-3 transition-all duration-300 group-hover:bg-[hsl(var(--theme-color)/0.4)]"
						>
							<span className="text-sm font-medium font-raleway tracking-wide">
								Ver detalles
							</span>
							<ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
						</button>
					</div>
				</Link>
			</div>
		);
	},
);

PetCard.displayName = "PetCard";

export { PetCard };

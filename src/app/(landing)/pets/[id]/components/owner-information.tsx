import type { User } from "@/db/schema/user";

import { BadgeCheck } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

const OwnerInfo = ({ owner }: { owner: User }) => {
	return (
		<Link href={`/profile/${owner.id}`}>
			<div className="bg-gray-100 p-4 rounded-xl space-y-4 relative">
				<h2 className="text-xl font-poppins">Información del dueño</h2>

				<div className="flex items-center gap-4">
					<Image
						src={owner.image}
						alt={`Avatar del usuario ${owner.name}`}
						width={72}
						height={72}
						className="rounded-full"
					/>

					<div className="space-y-1">
						<p className="text-xl font-raleway flex items-center gap-1">
							{owner.name}
							<BadgeCheck size={20} className="text-primary" />
						</p>
						<p className="text-md text-gray-600">{owner.email}</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default OwnerInfo;

import { BadgeCheck, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { User } from "@/types/user";

const OwnerInfo = ({ owner }: { owner: User }) => {
  return (
    <section>
      <div className="bg-gray-100 p-4 rounded-xl space-y-4 relative">
        <h2 className="text-xl font-poppins">Dueño actual:</h2>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={owner.image}
              alt={`Avatar del usuario ${owner.name}`}
              width={72}
              height={72}
              className="rounded-full"
            />

            <div className="space-y-1">
              <p className="text-xl font-medium font-raleway flex items-center gap-1">
                {owner.name}
                <BadgeCheck size={20} className="text-primary" />
              </p>
              <p className="text-md text-gray-600">{owner.email}</p>
            </div>
          </div>

          <Link href={`/profile/${owner.id}`}>
            <ChevronRight size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OwnerInfo;

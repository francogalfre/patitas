import { BadgeCheck, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { User } from "@/types/user";

const OwnerInfo = ({ owner }: { owner: User }) => {
  return (
    <section>
      <div className="bg-gray-100 p-3 sm:p-4 rounded-xl space-y-3 sm:space-y-4 relative">
        <h2 className="text-lg sm:text-xl font-poppins">Dueño actual:</h2>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <Image
              src={owner.image}
              alt={`Avatar del usuario ${owner.name}`}
              width={72}
              height={72}
              className="rounded-full w-12 h-12 sm:w-[72px] sm:h-[72px] shrink-0"
            />

            <div className="space-y-0.5 sm:space-y-1 min-w-0">
              <p className="text-base sm:text-xl font-medium font-raleway flex items-center gap-1 truncate">
                <span className="truncate">{owner.name}</span>
                <BadgeCheck size={18} className="text-primary shrink-0 sm:w-5 sm:h-5" />
              </p>
              <p className="text-sm sm:text-md text-gray-600 truncate">{owner.email}</p>
            </div>
          </div>

          <Link href={`/profile/${owner.id}`} className="shrink-0">
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OwnerInfo;

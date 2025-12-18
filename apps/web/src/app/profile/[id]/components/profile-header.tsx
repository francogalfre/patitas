import { CircleCheck } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

import type { User } from "@/types/user";
import DeleteProfileDialog from "./delete-profile-dialog/dialog";
import EditProfileDialog from "./edit-profile-dialog/dialog";

interface ProfileHeaderProps {
  user: User;
  isOwner: boolean;
}

const ProfileHeader = ({ user, isOwner }: ProfileHeaderProps) => {
  return (
    <header className="mx-auto flex flex-col sm:flex-row items-center sm:items-start md:items-center justify-between gap-4 sm:gap-6">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 text-center sm:text-left">
        <Image
          src={user?.image}
          width={160}
          height={160}
          alt={`Avatar del usuario ${user?.name}`}
          className="rounded-full border duration-300 transition-transform hover:scale-105 hover:rotate-3 size-24 sm:size-32 md:size-40"
          loading="eager"
        />

        <div>
          {user?.is_shelter && (
            <Badge className="mb-2 sm:mb-3 md:mb-4 py-0.5 sm:py-1 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 w-fit mx-auto sm:mx-0">
              <CircleCheck className="size-3 sm:size-4" />
              Refugio Verificado
            </Badge>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-poppins">
            {user?.name}
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-medium text-gray-600 font-raleway mt-1">
            {user?.email}
          </p>
        </div>
      </div>

      {isOwner && (
        <div className="flex justify-center sm:flex-col gap-2 sm:gap-3 w-full sm:w-auto">
          <EditProfileDialog user={user} />
          <DeleteProfileDialog user={user} />
        </div>
      )}
    </header>
  );
};

export default ProfileHeader;

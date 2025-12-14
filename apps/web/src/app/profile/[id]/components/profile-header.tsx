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
    <header className="mx-auto flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Image
          src={user?.image}
          width={160}
          height={160}
          alt={`Avatar del usuario ${user?.name}`}
          className="rounded-full border duration-300 transition-transform hover:scale-105 hover:rotate-3"
          loading="eager"
        />

        <div>
          {user?.is_shelter && (
            <Badge className="mb-4 py-1 text-sm flex items-center gap-2">
              <CircleCheck className="size-4" />
              Refugio Verificado
            </Badge>
          )}
          <h2 className="text-4xl font-semibold font-poppins">{user?.name}</h2>
          <p className="text-lg font-medium text-gray-600 font-raleway">
            {user?.email}
          </p>
        </div>
      </div>

      {isOwner && (
        <div className="space-y-3">
          <EditProfileDialog user={user} />
          <DeleteProfileDialog user={user} />
        </div>
      )}
    </header>
  );
};

export default ProfileHeader;

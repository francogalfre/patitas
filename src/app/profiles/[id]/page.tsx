import { db } from "@/db";

import { getUserById } from "@/db/queries/getUserById";

const PatitasProfilePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const user = await getUserById(id);

  if (!user) {
    return <h2>Usuario no encontrado</h2>;
  }

  console.log(user);

  return (
    <div>
      <h2>Profile Page</h2>
      <h4>{user?.name}</h4>
    </div>
  );
};

export default PatitasProfilePage;

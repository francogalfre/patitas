import { db } from "@/db";

export const getUserById = async (id: string) => {
  const user = await db.query.user.findFirst({
    where: (user, { eq }) => eq(user.id, id),
  });

  return user;
};

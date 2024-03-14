"use server";

import db from "@/db";
import { unstable_noStore as noStore } from "next/cache";

async function findUser(userId: string) {
  noStore();

  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
}

export { findUser };

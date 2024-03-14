"use server";
import { unstable_noStore as noStore } from "next/cache";

import db from "@/db";

async function findMemos(userId: string) {
  noStore();

  const data = await db.note.findMany({
    where: { userId },

    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export { findMemos };

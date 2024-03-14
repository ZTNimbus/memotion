"use server";

import db from "@/db";
import { unstable_noStore as noStore } from "next/cache";

async function findMemo(memoId: string, userId: string) {
  noStore();

  return await db.note.findUnique({ where: { id: memoId, userId } });
}

export { findMemo };

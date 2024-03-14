"use server";

import db from "@/db";
import paths from "@/paths";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";

async function deleteMemo(memoId: string) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) throw new Error("No user found/Unauthorized");

  await db.note.delete({ where: { id: memoId, userId: user.id } });

  revalidatePath(paths.life());
}

export { deleteMemo };

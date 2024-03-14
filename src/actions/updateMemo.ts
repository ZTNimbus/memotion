"use server";

import db from "@/db";
import paths from "@/paths";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";
import { redirect } from "next/navigation";

async function updateMemo(memoId: string, formData: FormData) {
  noStore();

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) throw new Error("User not found/Unauthorized");

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  await db.note.update({
    where: { id: memoId, userId: user.id },

    data: {
      title,
      description,
    },
  });

  revalidatePath(paths.life());
  redirect(paths.life());
}

export { updateMemo };

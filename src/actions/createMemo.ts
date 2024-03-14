"use server";

import db from "@/db";
import paths from "@/paths";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

async function createMemo(formData: FormData) {
  noStore();

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) throw new Error("No user found/Unauthorized");

  await db.note.create({
    data: {
      userId: user?.id as string,
      title,
      description,
    },
  });

  return redirect(paths.life());
}

export { createMemo };

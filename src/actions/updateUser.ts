"use server";

import db from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { findUser } from ".";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";
import paths from "@/paths";

async function updateUser(formData: FormData) {
  noStore();
  const { getUser } = getKindeServerSession();
  const authData = await getUser();
  const userData = await findUser(authData?.id as string);

  const updatedName = formData.get("name") as string;
  const updatedColorScheme = formData.get("color") as string;

  await db.user.update({
    where: {
      id: userData?.id,
    },

    data: {
      name: updatedName || userData?.name,
      colorScheme: updatedColorScheme || userData?.colorScheme,
    },
  });

  revalidatePath(paths.settings());
}

export { updateUser };

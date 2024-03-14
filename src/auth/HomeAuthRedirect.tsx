import { createUser } from "@/actions";
import paths from "@/paths";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { unstable_noStore as noStore } from "next/cache";

import { redirect } from "next/navigation";

type createUserType = {
  id: string;
  given_name: string;
  family_name: string;
  email: string;
};

async function HomeAuthRedirect() {
  noStore();

  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  if (user?.id) createUser(user as createUserType);

  if (await isAuthenticated()) return redirect(paths.life());

  return null;
}

export default HomeAuthRedirect;

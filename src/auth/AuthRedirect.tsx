import paths from "@/paths";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { unstable_noStore as noStore } from "next/cache";

import { redirect } from "next/navigation";
import { ReactNode } from "react";

async function AuthRedirect({ children }: { children: ReactNode }) {
  noStore();

  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) return redirect(paths.home());

  return <>{children}</>;
}

export default AuthRedirect;

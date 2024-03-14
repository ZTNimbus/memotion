import paths from "@/paths";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import UserNav from "./UserNav";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";

async function Navbar() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const isAuth = await isAuthenticated();
  const user = await getUser();

  return (
    <nav className="border-b flex items-center bg-background h-[7vh]">
      <div className="flex justify-between container items-center">
        <Link href={isAuth ? paths.life() : paths.home()}>
          <h1 className="font-bold text-3xl">Memotion.</h1>
        </Link>

        <div className="flex items-center gap-x-10">
          <div className="flex items-center gap-x-5">
            {!isAuth && (
              <>
                <LoginLink>
                  <Button>Sign In</Button>
                </LoginLink>

                <RegisterLink>
                  <Button variant="outline">Sign Up</Button>
                </RegisterLink>
              </>
            )}

            {isAuth && <UserNav user={user as KindeUser} />}
          </div>

          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import AuthRedirect from "@/auth/AuthRedirect";
import LifeNav from "@/components/LifeNav";
import { ReactNode } from "react";

function LifeLayout({ children }: { children: ReactNode }) {
  return (
    <AuthRedirect>
      <div className="flex flex-col space-y-6 mt-10">
        <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
          <aside className="hidden w-[200px] flex-col md:flex">
            <LifeNav />
          </aside>

          <main>{children}</main>
        </div>
      </div>
    </AuthRedirect>
  );
}

export default LifeLayout;

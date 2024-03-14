import HomeAuthRedirect from "@/auth/HomeAuthRedirect";
import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

function Home() {
  return (
    <main>
      <HomeAuthRedirect />
      <section className="flex items-center h-[93vh] justify-center bg-background">
        <div className="relative items-center w-full px-5 mx-auto py-12 lg:px-16 max-w-7xl md:px-12">
          <div className="max-w-3xl text-center mx-auto">
            <div className="flex flex-col items-center py-2">
              <span className="w-auto px-6 py-3 rounded-full bg-secondary">
                <span className="text-sm font-medium text-primary">
                  Sort your{" "}
                  <span className="underline underline-offset-2">life.</span>
                </span>
              </span>

              <h1 className="my-2 text-3xl tracking-tight font-extrabold lg:text-6xl lg:pb-2">
                Write down - Remember &
                <span className="font-light text-primary"> Re-live.</span>
              </h1>

              <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
                Memotion allows you to easily take down notes about anything in
                life.
              </p>
            </div>
          </div>

          <div className="flex justify-center max-w-min mx-auto mt-10">
            <RegisterLink>
              <Button size="lg" className="w-full">
                Try for Free
              </Button>
            </RegisterLink>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

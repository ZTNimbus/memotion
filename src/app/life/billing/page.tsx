import {
  createNewSubscription,
  createStripeCustomerPortal,
  findSubscription,
} from "@/actions";
import GoPremiumutton from "@/components/GoPremiumButton";
import StripePortal from "@/components/StripePortal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { CheckCircle2 } from "lucide-react";

const features = [
  { name: "Unlimited notes" },
  { name: "New themes" },
  { name: "Tester for future updates" },
  { name: "Request your desired features" },
  { name: "24/7 Customer service" },
];

async function BillingPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const subscription = await findSubscription(user?.id as string);

  const createNewSubscriptionAction = createNewSubscription.bind(
    null,
    user?.id as string
  );

  const createStripeCustomerPortalAction = createStripeCustomerPortal.bind(
    null,
    subscription?.user.stripeCustomerId as string
  );

  if (subscription?.status === "active") {
    return (
      <div className="grid items-start gap-8">
        <div className="flex items-center justify-between px-2">
          <div className="grid gap-1">
            <h1 className="text-3xl md:text-4xl">Subscription</h1>

            <p className="text-lg text-muted-foreground">
              Settings about your Premium
            </p>
          </div>
        </div>

        <Card className="w-full lg:w-3/2">
          <CardHeader>
            <CardTitle>Edit your subscription</CardTitle>

            <CardDescription>
              Click the button to view and change payment details.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form action={createStripeCustomerPortalAction}>
              <StripePortal />
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto space-y-4">
      <Card className="flex flex-col">
        <CardContent className="py-8">
          <div>
            <h3 className="bg-primary/10 rounded-full text-sm inline-flex px-4 py-1 font-semibold tracking-wide uppercase text-primary">
              Monthly
            </h3>
          </div>

          <div className="mt-4 items-baseline text-5xl font-extrabold">
            $5
            <span className="ml-1 text-2xl text-muted-foreground">/month</span>
          </div>

          <p className="mt-5 text-lg text-muted-foreground ">
            Enjoy Memotion Premium.
          </p>
        </CardContent>

        <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-secondary rounded-lg m-1 space-y-6 sm:p-10 sm:pt-6">
          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature.name} className="flex items-center">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-teal-500" />
                </div>

                <p className="ml-3 text-base">{feature.name}</p>
              </li>
            ))}
          </ul>

          <form className="w-full" action={createNewSubscriptionAction}>
            <GoPremiumutton>Go Premium</GoPremiumutton>
          </form>
        </div>
      </Card>
    </div>
  );
}

export default BillingPage;

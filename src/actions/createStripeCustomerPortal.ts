"use server";

import paths from "@/paths";
import { stripe } from "@/stripe";
import { redirect } from "next/navigation";

async function createStripeCustomerPortal(stripeCustomerId: string) {
  const session = await stripe.billingPortal.sessions.create({
    customer: stripeCustomerId,
    return_url: `${process.env.DOMAIN}${paths.life()}`,
  });

  return redirect(session.url);
}

export { createStripeCustomerPortal };

//3.10

"use server";

import { getStripeSession } from "@/stripe";
import { redirect } from "next/navigation";
import { findUser } from ".";

async function createNewSubscription(id: string) {
  const userInDb = await findUser(id);

  if (!userInDb?.stripeCustomerId)
    throw new Error("Could not find customer's Stripe ID.");

  const subscriptionUrl = await getStripeSession({
    customerId: userInDb.stripeCustomerId,
    domainUrl: process.env.DOMAIN as string,
    priceId: process.env.STRIPE_PRICE_ID as string,
  });

  return redirect(subscriptionUrl as string);
}

export { createNewSubscription };

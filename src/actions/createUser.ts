"use server";

import db from "@/db";
import { findUser } from ".";
import { stripe } from "@/stripe";

interface createUserProps {
  id: string;
  given_name: string;
  family_name: string;
  email: string;
}

async function createUser({
  id,
  given_name,
  family_name,
  email,
}: createUserProps) {
  const userInDb = await findUser(id);

  if (userInDb) return;

  const stripeData = await stripe.customers.create({
    email,
  });

  await db.user.create({
    data: {
      id,
      email,
      name: `${given_name || ""} ${family_name || ""}`,
      stripeCustomerId: stripeData.id,
    },
  });
}

export { createUser };

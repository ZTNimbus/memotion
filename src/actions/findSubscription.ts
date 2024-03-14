"use server";
import { unstable_noStore as noStore } from "next/cache";
import db from "@/db";

async function findSubscription(userId: string) {
  noStore();

  const data = await db.subscription.findUnique({
    where: { userId },
    select: {
      status: true,
      user: {
        select: {
          stripeCustomerId: true,
        },
      },
    },
  });

  return data;
}

export { findSubscription };

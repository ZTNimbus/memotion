import Stripe from "stripe";

interface stripeSessionProps {
  priceId: string;
  domainUrl: string;
  customerId: string;
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
  typescript: true,
});

async function getStripeSession({
  priceId,
  domainUrl,
  customerId,
}: stripeSessionProps) {
  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: "subscription",
    billing_address_collection: "auto",
    line_items: [{ price: priceId, quantity: 1 }],
    payment_method_types: ["card"],
    customer_update: {
      address: "auto",
      name: "auto",
    },
    success_url: `${domainUrl}/payments/success`,
    cancel_url: `${domainUrl}/payments/cancelled`,
  });

  return session.url;
}

export { stripe, getStripeSession };

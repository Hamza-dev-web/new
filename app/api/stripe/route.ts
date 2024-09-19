import { RequestHandler } from "next/dist/server/next";

import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY! )
export  async function POST (req:Request  ) {
    const {  body } : any = await  req.json();
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: body.amount as number,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
  return new   Response(JSON.stringify({
    
      clientSecret: paymentIntent.client_secret ,
      dpmCheckerLink: `https://dashboard.stripe.com/settings/payment_methods/review?transaction_id=${paymentIntent.id}`,
 } ))

  
  };

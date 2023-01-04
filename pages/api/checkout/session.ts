import type { NextApiRequest, NextApiResponse } from 'next'

import Stripe from 'stripe';
console.log(process.env.STRIPE_SECRET_KEY);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2022-11-15',
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const formData = req.body;
    const { quantity } = req.body;
    console.log(formData);
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            price: process.env.PRICE_ID,
            quantity
        }],
        mode: 'payment',
        metadata: {
            formData: JSON.stringify(formData),
        },
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/checkout`
    })
    res.status(200).json({ sessionId: session.id })
}
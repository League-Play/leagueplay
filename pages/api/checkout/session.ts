import type { NextApiRequest, NextApiResponse } from 'next'

import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2022-11-15',
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const formData = req.body;
    const { quantity } = req.body;
    const { tournament_id } = req.body
    let productId: string | undefined = "";
    switch (tournament_id) {
        case 1:
            productId = process.env.PRICE_ID1;
            break;
        case 2:
            productId = process.env.PRICE_ID2;
            break;
        case 3:
            productId = process.env.PRICE_ID3;
            break;
    }
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            price: productId,
            quantity
        }],
        mode: 'payment',
        metadata: {
            formData: JSON.stringify(formData),
        },
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}&tournament_id=${tournament_id}`,
        cancel_url: `${req.headers.origin}/signup?tournament_id=${tournament_id}`
    })
    res.status(200).json({ sessionId: session.id })
}
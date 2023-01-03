import { loadStripe } from '@stripe/stripe-js';

console.log("here");
console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);


export default function Checkout() {
    const handleClick = async () => {
        const { sessionId } = await fetch('api/checkout/session', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({quantity: 1})
        }).then(res => res.json())
        const stripe = await stripePromise;
        const error = await stripe?.redirectToCheckout({
            sessionId,
        })
    }
    return (
        <div>
            <h1>Hello</h1>
            <button role="link" onClick={handleClick}>
                Checkout
            </button>
        </div>
    )
}
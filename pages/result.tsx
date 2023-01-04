import { useRouter } from "next/router";
import useSWR from "swr";
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Result() {
    const router = useRouter();
    const { data, error } = useSWR(
        router.query.session_id
            ? `api/checkout/${router.query.session_id}`
            : null,
        (url) => fetch(url).then(res => res.json())
    )

    return (
        <div className="flex flex-col w-full">
            <Header />
            <div className="flex flex-col mx-auto min-h-screen bg-gray-200 w-full ">
                <svg
                    className="h-32 w-32 text-black self-center"
                    width="24" height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 12l2 2l4 -4" />
                </svg>
                <div className="md:text-5xl text-2xl font-bold font-color-black self-center">
                    Your Payment Was Successful!
                </div>
                <div className="md:text-3xl text-xl font-color-black p-5">
                    An email confirmation was sent with the event details and your team information. If you have any questions, text me at 201-888-629.
                </div>
                <div className="md:text-3xl text-xl font-color-black p-5 grow">
                    If you refer another team, you will receive $10 back at the tournament.
                </div>
                {/* <pre>
                    {data ? JSON.stringify(data, null, 2) : 'Loading...'}
                </pre> */}
                <Footer />
            </div>
        </div>
    )
}
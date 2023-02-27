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
    const tournament_id = router.query.tournament_id;
    let calendarlink = "";
    switch (tournament_id) {
        case "1":
            calendarlink = "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230225T223000Z%2F20230226T010000Z&details=Please%20arrive%2015%20minutes%20early%21%0AText%20me%20at%20201-888-6294%20with%20any%20questions.&location=1561%20Bedford%20Ave%2C%20Brooklyn%2011225&text=League%20Play%20Basketball%20Tournament";
            break;
        case "2":
            calendarlink = "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230305T020000Z%2F20230305T043000Z&details=Please%20arrive%2015%20minutes%20early%20to%20sign%20in.%20Text%20me%20at%20201-888-6294%20with%20any%20questions.&location=Major%20R.%20Owens%20Center%2C%201561%20Bedford%20Ave%2C%20Brooklyn%2011225&text=League%20Play%20Basketball%20Tournament";
            break;
        case "3":
            calendarlink = "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230225T170000Z%2F20230225T200000Z&details=Please%20arrive%2015%20minutes%20early%21%0AText%20me%20at%20201-407-6376%20with%20any%20questions.&location=Georgia%20Tech%20Campus%20Recreation%20Center%2C%20750%20Ferst%20Dr%2C%20Atlanta%2C%20GA%2030318%2C%20USA&text=League%20Play%20Basketball%20Tournament";
            break;
        case "4":
            calendarlink = "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230312T020000Z%2F20230312T043000Z&details=Please%20arrive%2015%20minutes%20early%20to%20sign%20in.%20Text%20me%20at%20201-888-6294%20with%20any%20questions.&location=Major%20R.%20Owens%20Center%2C%201561%20Bedford%20Ave%2C%20Brooklyn%2011225&text=League%20Play%20Basketball%20Tournament";
            break;
    }

    return (
        <div className="flex flex-col w-full">
            <Header />
            <div className="flex flex-col p-3 mx-auto min-h-screen w-full bg-[url('https://cdn.discordapp.com/attachments/835404318655119390/1061103104331874408/wp6994803.webp')]">
                <svg
                    className="h-32 w-32 text-white self-center"
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
                <div className="md:text-5xl text-2xl font-bold text-white self-center ">
                    Your Payment Was Successful!
                </div>
                <div className="md:text-3xl text-xl text-white p-5">
                    An email confirmation was sent with the event details and your team information. If you don’t see the email, make sure to check your spam folder. If you have any questions, text me at 201-888-6294.
                </div>
                <div className="md:text-3xl text-xl text-white p-5">
                    No refunds will be provided for cancellations within 48 hours.
                </div>
                <div className="md:text-3xl text-xl text-white p-5">
                    For every team you refer, you as an individual will receive $10 back at the tournament.
                </div>
                <div className="md:text-3xl text-xl text-white p-5">
                    Ex: If Michael refers 3 teams, Michael will get $30 at the tournament.
                </div>
                <div className="grow self-center p-5">
                    <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" href={calendarlink} target="_blank" rel="noreferrer">
                        <svg className="h-8 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="4" y="5" width="16" height="16" rx="2" />  <line x1="16" y1="3" x2="16" y2="7" />  <line x1="8" y1="3" x2="8" y2="7" />  <line x1="4" y1="11" x2="20" y2="11" />  <line x1="10" y1="16" x2="14" y2="16" />  <line x1="12" y1="14" x2="12" y2="18" /></svg>
                        Add Event to Calendar
                    </a>
                </div>
                <Footer />
            </div>
        </div>
    )
}
import React, { FunctionComponent, useState } from 'react'
import Footer from './Footer'
import Form from './Form'
import { useRouter } from "next/router";

const SignupContents: FunctionComponent = (props) => {
    const router = useRouter();
    const tournament_id = router.query.tournament_id;
    let date = "";
    let location = ""
    let format = ""
    let teammates = ""
    let fee = ""
    if (tournament_id == "1") {
        date = "February 25th, 2023, 5:30pm - 8:00pm";
        location = "Venue: Major R. Owens Center, 1561 Bedford Ave, Brooklyn 11225"
        format = "6-Team Round Robin, 5 Guaranteed Matches"
        teammates = "Teams of 4 mandatory. If you and your teammates are signing up separately, make sure to put the same team name."
        fee = "Entry Fee: $30/player"
    } else if (tournament_id == "2") {
        date = "March 4th, 2023, 5:30pm - 8:00pm";
        location = "Venue: Major R. Owens Center, 1561 Bedford Ave, Brooklyn 11225"
        format = "8-Team Double Elimination"
        teammates = "Teams of 4 mandatory. If you and your teammates are signing up separately, make sure to put the same team name."
        fee = "Entry Fee: $30/player"
    } else if (tournament_id == "3") {
        date = "February 25th, 2023, 12:00pm - 3:00pm";
        location = "Venue: Campus Recreation Center, 750 Ferst Drive Atlanta, GA 30332"
        format = "8-Team Double Elimination"
        teammates = "Teams of 3, max 2 subs. If you and your teammates are signing up separately, make sure to put the same team name."
        fee = "Entry Fee: $20/player"
    }

    return (
        <div className="flex flex-col mx-auto min-h-screen bg-[url('https://cdn.discordapp.com/attachments/835404318655119390/1061103104331874408/wp6994803.webp')] w-full">
            <div className="flex flex-col md:flex-row p-5 grow">
                <div className="grow pr-3">
                    <div className="md:text-5xl text-2xl pt-6 font-bold text-white self-center">
                        TOURNAMENT SIGNUP
                    </div>
                    <div className="md:text-2 text-2xl py-3 text-white self-center">
                        {date}
                    </div>
                    <div className="md:text-2 text-2xl py-3 text-white self-center">
                        {location}
                    </div>
                    <div className="md:text-2 text-2xl py-3 text-white self-center">
                        Indoor, half-court games to 21, 2’s and 3’s. Games are refereed.
                    </div>
                    <div className="md:text-2 text-2xl py-3 text-white self-center">
                        {format}
                    </div>
                    <div className="md:text-2 text-2xl py-3 text-white self-center">
                        {teammates}
                    </div>
                    <div className="md:text-2 text-2xl py-3 text-white self-center">
                        Projected Prize: $300
                    </div>
                    <div className="md:text-2 text-2xl py-3 text-white self-center">
                        {fee}
                    </div>
                </div>
                <Form
                    tournament_id={router.query.tournament_id ? +router.query.tournament_id : 1}
                />
            </div>
            <Footer />
        </div>
    )
}
export default SignupContents

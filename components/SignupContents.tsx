import React, { FunctionComponent, useState } from 'react'
import Footer from './Footer'
import Form from './Form'






const SignupContents: FunctionComponent = (props) => {
    return (
        <div className="flex flex-col mx-auto min-h-screen bg-[url('https://cdn.discordapp.com/attachments/835404318655119390/1061103104331874408/wp6994803.webp')] w-full">
            <div className="flex flex-col md:flex-row p-5 grow">
                <div className="grow">
                    <div className="md:text-5xl text-2xl pt-6 font-bold text-white self-center">
                        TOURNAMENT SIGNUP
                    </div>
                    <div className="md:text-2 text-2xl py-3 text-white self-center">
                        January 18th, 2023
                    </div>
                    <div className="md:text-2 text-2xl py-3 text-white self-center">
Venue: New Heights Youth, Inc., 1561 Bedford Ave, Brooklyn 11225 (two side-by-side full courts)
                    </div>
                    <div className="md:text-2 text-2xl py-3 text-white self-center">
                    Indoor, half-court games to 21, 2’s and 3’s. Games are refereed.
                    </div>
                    <div className="md:text-2 text-2xl py-3 text-white self-center">
Swiss Format: 4 Guaranteed Matches 
                    </div>
                    <div className="md:text-2 text-2xl py-3 text-white self-center">
Teams of 4, max 2 subs. If you fill out the form with less than 3 teammates, we will consider you and your friends free agents and fill the team with other players.
                    </div>
                    <div className="md:text-2 text-2xl py-3 text-white self-center">
Projected Prize: $1000
                    </div>
                    <div className="md:text-2 text-2xl py-3 text-white self-center">
Entry Fee: $25/ Player
                    </div>
                </div>
                <Form />
            </div>
            <Footer />
        </div>
    )
}
export default SignupContents

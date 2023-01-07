import React, { FunctionComponent } from 'react'
import Image from 'next/image'

const HomepageHero: FunctionComponent = () => (
    <div className="relative flex w-full min-h-[70vh]">
        <div className="blur-sm w-full min-h-full overflow-hidden relative z-0">
            <Image
                src="https://media.discordapp.net/attachments/835404318655119390/1059674004878786681/BasketballHero.jpeg"
                layout="fill"
                objectFit="cover"
                alt=""
            />
        </div>
        <div className="absolute grid place-items-center text-white z-0 h-full w-full">
            <div className="flex flex-col items-center">
                <div className="md:text-7xl text-5xl font-bold text-center mx-16 mb-8">
                    Continuous Skill Based Matchmaking
                </div>
                <div className="md:text-3xl text-xl font-bold pt-2 text-center mx-16">
                    Join Basketball Tournaments for a $500+ Prize Pool
                </div>
            </div>
        </div>
    </div>
)

export default HomepageHero

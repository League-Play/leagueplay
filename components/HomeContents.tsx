import React, { FunctionComponent, useState } from 'react'
import Footer from './Footer'
import HomepageHero from './HomepageHero'
import CardContainer from './CardContainer'

const HomeContents: FunctionComponent = (props) => {
    return (
        <div className="flex flex-col mx-auto min-h-screen bg-[url('https://cdn.discordapp.com/attachments/835404318655119390/1061103104331874408/wp6994803.webp')] w-full">
            <HomepageHero />
            <div className="md:text-5xl text-2xl py-5 md:py-10 font-bold text-white self-center">
                Sign Up for A Tournament
            </div>
            <CardContainer />
            <Footer />
        </div>
    )
}
export default HomeContents

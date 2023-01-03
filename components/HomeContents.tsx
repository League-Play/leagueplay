import React, { FunctionComponent, useState } from 'react'
import Footer from './Footer'
import HomepageHero from './HomepageHero'

const HomeContents: FunctionComponent = (props) => {
    return (
        <>
            <div className="flex flex-col mx-auto min-h-screen bg-gray-200">
                <HomepageHero />

                <div className="md:text-5xl text-2xl py-5 md:py-10 font-bold font-color-black self-center">
                    Sign Up for A Tournament
                </div>
                <Footer />
            </div>
        </>
    )
}
export default HomeContents

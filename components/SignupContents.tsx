import React, { FunctionComponent, useState } from 'react'
import Footer from './Footer'
import Form from './Form'
import Image from 'next/image'

const SignupContents: FunctionComponent = (props) => {
    return (
        <div className="flex flex-col mx-auto min-h-screen bg-[url('https://cdn.discordapp.com/attachments/835404318655119390/1061103104331874408/wp6994803.webp')] w-full">
            <div className="flex flex-row p-5 grow">
                <div className="grow">
                    <div className="md:text-5xl text-2xl pt-6 font-bold text-white self-center">
                        TOURNAMENT SIGNUP
                    </div>
                    <div className="md:text-2 text-2xl py-3 text-[#d8a690] self-center">
                        January 18th, 2023 at La Salle Academy
                    </div>
                </div>
                <Form />
            </div>
            <Footer />
        </div>
    )
}
export default SignupContents

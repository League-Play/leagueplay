import React, { FunctionComponent, useState } from 'react'
import Footer from './Footer'
import Form from './Form'

const SignupContents: FunctionComponent = (props) => {
    return (
        <div className="flex flex-col mx-auto min-h-screen bg-gray-200 w-full">
            <div className="md:text-5xl text-2xl pt-6 ont-bold font-color-black self-center">
                8-Team 3v3 Tournament Signup
            </div>
            <div className="md:text-2 text-2xl py-3 ont-color-black self-center">
                January 18th, 2023 at La Salle Academy
            </div>
            <Form />
            <Footer />
        </div>
    )
}
export default SignupContents

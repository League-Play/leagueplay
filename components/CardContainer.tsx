import React, { FunctionComponent } from 'react'
import Image from 'next/image'

const CardContainer: FunctionComponent = () => (
    <div className="flex flex-col">
        <a className="flex justify-center p-8" href={"signup?tournament_id=1"}>
            <div className="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5 hover:bg-gray-100">
                <div className="w-full h-64 bg-top bg-cover rounded-t bg-[url('https://cdn.discordapp.com/attachments/835404318655119390/1059949125682081873/People.png')]">
                </div>
                <div className="flex flex-col w-full md:flex-row">
                    <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                        <div className="md:text-3xl">Jan</div>
                        <div className="md:text-6xl">21</div>
                        <div className="md:text-xl">7 pm</div>
                    </div>
                    <div className="font-normal text-gray-800 flex flex-col w-full">
                        <div className="p-4">
                            <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">8-Team 3v3 Tournament </h1>
                            <p className="leading-normal">Indoor 3v3 Tournament with a $500 prize pool</p>
                            <br />
                            <p className="leading-normal">Buy In: $30 per player</p>
                            <br />
                            <p className="leading-normal">La Salle Academy: 215 E 6th St, New York, NY 10003</p>
                        </div>
                        <div className="grid place-items-center p-3 text-indigo-500 w-full border-t border-gray-300">
                            <div className="flex flex-row items-center w-auto text-sm md:text-lg">
                                <div>
                                    Click here to sign up as a free agent or a team.
                                </div>
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 ml-1"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
        <a className="flex justify-center p-8" href={"signup?tournament_id=2"}>
            <div className="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5 hover:bg-gray-100">
                <div className="w-full h-64 bg-top bg-cover rounded-t bg-[url('https://cdn.discordapp.com/attachments/835404318655119390/1059949125682081873/People.png')]">
                </div>
                <div className="flex flex-col w-full md:flex-row">
                    <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                        <div className="md:text-3xl">Feb</div>
                        <div className="md:text-6xl">4</div>
                        <div className="md:text-xl">6 pm</div>
                    </div>
                    <div className="font-normal text-gray-800 flex flex-col w-full">
                        <div className="p-4">
                            <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">5-Team 4v4 Tournament</h1>
                            <p className="leading-normal">5 Team Round-Robin Tournament with $200 prize pool</p>
                            <br />
                            <p className="leading-normal">Buy In: $20 per player</p>
                            <br />
                            <p className="leading-normal">La Salle Academy: 215 E 6th St, New York, NY 10003</p>
                        </div>
                        <div className="grid place-items-center p-3 text-indigo-500 w-full border-t border-gray-300">
                            <div className="flex flex-row items-center w-auto text-sm md:text-lg">
                                <div>
                                    Click here to sign up as a free agent or a team.
                                </div>
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 ml-1"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
)

export default CardContainer

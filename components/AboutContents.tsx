import React, { FunctionComponent } from 'react'
import Image from 'next/image'

const AboutContents: FunctionComponent = () => {
    return (
        <section className="text-gray-600 body-fon bg-[url('https://cdn.discordapp.com/attachments/835404318655119390/1061103104331874408/wp6994803.webp')]">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                        Our Team
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-200">
                        The League Play team is committed to providing the best basketball tournament experience possible.
                    </p>
                </div>

                <div className="flex flex-wrap -m-2">
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 bg-white">
                            <div className="w-16 h-16 bg-gray-100 flex-shrink-0 relative mr-4">
                                <Image
                                    src="https://cdn.discordapp.com/attachments/835404318655119390/1008446216213889055/eric.jpeg"
                                    alt="team"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">
                                    Eric Ming
                                </h2>
                                <p className="text-gray-500">UI Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 bg-white">
                            <div className="w-16 h-16 bg-gray-100 flex-shrink-0 relative mr-4">
                                <Image
                                    src="https://cdn.discordapp.com/attachments/835404318655119390/1008446216213889055/eric.jpeg"
                                    alt="team"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">
                                    Eric Ming
                                </h2>
                                <p className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 bg-white">
                            <div className="w-16 h-16 bg-gray-100 relative flex-shrink-0 rounded-full mr-4">
                                <Image
                                    alt="team"
                                    className="w-16 h-16 bg-gray-100 relative flex-shrink-0 rounded-full mr-4"
                                    src="https://cdn.discordapp.com/attachments/835404318655119390/1008446216213889055/eric.jpeg"
                                    objectFit="cover"
                                    layout="fill"
                                />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">
                                    Eric Ming
                                </h2>
                                <p className="text-gray-500">Founder</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 bg-white">
                            <div className="w-16 h-16 bg-gray-100 relative flex-shrink-0 rounded-full mr-4">
                                <Image
                                    alt="team"
                                    className="w-16 h-16 bg-gray-100 relative flex-shrink-0 rounded-full mr-4"
                                    src="https://cdn.discordapp.com/attachments/835404318655119390/1008446216213889055/eric.jpeg"
                                    objectFit="cover"
                                    layout="fill"
                                />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">
                                    Eric Ming
                                </h2>
                                <p className="text-gray-500">DevOps</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 bg-white">
                            <div className="w-16 h-16 bg-gray-100 relative flex-shrink-0 rounded-full mr-4">
                                <Image
                                    alt="team"
                                    className="w-16 h-16 bg-gray-100 relative flex-shrink-0 rounded-full mr-4"
                                    src="https://cdn.discordapp.com/attachments/835404318655119390/1008446216213889055/eric.jpeg"
                                    objectFit="cover"
                                    layout="fill"
                                />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">
                                    Eric Ming
                                </h2>
                                <p className="text-gray-500">
                                    Software Engineer
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 bg-white">
                            <div className="w-16 h-16 bg-gray-100 relative flex-shrink-0 rounded-full mr-4">
                                <Image
                                    alt="team"
                                    className="w-16 h-16 bg-gray-100 relative flex-shrink-0 rounded-full mr-4"
                                    src="https://cdn.discordapp.com/attachments/835404318655119390/1008446216213889055/eric.jpeg"
                                    objectFit="cover"
                                    layout="fill"
                                />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">
                                    Eric Ming
                                </h2>
                                <p className="text-gray-500">UX Researcher</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 bg-white">
                            <div className="w-16 h-16 bg-gray-100 relative flex-shrink-0 rounded-full mr-4">
                                <Image
                                    alt="team"
                                    className="w-16 h-16 bg-gray-100 relative flex-shrink-0 rounded-full mr-4"
                                    src="https://cdn.discordapp.com/attachments/835404318655119390/1008446216213889055/eric.jpeg"
                                    objectFit="cover"
                                    layout="fill"
                                />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">
                                    Eric Ming
                                </h2>
                                <p className="text-gray-500">QA Engineer</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 bg-white">
                            <div className="w-16 h-16 bg-gray-100 relative flex-shrink-0 rounded-full mr-4">
                                <Image
                                    alt="team"
                                    className="w-16 h-16 bg-gray-100 relative flex-shrink-0 rounded-full mr-4"
                                    src="https://cdn.discordapp.com/attachments/835404318655119390/1008446216213889055/eric.jpeg"
                                    objectFit="cover"
                                    layout="fill"
                                />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">
                                    Eric Ming
                                </h2>
                                <p className="text-gray-500">System</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 bg-white">
                            <div className="w-16 h-16 bg-gray-100 relative flex-shrink-0 rounded-full mr-4">
                                <Image
                                    alt="team"
                                    className="w-16 h-16 bg-gray-100 relative flex-shrink-0 rounded-full mr-4"
                                    src="https://cdn.discordapp.com/attachments/835404318655119390/1008446216213889055/eric.jpeg"
                                    objectFit="cover"
                                    layout="fill"
                                />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">
                                    Eric Ming
                                </h2>
                                <p className="text-gray-500">Product Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutContents

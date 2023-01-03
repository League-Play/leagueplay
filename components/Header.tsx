import React, { FunctionComponent, useState } from 'react'
import Link from 'next/link'

const Header: FunctionComponent = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className="z-50 w-full bg-white">
            <nav className="text-gray-600 body-font">
                <button
                    className="absolute md:hidden align-middle m-5"
                    onClick={() => setOpenMenu(true)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
                <div className="container grid place-items-center md:flex md:items-center p-5 md:mx-auto md:flex-row">
                    <Link href="/">
                        <a className="flex flex-row items-center font-medium text-gray-900 title-font">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                stroke="white"
                                fill="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-lg"
                            >
                                <path d="M389.376 0H122.624c-5.632 0-10.199 4.566-10.199 10.199v491.602c0 5.633 4.567 10.199 10.199 10.199h266.752c5.632 0 10.199-4.566 10.199-10.199V10.199C399.575 4.566 395.008 0 389.376 0zm-91.45 491.602h-31.727v-31.193c0-5.633-4.567-10.199-10.199-10.199s-10.199 4.566-10.199 10.199v31.193h-31.726v-85.383h83.851v85.383zm81.252 0h-60.855V396.02c0-5.633-4.567-10.199-10.199-10.199H203.876c-5.632 0-10.199 4.566-10.199 10.199v95.582h-60.854V20.398h246.355v471.204z" />
                                <path d="M230.96 43.436h-63.367c-5.632 0-10.199 4.566-10.199 10.199v63.367c0 5.633 4.567 10.199 10.199 10.199h63.367c5.632 0 10.199-4.566 10.199-10.199V53.636c0-5.633-4.567-10.2-10.199-10.2zm-10.199 63.367h-42.968V63.835h42.968v42.968zM344.407 43.436H281.04c-5.632 0-10.199 4.566-10.199 10.199v63.367c0 5.633 4.566 10.199 10.199 10.199h63.367c5.632 0 10.199-4.566 10.199-10.199V53.636c0-5.633-4.567-10.2-10.199-10.2zm-10.199 63.367H291.24V63.835h42.968v42.968zM230.96 155.861h-63.367c-5.632 0-10.199 4.566-10.199 10.199v63.367c0 5.633 4.567 10.199 10.199 10.199h63.367c5.632 0 10.199-4.566 10.199-10.199V166.06c0-5.633-4.567-10.199-10.199-10.199zm-10.199 63.367h-42.968V176.26h42.968v42.968zM344.407 155.861H281.04c-5.632 0-10.199 4.566-10.199 10.199v63.367c0 5.633 4.566 10.199 10.199 10.199h63.367c5.632 0 10.199-4.566 10.199-10.199V166.06c0-5.633-4.567-10.199-10.199-10.199zm-10.199 63.367H291.24V176.26h42.968v42.968zM230.96 268.286h-63.367c-5.632 0-10.199 4.566-10.199 10.199v63.367c0 5.633 4.567 10.199 10.199 10.199h63.367c5.632 0 10.199-4.566 10.199-10.199v-63.367c0-5.633-4.567-10.199-10.199-10.199zm-10.199 63.367h-42.968v-42.968h42.968v42.968zM344.407 268.286H281.04c-5.632 0-10.199 4.566-10.199 10.199v63.367c0 5.633 4.566 10.199 10.199 10.199h63.367c5.632 0 10.199-4.566 10.199-10.199v-63.367c0-5.633-4.567-10.199-10.199-10.199zm-10.199 63.367H291.24v-42.968h42.968v42.968zM256 418.526c-5.632 0-10.199 4.566-10.199 10.199v1.022c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199v-1.022c0-5.632-4.567-10.199-10.199-10.199z" />
                            </svg>
                            <span className="ml-2 text-2xl md:text-xl">
                                Housling
                            </span>
                        </a>
                    </Link>
                    <nav className="flex flex-wrap hidden md:block items-center justify-center text-base mr-auto ml-4 py-1 pl-4 border-l border-gray-400">
                        <Link href="/">
                            <a className="mr-5 hover:text-gray-900">Home</a>
                        </Link>
                        <Link href="contact">
                            <a className="mr-5 hover:text-gray-900">Contact</a>
                        </Link>
                        <Link href="about">
                            <a className="mr-5 hover:text-gray-900">About</a>
                        </Link>
                    </nav>
                    <button className="hidden md:inline-flex items-center px-3 py-1 mx-4 mt-4 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0">
                        Post a Sublease
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
                    </button>
                    <button className="hidden md:inline-flex items-center px-3 py-1 mx-4 mt-4 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0">
                        Write a Review
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
                    </button>
                </div>
                <nav
                    id="mobile-navigation"
                    className={
                        openMenu
                            ? 'fixed top-0 right-0 bottom-0 left-0 bg-gray-900/50 z-10'
                            : 'hidden'
                    }
                >
                    <div className="absolute flex flex-col top-0 left-0 bottom-0 w-2/3 z-10 transition-all bg-white">
                        <div className="flex flex-row p-5 border-b border-gray-300">
                            <a className="flex flex-row items-center font-medium text-gray-900 title-font grow">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    stroke="white"
                                    fill="white"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-lg"
                                >
                                    <path d="M389.376 0H122.624c-5.632 0-10.199 4.566-10.199 10.199v491.602c0 5.633 4.567 10.199 10.199 10.199h266.752c5.632 0 10.199-4.566 10.199-10.199V10.199C399.575 4.566 395.008 0 389.376 0zm-91.45 491.602h-31.727v-31.193c0-5.633-4.567-10.199-10.199-10.199s-10.199 4.566-10.199 10.199v31.193h-31.726v-85.383h83.851v85.383zm81.252 0h-60.855V396.02c0-5.633-4.567-10.199-10.199-10.199H203.876c-5.632 0-10.199 4.566-10.199 10.199v95.582h-60.854V20.398h246.355v471.204z" />
                                    <path d="M230.96 43.436h-63.367c-5.632 0-10.199 4.566-10.199 10.199v63.367c0 5.633 4.567 10.199 10.199 10.199h63.367c5.632 0 10.199-4.566 10.199-10.199V53.636c0-5.633-4.567-10.2-10.199-10.2zm-10.199 63.367h-42.968V63.835h42.968v42.968zM344.407 43.436H281.04c-5.632 0-10.199 4.566-10.199 10.199v63.367c0 5.633 4.566 10.199 10.199 10.199h63.367c5.632 0 10.199-4.566 10.199-10.199V53.636c0-5.633-4.567-10.2-10.199-10.2zm-10.199 63.367H291.24V63.835h42.968v42.968zM230.96 155.861h-63.367c-5.632 0-10.199 4.566-10.199 10.199v63.367c0 5.633 4.567 10.199 10.199 10.199h63.367c5.632 0 10.199-4.566 10.199-10.199V166.06c0-5.633-4.567-10.199-10.199-10.199zm-10.199 63.367h-42.968V176.26h42.968v42.968zM344.407 155.861H281.04c-5.632 0-10.199 4.566-10.199 10.199v63.367c0 5.633 4.566 10.199 10.199 10.199h63.367c5.632 0 10.199-4.566 10.199-10.199V166.06c0-5.633-4.567-10.199-10.199-10.199zm-10.199 63.367H291.24V176.26h42.968v42.968zM230.96 268.286h-63.367c-5.632 0-10.199 4.566-10.199 10.199v63.367c0 5.633 4.567 10.199 10.199 10.199h63.367c5.632 0 10.199-4.566 10.199-10.199v-63.367c0-5.633-4.567-10.199-10.199-10.199zm-10.199 63.367h-42.968v-42.968h42.968v42.968zM344.407 268.286H281.04c-5.632 0-10.199 4.566-10.199 10.199v63.367c0 5.633 4.566 10.199 10.199 10.199h63.367c5.632 0 10.199-4.566 10.199-10.199v-63.367c0-5.633-4.567-10.199-10.199-10.199zm-10.199 63.367H291.24v-42.968h42.968v42.968zM256 418.526c-5.632 0-10.199 4.566-10.199 10.199v1.022c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199v-1.022c0-5.632-4.567-10.199-10.199-10.199z" />
                                </svg>
                                <span className="ml-3 text-2xl">Housling</span>
                            </a>
                            <button onClick={() => setOpenMenu(false)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <ul className="py-4 z-10 transition-all text-xl border-b border-gray-300">
                            <li>
                                <Link href="/">
                                    <a
                                        className="block p-4"
                                        aria-current="true"
                                    >
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="contact">
                                    <a className="block p-4">Contact</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="about">
                                    <a className="block p-4">About</a>
                                </Link>
                            </li>
                        </ul>
                        <ul className="py-4 z-10 transition-all text-xl border-b border-gray-300">
                            <li>
                                <Link href="/">
                                    <a
                                        className="block p-4"
                                        aria-current="true"
                                    >
                                        Post a Sublease
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a className="block p-4">Write a Review</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </nav>
        </div>
    )
}

export default Header

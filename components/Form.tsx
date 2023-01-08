import React, { FunctionComponent, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

type Teammate = {
    firstName: string,
    lastName: string
}

type FormData = {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    team: string,
    referredBy: string,
    teammates: Teammate[],
    fullTeam: boolean
}

const Form: FunctionComponent = () => {
    const [individual, setIndividual] = useState(true);
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        team: "",
        referredBy: "",
        teammates: [],
        fullTeam: false
    })
    const [formTouched, setFormTouched] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phoneNumber: false,
        teammates: [{
            firstName: false,
            lastName: false
        },
        {
            firstName: false,
            lastName: false
        },
        {
            firstName: false,
            lastName: false
        },
        {
            firstName: false,
            lastName: false
        },
        {
            firstName: false,
            lastName: false
        },
        ],
        fullTeam: false,
    })
    const handleCheckout = async () => {
        let allowCheckout = true;
        let newFormTouched = { ...formTouched }
        let newTeammates = [...formTouched.teammates]
        if (formData.firstName.length == 0) {
            newFormTouched.firstName = true;
            allowCheckout = false;
        }
        if (formData.lastName.length == 0) {
            newFormTouched.lastName = true;
            allowCheckout = false;
        }
        if (formData.email.length == 0) {
            newFormTouched.email = true;
            allowCheckout = false;
        }
        if (formData.phoneNumber.length == 0) {
            newFormTouched.phoneNumber = true;
            allowCheckout = false;
        }
        for (let teammateInd = 0; teammateInd < formData.teammates.length; teammateInd++) {
            if (formData.teammates[teammateInd].firstName.length == 0) {
                newTeammates[teammateInd].firstName = true;
                allowCheckout = false;
            }
            if (formData.teammates[teammateInd].lastName.length == 0) {
                newTeammates[teammateInd].lastName = true;
                allowCheckout = false;
            }
        }
        if (allowCheckout) {
            const body =
                JSON.stringify({ quantity: formData.teammates.length + 1, formData: formData })
            const { sessionId } = await fetch('api/checkout/session', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ quantity: formData.teammates.length + 1, formData: formData })
            }).then(res => res.json())
            const stripe = await stripePromise;
            const error = await stripe?.redirectToCheckout({
                sessionId,
            })
        } else {
            newFormTouched.teammates = newTeammates;
            setFormTouched(newFormTouched);
        }
    }
    const handleTouched = (event: any) => {
        if (event.target.name.includes("fName") || event.target.name.includes("lName")) {
            const player = event.target.name;
            const index = parseInt(player.charAt(player.length - 1));
            const newTeammates = [...formTouched.teammates];
            if (player.includes("fName")) {
                if (formData.teammates[index].firstName.length == 0) {
                    newTeammates[index].firstName = true;
                } else {
                    newTeammates[index].firstName = false;
                }
            } else {
                if (formData.teammates[index].lastName.length == 0) {
                    newTeammates[index].lastName = true;
                } else {
                    newTeammates[index].lastName = false;
                }
            }
            setFormTouched({ ...formTouched, teammates: newTeammates })
        } else {
            const key = formData[event.target.name as keyof FormData] as string;
            if (key.length == 0) {
                setFormTouched({ ...formTouched, [event.target.name]: true });
            } else {
                setFormTouched({ ...formTouched, [event.target.name]: false });
            }
        }
    }
    const handleChange = (event: any) => {
        if (event.target.name.includes("fName") || event.target.name.includes("lName")) {
            const player = event.target.name;
            const index = parseInt(player.charAt(player.length - 1));
            const newTeammates = [...formData.teammates];
            if (player.includes("fName")) {
                newTeammates[index].firstName = event.target.value;
            } else {
                newTeammates[index].lastName = event.target.value;
            }
            setFormData({ ...formData, teammates: newTeammates })
        } else {
            setFormData({ ...formData, [event.target.name]: event.target.value });
        }
    };
    const handleAddTeammate = () => {
        if (formData.teammates.length < 5) {
            setFormData({
                ...formData, teammates:
                    [
                        ...formData.teammates,
                        {
                            firstName: "",
                            lastName: ""
                        }
                    ]
            });
        }
    };
    const handleRemoveTeammate = (event: any) => {
        const player = event.target.id;
        const index = parseInt(player.charAt(player.length - 1));
        const newTeammates = [...formData.teammates];
        newTeammates.splice(index, 1);
        setFormData({ ...formData, teammates: newTeammates })
        setFormTouched({
            ...formTouched, teammates: [{
                firstName: false,
                lastName: false
            },
            {
                firstName: false,
                lastName: false
            },
            {
                firstName: false,
                lastName: false
            },
            {
                firstName: false,
                lastName: false
            },
            ]
        })
    }
    const renderTeammates = () => {
        return formData.teammates.map((teamMember, index) => (
            <div className="flex flex-row -mx-3 mb-6" key={index}>
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${formTouched.teammates[index].firstName ? "border-red-500" : "border-gray-200"}`}
                        name={`fName${index}`}
                        value={teamMember.firstName}
                        onChange={handleChange}
                        onBlur={handleTouched}
                        type="text" />
                    <p className={`text-red-500 text-xs italic ${formTouched.teammates[index].firstName ? "" : "hidden"}`} >Please fill out this field.</p>
                </div>
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${formTouched.teammates[index].lastName ? "border-red-500" : "border-gray-200"}`}
                        name={`lName${index}`}
                        value={teamMember.lastName}
                        onChange={handleChange}
                        onBlur={handleTouched}
                        type="text" />
                    <p className={`text-red-500 text-xs italic ${formTouched.teammates[index].lastName ? "" : "hidden"}`} >Please fill out this field.</p>
                </div>
                <button
                    type="button"
                    id={`button${index}`}
                    className="self-center h-8 w-8 text-white bg-red-200 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 "
                    onClick={handleRemoveTeammate}>
                    <svg
                        id={`button${index}`}
                        className="h-4 w-4 text-white"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />  <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    <span className="sr-only">Icon description</span>
                </button>
            </div>
        ))
    }
    return (
        <form className="w-full max-w-xl self-center bg-gray-50 p-5">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${formTouched.firstName ? "border-red-500" : "border-gray-200"}`}
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        onBlur={handleTouched}
                        type="text" />
                    <p className={`text-red-500 text-xs italic ${formTouched.firstName ? "" : "hidden"}`} >Please fill out this field.</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${formTouched.lastName ? "border-red-500" : "border-gray-200"}`}
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        onBlur={handleTouched}
                        type="text" />
                    <p className={`text-red-500 text-xs italic ${formTouched.lastName ? "" : "hidden"}`} >Please fill out this field.</p>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6 space-y-3">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${formTouched.email ? "border-red-500" : "border-gray-200"}`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleTouched}
                        type="text" />
                    <p className={`text-red-500 text-xs italic ${formTouched.email ? "" : "hidden"}`} >Please fill out this field.</p>
                </div>
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phoneNumber">
                        Phone Number
                    </label>
                    <input
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${formTouched.phoneNumber ? "border-red-500" : "border-gray-200"}`}
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleTouched}
                        type="text" />
                    <p className={`text-red-500 text-xs italic ${formTouched.phoneNumber ? "" : "hidden"}`} >Please fill out this field.</p>
                </div>
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="teamName">
                        Team Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="team"
                        name="team"
                        value={formData.team}
                        onChange={handleChange}
                        onBlur={handleTouched}
                        type="text" />
                </div>
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="referredBy">
                        Referred By
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="referredBy"
                        name="referredBy"
                        value={formData.referredBy}
                        onChange={handleChange}
                        onBlur={handleTouched}
                        type="text" />
                </div>
                <div className="inline-flex rounded-md shadow-sm px-3" role="group">
                    <button type="button" onClick={() => { setIndividual(true) }} className={`px-4 py-2 text-sm font-medium bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white ${individual ? "z-10 ring-2 ring-gray-500 bg-gray-900 text-white" : "text-gray-700 "}`}>
                        SIGNING UP AND PAYING FOR MYSELF
                    </button>
                    <button type="button" onClick={() => { setIndividual(false) }} className={`px-4 py-2 text-sm font-medium bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white ${!individual ? "z-10 ring-2 ring-gray-500 bg-gray-900 text-white" : "text-gray-700 "}`}>
                        SIGNING UP AND PAYING FOR A TEAM
                    </button>
                </div>
                <div className={`w-full px-3 ${individual ? "hidden" : ""}`}>
                    <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Add Teammates (not including yourself)
                    </div>
                    {renderTeammates()}
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
                        onClick={handleAddTeammate}>
                        <svg className="h-4 w-4 text-white" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg>
                        <span className="sr-only">Icon description</span>
                    </button>
                </div>
            </div>
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                    <input id="terms" type="checkbox" value="" onClick={() => { setFormData({ ...formData, fullTeam: !formData.fullTeam }) }} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required />
                </div>
                <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 ">I am part of a full team and do not need free agents to fill my team.</label>
            </div>
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                    <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required />
                </div>
                <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 ">I agree with the <a href="https://leagueplaywaiver.tiiny.site/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">terms and conditions</a></label>
            </div>
            <button role="link" onClick={handleCheckout} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
                Pay and Sign Up
            </button>
        </form>
    )

}
export default Form

import React, { FunctionComponent, useState } from 'react'

type Teammate = {
    firstName: string,
    lastName: string
}

type FormData = {
    firstName: string | undefined,
    lastName: string,
    email: string,
    phoneNumber: string,
    team: string,
    teammates: Teammate[],
}

const Form: FunctionComponent = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: undefined,
        lastName: "",
        email: "",
        phoneNumber: "",
        team: "",
        teammates: [],
    })
    const handleChange = (event: any) => {
        console.log(event);
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
        if (formData.teammates.length < 4) {
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
        } else {
            //Todo
        }
    };
    const handleRemoveTeammate = (event: any) => {
        const player = event.target.id;
        const index = parseInt(player.charAt(player.length - 1));
        const newTeammates = [...formData.teammates];
        newTeammates.splice(index, 1);
        setFormData({ ...formData, teammates: newTeammates })
    }
    const renderTeammates = () => {
        return formData.teammates.map((teamMember, index) => (
            <div className="flex flex-row -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        name={`fName${index}`}
                        value={teamMember.firstName}
                        onChange={handleChange}
                        type="text" />
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name={`lName${index}`}
                        value={teamMember.lastName}
                        onChange={handleChange}
                        type="text" />
                </div>
                <button
                    type="button"
                    id={`button${index}`}
                    className="self-center h-8 w-8 text-white bg-red-200 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    onClick={handleRemoveTeammate}>
                    <svg
                        id={`button${index}`}
                        className="h-4 w-4 text-white"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />  <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    <span className="sr-only">Icon description</span>
                </button>
            </div>
        ))
    }
    return (
        <form className="w-full max-w-lg self-center bg-gray-50 p-5">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        type="text" />
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        type="text" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6 space-y-3">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="text" />
                </div>
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phoneNumber">
                        Phone Number
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        type="text" />
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
                        type="text" />
                </div>
                <div className="w-full px-3">
                    <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Add Teammates (not including yourself)
                    </div>
                    {renderTeammates()}
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={handleAddTeammate}>
                        <svg className="h-4 w-4 text-white" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg>
                        <span className="sr-only">Icon description</span>
                    </button>
                </div>
            </div>
        </form>
    )

}
export default Form

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { applicantEdited } from '../login_page/loginSlice';

export const EditApplicant = ({ setShowEdit, applicant }) => {
    const [firstName, setFirstName] = useState(`${applicant.first_name}`)
    const [lastName, setLastName] = useState(`${applicant.last_name}`)
    const [email, setemail] = useState(`${applicant.email}`)
    const [phone, setPhone] = useState(`${applicant.phone}`)
    const [position, setPosition] = useState(`${applicant.position}`)
    const [city, setCity] = useState(`${applicant.city}`)
    const [state, setState] = useState(`${applicant.state}`)
    const dispatch = useDispatch()

    const onFirstNameChange = (e) => setFirstName(e.target.value)
    const onLastNameChange = (e) => setLastName(e.target.value)
    const onEmailChange = (e) => setemail(e.target.value)
    const onPhoneChange = (e) => setPhone(e.target.value)
    const onPositionChange = (e) => setPosition(e.target.value)
    const onCityChange = (e) => setCity(e.target.value)
    const onStateChange = (e) => setState(e.target.value)

    const handleEditSubmitClick = (e) => {
        e.preventDefault()
        const data = {first_name: firstName, last_name: lastName, email: email, phone: phone, position: position, city: city, state: state, id: applicant.id}
        fetch (`/applicants/${applicant.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(data),
        })
        .then((r) => r.json())
        .then((applicant) => dispatch(applicantEdited(applicant)))
        setShowEdit(false)
    }
    
    return (
        <form onSubmit={handleEditSubmitClick}>
            <label>First Name:</label>
            <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type='text' value={firstName} onChange={onFirstNameChange} />
            <label>Last Name:</label>
            <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type='text' value={lastName} onChange={onLastNameChange} />
            <label>Email:</label>
            <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type='text' value={email} onChange={onEmailChange} />
            <label>Phone Number:</label>
            <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type='number' value={phone} onChange={onPhoneChange} />
            <label>Position:</label>
            <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type='text' value={position} onChange={onPositionChange} />
            <label>City:</label>
            <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type='text' value={city} onChange={onCityChange} />
            <label>State:</label>
            <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type='text' value={state} onChange={onStateChange} />
            <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Submit</button>
        </form>
    )
}
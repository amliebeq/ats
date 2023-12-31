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
    const [errors, setErrors] = useState([])
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
        .then ((r) => {
            if (r.ok) {
                r.json().then ((applicant) => dispatch(applicantEdited(applicant)))
                setShowEdit(false)
            }
            else {
                r.json().then((errors) => setErrors(errors.errors))
            }
        })  
    }
    
    return (
        <form onSubmit={handleEditSubmitClick}>
            <label className="block mb-2 font-bold">First Name:</label>
            <input className="w-full px-3 py-2 mb-2 border rounded-lg" value={firstName} onChange={onFirstNameChange} />
            <label className="block mb-2 font-bold">Last Name:</label>
            <input className="w-full px-3 py-2 mb-2 border rounded-lg" value={lastName} onChange={onLastNameChange} />
            <label className="block mb-2 font-bold">Email:</label>
            <input className="w-full px-3 py-2 mb-2 border rounded-lg" value={email} onChange={onEmailChange} />
            <label className="block mb-2 font-bold">Phone Number:</label>
            <input className="w-full px-3 py-2 mb-2 border rounded-lg" type='number' value={phone} onChange={onPhoneChange} />
            <label className="block mb-2 font-bold">Position:</label>
            <input className="w-full px-3 py-2 mb-2 border rounded-lg" value={position} onChange={onPositionChange} />
            <label className="block mb-2 font-bold">City:</label>
            <input className="w-full px-3 py-2 mb-2 border rounded-lg" value={city} onChange={onCityChange} />
            <label className="block mb-2 font-bold">State:</label>
            <input className="w-full px-3 py-2 mb-2 border rounded-lg" value={state} onChange={onStateChange} />
            {errors.length === 0 ? null : errors.map(error => <p className='text-lg text-center text-red-600' key={error}>{error}</p>)}
            <button className='block w-full p-3 text-center text-white duration-300 bg-indigo-500 rounded-lg hover:bg-indigo-600'>Submit</button>
        </form>
    )
}
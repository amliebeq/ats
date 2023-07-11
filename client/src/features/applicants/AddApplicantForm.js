import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applicantAdded } from '../login_page/loginSlice';

export const AddApplicantForm = () => {
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [position, setPosition] = useState('')
    const [applicantFormVisible, setApplicantFormVisible] = useState(false)
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()
    const user = useSelector(state => state.login.user)

    const onVisibleClick = () => setApplicantFormVisible(!applicantFormVisible)

    const handleCityChange = (e) => setCity(e.target.value)
    const handleEmailChange = (e) => setEmail(e.target.value)
    const handleLastNameChange = (e) => setLastName(e.target.value)
    const handleFirstNameChange = (e) => setFirstName(e.target.value)
    const handlePhoneChange = (e) => setPhone(e.target.value)
    const handleStateChange = (e) => setState(e.target.value)
    const handlePositionChange = (e) => setPosition(e.target.value)

    const handleNewApplicantClick = (e) => {
        e.preventDefault()
        const data = {
            city,
            state,
            email,
            first_name: firstName,
            last_name: lastName,
            phone,
            user_id: user.id,
            position            
        }
        fetch ('/applicants' , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), 
        })
        .then ((r) => {
            if (r.ok) {
                r.json().then ((data) => dispatch(applicantAdded(data)))
                setApplicantFormVisible(false)
                setCity('')
                setEmail('')
                setFirstName('')
                setLastName('')
                setPhone('')
                setPosition('')
            }
            else {
                r.json().then((errors) => setErrors(errors.errors))
            }
        })        
    }

    const showForm = () => { 
        if (applicantFormVisible) {
            return(
            <form className="max-w-sm mx-auto" onSubmit={handleNewApplicantClick}>
                <label>FirstName</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type='text' value={firstName} onChange={handleFirstNameChange} /> 
                <label>Last Name</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type='text' value={lastName} onChange={handleLastNameChange} />
                <label>Phone Number</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type='number' value={phone} onChange={handlePhoneChange} />
                <label>City</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type='text' value={city} onChange={handleCityChange} />
                <label>State</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type='text' value={state} onChange={handleStateChange} />  
                <label>Applicant Email</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type='text' value={email} onChange={handleEmailChange} />
                <label>Most Recent Job Title</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type='text' value={position} onChange={handlePositionChange} />
                {errors.length === 0 ? null : errors.map(error => <p key={error}>{error}</p>)}     
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" type='submit' >Submit</button>            
            </form>
            )
        }
    }

    return (
        <div>
            {showForm()}
            <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={onVisibleClick} >{applicantFormVisible ? 'Cancel' : 'Add a New Applicant'}</button>
        </div>
    )
}
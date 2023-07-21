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
            position,                   
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
                console.log(data)
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
            <form className="p-4 mb-4 bg-gray-100 rounded-lg shadow-md" onSubmit={handleNewApplicantClick}>
                <label className="block mb-2 font-bold">FirstName</label>
                <input className="w-full px-3 py-2 mb-2 border rounded-lg" type='text' value={firstName} onChange={handleFirstNameChange} /> 
                <label className="block mb-2 font-bold">Last Name</label>
                <input className="w-full px-3 py-2 mb-2 border rounded-lg" type='text' value={lastName} onChange={handleLastNameChange} />
                <label className="block mb-2 font-bold">Phone Number</label>
                <input className="w-full px-3 py-2 mb-2 border rounded-lg" type='number' value={phone} onChange={handlePhoneChange} />
                <label className="block mb-2 font-bold">City</label>
                <input className="w-full px-3 py-2 mb-2 border rounded-lg" type='text' value={city} onChange={handleCityChange} />
                <label className="block mb-2 font-bold">State</label>
                <input className="w-full px-3 py-2 mb-2 border rounded-lg" type='text' value={state} onChange={handleStateChange} />  
                <label className="block mb-2 font-bold">Applicant Email</label>
                <input className="w-full px-3 py-2 mb-2 border rounded-lg" type='text' value={email} onChange={handleEmailChange} />
                <label className="block mb-2 font-bold">Most Recent Job Title</label>
                <input className="w-full px-3 py-2 mb-2 border rounded-lg" type='text' value={position} onChange={handlePositionChange} />
                {errors.length === 0 ? null : errors.map(error => <p className='text-lg text-center text-red-600' key={error}>{error}</p>)}
                <div className='px-20'>    
                    <button className='block w-full p-3 text-center text-white duration-300 bg-indigo-500 rounded-lg hover:bg-indigo-600' type='submit'>Submit</button>
                </div>             
            </form>
            )
        }
    }

    return (
        <div>
            <div className='px-10'>
                {showForm()}
            </div>
            <div className='w-full px-32'>
                <button className='block w-full p-3 text-center text-white duration-300 bg-teal-500 rounded-lg hover:bg-teal-600' onClick={onVisibleClick} >{applicantFormVisible ? 'Cancel' : 'Add a New Candidate'}</button>
            </div>
        </div>
    )
}
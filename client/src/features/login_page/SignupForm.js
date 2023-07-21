import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleAccount, userAdded } from './loginSlice';

const SignupForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmation, setConfirmation] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [title, setTitle] = useState('')
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            username: username.toLowerCase(),
            password,
            password_confirmation: confirmation,
            first_name: firstName,
            last_name: lastName,
            title
        }
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),            
        })
        .then ((r) => {
            if (r.ok) {
                r.json().then((user) => dispatch(userAdded(user)))
                .then(dispatch(toggleAccount()))
            }
            else {
                r.json().then((errors) => setErrors(errors.errors))
            }
        })
    }

    const handleUsername = (e) => setUsername(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const handleConfirmation = (e) => setConfirmation(e.target.value)
    const handleFirstName = (e) => setFirstName(e.target.value)
    const handleLastName = (e) => setLastName(e.target.value)
    const handleTitle = (e) => setTitle(e.target.value)

    return (
        <form className='bg-gray-100' onSubmit={handleSubmit}>
            <label className='font-bold blocktext-sm text-grey-darker'>First Name</label>
            <input className='w-full px-4 py-3 mb-3 bg-white rounded-sm focus:outline-none' type='text' onChange={handleFirstName} value={firstName} />
            <label className='font-bold blocktext-sm text-grey-darker'>Last Name</label>
            <input className='w-full px-4 py-3 mb-3 bg-white rounded-sm focus:outline-none' type='text' onChange={handleLastName} value={lastName} />
            <label className='font-bold blocktext-sm text-grey-darker'>Job Title</label>
            <input className='w-full px-4 py-3 mb-3 bg-white rounded-sm focus:outline-none' type='text' onChange={handleTitle} value={title} />     
            <label className='font-bold blocktext-sm text-grey-darker'>Username</label>
            <input className='w-full px-4 py-3 mb-3 bg-white rounded-sm focus:outline-none' type='Text' onChange={handleUsername} value={username} />
            <label className='font-bold blocktext-sm text-grey-darker'>Password</label>
            <input className='w-full px-4 py-3 mb-3 bg-white rounded-sm focus:outline-none' type='Password' onChange={handlePassword} value={password} />
            <label className='font-bold blocktext-sm text-grey-darker'>Confirm Password</label>
            <input className='w-full px-4 py-3 mb-3 bg-white rounded-sm focus:outline-none' type='Password' onChange={handleConfirmation} value={confirmation} />
            {errors.length === 0 ? null : errors.map(error => <p>{error}</p>)} 
            <button className='block w-full p-3 text-center text-white duration-300 bg-teal-500 rounded-lg hover:bg-teal-600'>Submit</button>
        </form>
    )
}

export default SignupForm
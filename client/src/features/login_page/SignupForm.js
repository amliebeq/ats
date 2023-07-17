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
        <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input type='text' onChange={handleFirstName} value={firstName} />
            <label>Last Name</label>
            <input type='text' onChange={handleLastName} value={lastName} />
            <label>Job Title</label>
            <input type='text' onChange={handleTitle} value={title} />     
            <label>Username</label>
            <input type='Text' onChange={handleUsername} value={username} />
            <label>Password</label>
            <input type='Password' onChange={handlePassword} value={password} />
            <label>Confirm Password</label>
            <input type='Password' onChange={handleConfirmation} value={confirmation} />
            {errors.length === 0 ? null : errors.map(error => <p className='error'>{error}</p>)} 
            <button>Submit</button>
        </form>
    )
}

export default SignupForm
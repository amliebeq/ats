import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userAdded } from './loginSlice';

const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            username: username.toLowerCase(),
            password
        }
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((r) => {
            if (r.ok) {
                r.json().then(user => dispatch(userAdded(user)))
            }
            else {
                r.json().then(error => setErrors(error.errors))
            }
        })
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    
    return (
        <form className='mt-6' id='loginForm' onSubmit={handleSubmit}>
            <label className='block text-sm font-bold text-grey-darker'>Username</label>
            <input className='w-full px-4 py-3 mt-3 bg-green-100 rounded-sm focus:outline-none' type='Text' value={username} onChange={handleUsernameChange} />
            <label className='block text-sm font-bold text-grey-darker'>Password</label>
            <input className='w-full px-4 py-3 mt-3 bg-green-100 rounded-sm focus:outline-none' type='Password' value={password} onChange={handlePasswordChange} />
            {errors ? <p>{errors}</p> : null}
            <button className='block w-full p-3 text-center text-white duration-300 bg-green-800 rounded-sm hover:bg-green-600'>Login</button>
        </form>
    )
}

export default LoginForm
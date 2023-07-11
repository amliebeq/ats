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
        <form id='loginForm' onSubmit={handleSubmit}>
            <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input type='Text' value={username} onChange={handleUsernameChange} />
            <label>Password</label>
            <input type='Password' value={password} onChange={handlePasswordChange} />
            {errors ? <p>{errors}</p> : null}
            <button>Login</button>
        </form>
    )
}

export default LoginForm
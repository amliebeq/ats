import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAccount } from './loginSlice';

const Login = () => {
    const login = useSelector(state => state.login.hasAccount)
    const dispacth = useDispatch()

    const handleClick = () => {
        dispacth(toggleAccount())
    }

    return (
        <div id='login'>
            {login ? (
                <div id='loginForm'>
                    <LoginForm />
                    <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" id='loginButton' onClick={handleClick}>Don't have an account?</button>
                </div>
            ) : (
                <div>
                    <SignupForm />
                    <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" id='signupButton' onClick={handleClick}>Already have an account?</button>
                </div>
            )}
        </div>
    )
}

export default Login
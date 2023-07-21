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
        <div className="w-10/12 p-4 m-auto bg-gray-100 shadow-md lg:w-4/12 md:6/12" id='login'>
            {login ? (
                <div className='"py-8 px-8 rounded-xl"'>
                    <h1 className="mt-3 text-2xl font-medium text-center">Login</h1>
                    <LoginForm />
                    <button className='block w-full p-3 text-center text-white duration-300 bg-orange-500 rounded-lg hover:bg-orange-600' onClick={handleClick}>Don't have an account?</button>
                </div>
            ) : (
                <div>
                    <h1 className="mt-3 text-2xl font-medium text-center">Sign Up</h1>
                    <SignupForm />
                    <button className='block w-full p-3 text-center text-white duration-300 bg-orange-500 rounded-lg hover:bg-orange-600' onClick={handleClick}>Already have an account?</button>
                </div>
            )}
        </div>
    )
}

export default Login
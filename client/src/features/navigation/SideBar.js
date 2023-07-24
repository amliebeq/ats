import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Navigate} from 'react-router-dom';
import { userAdded } from '../login_page/loginSlice';
import buthie from '/home/amliebeq/Developement/code/ats/client/src/features/navigation/0-1.jpg'

export const SideBar = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        fetch('/logout', {
            method: "DELETE"
        })
        .then((r) => {
            if (r.ok) {
                dispatch(userAdded(null))
                return <Navigate to="/" replace />
            }
        })
    }

    return (
            <div className='w-1/12 min-h-screen pr-0 bg-black'>
                <nav className='fixed flex flex-col gap-4 mt-4'>
                    <Link to={'/'} className='pl-1 text-white hover:text-teal-500'>🏠Home</Link>
                    <Link to={'/applicants'} className='text-white pls-1 hover:text-teal-500'>🙂People</Link>
                    <Link to={'/jobs'} className='pl-1 text-white hover:text-teal-500'>💼Jobs</Link>
                    <Link to={'/lists'} className='pl-1 text-white hover:text-teal-500'>📖Lists</Link>
                    <div className='m-auto'></div>
                    <Link onClick={handleLogout} to={'/'} className='fixed pl-1 text-red-500 bottom-8 hover:text-black hover:bg-red-600'>🚫Logout</Link>
                </nav>
            </div>
    )    
}
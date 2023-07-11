import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userAdded } from '../login_page/loginSlice';

export const SideBar = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const handleLogout = () => {
        fetch('/logout', {
            method: "DELETE"
        })
        .then((r) => {
            if (r.ok) {
                dispatch(userAdded(null))
                history.push('/')
            }
        })
    }

    const navigate = (path) => {
        history.push(path)        
    }
    return (
        <div className='flex'>
            <nav className="w-1/6 py-8 bg-white">
            <button onClick={() => navigate('/')} className="block py-2 px-4 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">Home</button>
            <button onClick={() => navigate('/applicants')} className="block py-2 px-4 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">Applicants</button>
            <button onClick={() => navigate('/jobs')} className="block py-2 px-4 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">Jobs</button>
            <button onClick={() => navigate('/lists')} className="block py-2 px-4 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">Lists</button>
            <button onClick={handleLogout} id='navButton' className="block py-2 px-4 text-gray-800 hover:bg-red-200 focus:outline-none focus:bg-red-200">Logout</button>
            </nav>
        </div>
    )    
}
import React  from 'react';
import { useDispatch  } from 'react-redux';
import { jobRemoved } from '../login_page/loginSlice';

export const DeleteJob = ({ job }) => {
    const dispatch = useDispatch()

    const handleDeleteClick = (e) => {
        e.preventDefault()
        fetch(`/jobs/${job.id}`, {
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then((data) => dispatch(jobRemoved(data.id))) 
    }

    return (
        <button className='block w-1/2 p-3 text-center text-white duration-300 bg-orange-400 rounded-lg hover:bg-orange-500' onClick={handleDeleteClick}>Delete</button>
    )
}
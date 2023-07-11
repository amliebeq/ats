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
        <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={handleDeleteClick}>Delete</button>
    )
}
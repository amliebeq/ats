import React  from 'react';
import { useDispatch  } from 'react-redux';
import { applicantRemoved } from '../login_page/loginSlice';

export const DeleteApplicant = ({ applicant }) => {
    const dispatch = useDispatch()

    const handleDeleteClick = (e) => {
        e.preventDefault()
        fetch(`/applicants/${applicant.id}`, {
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then((data) => dispatch(applicantRemoved(data.id))) 
    }

    return (
        <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={handleDeleteClick}>Delete</button>
    )
}
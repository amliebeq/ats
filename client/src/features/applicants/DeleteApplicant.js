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
        <button  className='block w-full p-3 text-center text-white duration-300 bg-red-800 rounded-sm hover:bg-red-600'  onClick={handleDeleteClick}>Delete</button>
    )
}
import React from 'react';
import { useDispatch } from 'react-redux';
import { applicantRemovedFromList, listRemovedFromApplicant } from '../login_page/loginSlice';

export const RemoveApplicant = ({ list, applicant }) => {
    const dispatch = useDispatch()
    const handleRemoveClick = () => {
        const data = {applicant_id: applicant.id, list_id: list.id}
        fetch(`/remove_applicant_from_list`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(data),
        })
        dispatch(applicantRemovedFromList(data))
        dispatch(listRemovedFromApplicant(data))
    }
    return (
        <div className='pl-4'>
            <button className='block w-8 h-8 text-center text-white duration-300 bg-red-700 rounded-sm hover:bg-red-500' onClick={handleRemoveClick}>-</button>
        </div>
    )
}
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
        <button onClick={handleRemoveClick}>Remove</button>
    )
}
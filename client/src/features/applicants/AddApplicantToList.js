import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applicantAddedToList, listAddedToApplicant } from '../login_page/loginSlice';

export const AddApplicantToList = ({ applicant, setShowCandidatelistForm }) => {
    const lists = useSelector(state => state.login.user.lists)
    const [list, setList] = useState('Select a list below')
    const dispatch = useDispatch()

    const handleListChange = (e) => setList(e.target.value)

    const handleAddToListClick = (e) => {
        e.preventDefault()
        const data = {list_id: list, applicant_id: applicant.id}
        fetch (`/add_applicant_to_list`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(data),
        })
        .then((r) => r.json())
        .then((data) => {
            dispatch(applicantAddedToList(data))
            dispatch(listAddedToApplicant(data))
        })
        setShowCandidatelistForm(false)
    }

    return(
        <form onSubmit={handleAddToListClick}>
            <select onChange={handleListChange}>
                <option value='Select a list below'>'Select a list below'</option>
                {lists.map((list) => <option key={list.id} value={list.id}>{list.name}</option>)}
            </select>
            <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Submit</button>
        </form>
    )
}
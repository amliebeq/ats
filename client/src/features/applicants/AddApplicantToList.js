import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applicantAddedToList, listAddedToApplicant } from '../login_page/loginSlice';

export const AddApplicantToList = ({ applicant, setShowCandidateListForm }) => {
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
        setShowCandidateListForm(false)
    }

    return(
        <form onSubmit={handleAddToListClick}>
            <select className="block w-full px-3 py-2 mb-2 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring focus:border-blue-300" onChange={handleListChange}>
                <option value='Select a list'>'Select a list below'</option>
                {lists.map((list) => <option key={list.id} value={list.id}>{list.name}</option>)}
            </select>
            <button className='block w-full p-3 text-center text-white duration-300 bg-blue-700 rounded-sm hover:bg-blue-500'>Submit</button>
        </form>
    )
}
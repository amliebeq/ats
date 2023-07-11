import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export const AddApplicantToList = ({ applicant }) => {
    const lists = useSelector(state => state.login.user.lists)
    const [list, setList] = useState('Select a list below')

    const handleListChange = (e) => setList(e.target.value)

    console.log(list)

    return(
        <select onChange={handleListChange}>
            <option value='Select a list below'>'Select a list below'</option>
            {lists.map((list) => <option value={list.id}>{list.name}</option>)}
        </select>
    )
}
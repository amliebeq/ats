import React, { useState } from 'react';
import { DeleteList } from './DeleteList';
import { EditList } from './EditList';

export const List = ({ list }) => {
    const [edit, setEdit] = useState(false)
    
    const handleEditClick = () => setEdit(!edit)

    return (
        <ul>
            {edit ? <EditList edit={edit} setEdit={setEdit} list={list} /> : <a href={`/lists/${list.id}`} target="_blank" rel="noopener noreferrer">Name: {list.name}</a>}
            <li>Applicant Count: {list.applicants.length ? list.applicants.length : 0 }</li>
            <button onClick={handleEditClick}>{edit ? 'Cancel' : 'Edit'}</button>
            <DeleteList list={list} />
        </ul>
    )
}
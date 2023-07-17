import React, { useState } from 'react';
import { DeleteList } from './DeleteList';
import { EditList } from './EditList';

export const List = ({ list }) => {
    const [edit, setEdit] = useState(false)
    
    const handleEditClick = () => setEdit(!edit)

    return (
        <ul className="border-black border-4 p-8">
            {edit ? <EditList edit={edit} setEdit={setEdit} list={list} /> : <a href={`/lists/${list.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Name: {list.name}</a>}
            <li>Applicant Count: {list.applicants.length ? list.applicants.length : 0 }</li>
            <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={handleEditClick}>{edit ? 'Cancel' : 'Edit'}</button>
            <DeleteList list={list} />
        </ul>
    )
}
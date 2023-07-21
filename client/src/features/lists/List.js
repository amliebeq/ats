import React, { useState } from 'react';
import { DeleteList } from './DeleteList';
import { EditList } from './EditList';
import { Link } from 'react-router-dom';

export const List = ({ list }) => {
    const [edit, setEdit] = useState(false)
    
    const handleEditClick = () => setEdit(!edit)

    return (
        <div className="p-4 mb-4 text-center transition duration-200 transform bg-white border rounded-lg shadow-md hover:scale-105">
            {edit ? <EditList edit={edit} setEdit={setEdit} list={list} /> : <Link className='text-blue-500 hover:bg-gray-100' to={`/lists/${list.id}`} target="_blank" rel="noopener noreferrer">{list.name}</Link>}
            <p>Applicant Count: {list.applicants.length ? list.applicants.length : 0 }</p>
            <div className='flex flex-wrap'>
                <button className='block w-1/2 p-3 text-center text-white duration-300 bg-green-800 rounded-sm hover:bg-green-600' onClick={handleEditClick}>{edit ? 'Cancel' : 'Edit'}</button>
                <DeleteList list={list} />
            </div>
        </div>
    )
}
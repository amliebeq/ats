import React, { useState } from 'react';
import { EditNote } from './EditNote';

export const Note = ({ note }) => {
    const[edit, setEdit] = useState(false)

    const onEditClick = () => setEdit(!edit)

    return (
        <div className="p-4 mb-4 mr-4 bg-white border rounded-lg shadow-md">
            {edit ? 
            <EditNote setEdit={setEdit} note={note} /> : 
            <div className='break-all'>
                <p>{note.body}</p>
                <p>Date Added {note.created_at.split('').splice(0,10).join('')}</p>
            </div>
            }
            <button className='block w-full p-3 text-center text-white duration-300 bg-green-800 rounded-sm hover:bg-green-600' onClick={onEditClick}>{edit ? 'Cancel' : 'Edit'}</button>
        </div>
    )
}
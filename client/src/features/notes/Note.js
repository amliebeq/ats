import React, { useState } from 'react';
import { EditNote } from './EditNote';

export const Note = ({ note }) => {
    const[edit, setEdit] = useState(false)

    const onEditClick = () => setEdit(!edit)

    return (
        <div>
            {edit ? 
            <EditNote setEdit={setEdit} note={note} /> : 
            <div>
                <li>{note.body}</li>
                <li>{note.created_at.split('').splice(0,10).join('')}</li>
            </div>
            }
            <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={onEditClick}>{edit ? 'Cancel' : 'Edit'}</button>
        </div>
    )
}
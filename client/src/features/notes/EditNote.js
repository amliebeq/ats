import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { noteEdited } from '../login_page/loginSlice';

export const EditNote = ({ note, setEdit }) => {
    const [editNoteField, setEditNoteField] = useState(note.body)
    const dispatch = useDispatch()

    const onNoteChange = (e) => setEditNoteField(e.target.value)

    const handleNoteSubmitClick = (e) => {
        e.preventDefault()
        const data = {note_id: note.id, body: editNoteField, applicant_id: note.applicant_id}
        fetch (`/notes/${note.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(data),
        })
        .then((r) => r.json())
        .then((note) => dispatch(noteEdited(note)))
        setEdit(false)
    }

    return(
        <form onSubmit={handleNoteSubmitClick}>
            <textarea className="w-full px-3 py-2 mb-2 border rounded-lg" onChange={onNoteChange} value={editNoteField} />
            <button className='block w-full p-3 text-center text-white duration-300 bg-blue-700 rounded-sm hover:bg-blue-500' type='Submit' >Submit</button>
        </form>
    )
}
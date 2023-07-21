import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { noteAdded } from '../login_page/loginSlice';

export const AddNote = ({ applicant }) => {
    const[newNote, setNewNote] = useState('')
    const[showNewNote, setShowNewNote] = useState(false)
    const dispatch = useDispatch()
    const userId = useSelector(state => state.login.user.id)
    const [errors, setErrors] = useState('')

    const onNoteChange = (e) => setNewNote(e.target.value) 
    const onToggleClick = () => setShowNewNote(!showNewNote)

    const handleNoteSubmitClick = (e) => {
        e.preventDefault()
        const data = {applicant_id: applicant.id, body: newNote, user_id: userId}
        fetch ('/notes' , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), 
        })
        .then ((r) => {
            if (r.ok) {
                r.json().then ((data) => dispatch(noteAdded(data)))
                setNewNote('')
                setShowNewNote(false)
                setErrors('')
            }
            else {
                r.json().then((errors) => setErrors(errors.errors))
            }
        }) 
    }

    const addNewNote = () => {
        if (showNewNote) {
            return(
                <div>
                    <form onSubmit={handleNoteSubmitClick}>
                        <textarea onChange={onNoteChange} value={newNote}/>
                        {errors.length === 0 ? null : errors.map(error => <p key={error}>{error}</p>)}
                        <button onClick={onToggleClick}>Cancel</button>
                        <button type='Submit'>Submit</button>
                    </form>
                </div>
            )
        }
        else {
            return <button onClick={onToggleClick}>Add a Note</button>
        }
    }

    return (
        <div>
            {addNewNote()}

        </div>
    )
} 
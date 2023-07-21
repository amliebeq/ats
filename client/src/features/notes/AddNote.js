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
                        <textarea className="w-full px-3 py-2 mb-2 border rounded-lg" onChange={onNoteChange} value={newNote}/>
                        {errors.length === 0 ? null : errors.map(error => <p key={error}>{error}</p>)}
                        <div className='flex flex-wrap'>
                            <button className='block w-full p-3 text-center text-white duration-300 bg-indigo-500 rounded-lg hover:bg-indigo-600' type='Submit'>Submit</button>
                            <button className='block w-full p-3 text-center text-white duration-300 bg-orange-400 rounded-lg hover:bg-orange-500' onClick={onToggleClick}>Cancel</button>
                        </div>
                    </form>
                </div>
            )
        }
        else {
            return <button className='block w-full p-3 text-center text-white duration-300 bg-teal-500 rounded-lg hover:bg-teal-600' onClick={onToggleClick}>Add a Note</button>
        }
    }

    return (
        <div>
            {addNewNote()}
        </div>
    )
} 
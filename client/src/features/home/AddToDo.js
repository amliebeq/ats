import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toDoAdded } from '../login_page/loginSlice';

export const AddToDo = ({ setShowForm }) => {
const [newToDo, setNewToDo] = useState('')
const [errors,setErrors] = useState([])
const dispatch = useDispatch()
const user = useSelector(state => state.login.user)

const onNewToDoChange = (e) => setNewToDo(e.target.value)

const handleNewToDoSubmitClick = (e) => {
    e.preventDefault()
    const data = {user_id: user.id, item: newToDo, completed: false}
    fetch ('/to_dos' , {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data), 
    })
    .then ((r) => {
        if (r.ok) {
            r.json().then ((data) => dispatch(toDoAdded(data)))
            setNewToDo('')
            setShowForm(false)
        }
        else {
            r.json().then((errors) => setErrors(errors.errors))
        }
    })      
}

    return (
        <form className='flex flex-wrap' onSubmit={handleNewToDoSubmitClick}>
            <label className="block pr-4 mb-2 font-semibold">New To Do Item</label>
            <input className="w-3/4 h-8 px-3 py-2 mb-2 border rounded-lg" type='text' value={newToDo} onChange={onNewToDoChange} />
            <button className='block w-1/12 h-8 text-white duration-300 bg-blue-700 rounded-sm hover:bg-blue-500' type='submit'>Submit</button>
        </form>
    )
}
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
        <form onSubmit={handleNewToDoSubmitClick}>
            <label>New To Do Item</label>
            <input type='text' value={newToDo} onChange={onNewToDoChange} />
            <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" type='submit'>Submit</button>
        </form>
    )
}
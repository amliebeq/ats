import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ToDo } from './ToDo';
import { AddToDo } from './AddToDo';

export const ToDoList = () => {
    const toDos = useSelector(state => state.login.user.to_dos)
    const [showForm, setShowForm] = useState(false)

    const createToDoList = () => toDos.map(toDo => <ToDo toDo={toDo} key={toDo.id}/>)
    const handleShowFormClick = () => setShowForm(!showForm)

    return(
        <div>
            <p>To-Do List</p>
            {createToDoList()}
            {showForm ? <AddToDo setShowForm={setShowForm} /> : null}
            <button onClick={handleShowFormClick} >{showForm ? 'Cancel' : '+'}</button>
        </div>
    )
}


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
            {createToDoList()}
            {showForm ? <AddToDo setShowForm={setShowForm} /> : null}
            <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={handleShowFormClick} >{showForm ? 'Cancel' : '+'}</button>
        </div>
    )
}


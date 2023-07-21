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
        <div className="p-4 mb-4 mr-4 bg-gray-100 border rounded-lg shadow-md">
            <p className='text-lg font-bold'>To-Do List</p>
            {createToDoList()}
            {showForm ? <AddToDo setShowForm={setShowForm} /> : null}
            <button className='block w-8 h-8 text-center text-white duration-300 bg-teal-400 rounded-sm hover:bg-teal-500' onClick={handleShowFormClick} >{showForm ? '-' : '+'}</button>
        </div>
    )
}


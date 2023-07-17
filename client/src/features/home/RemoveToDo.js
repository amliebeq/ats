import React from 'react';
import { useDispatch } from 'react-redux';
import { toDoRemoved } from '../login_page/loginSlice';

export const RemoveToDo = ({ toDo }) => {
    const dispatch = useDispatch()

    const handleToDoRemoveClick = () => {
        fetch(`/to_dos/${toDo.id}`, {
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then((data) => dispatch(toDoRemoved(data.id))) 
    }

    return (
        <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={handleToDoRemoveClick}>-</button>
    )
}
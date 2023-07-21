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
        <button className='block w-8 h-8 text-center text-white duration-300 bg-red-700 rounded-sm hover:bg-red-500' onClick={handleToDoRemoveClick}>-</button>
    )
}
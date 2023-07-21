import React  from 'react';
import { useDispatch  } from 'react-redux';
import { listRemoved } from '../login_page/loginSlice';

export const DeleteList = ({ list }) => {
    const dispatch = useDispatch()

    const handleDeleteClick = (e) => {
        e.preventDefault()
        fetch(`/lists/${list.id}`, {
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then((data) => dispatch(listRemoved(data.id))) 
    }

    return (
        <button className='block w-1/2 p-3 text-center text-white duration-300 bg-orange-400 rounded-lg hover:bg-orange-500' onClick={handleDeleteClick}>Delete</button>
    )
}
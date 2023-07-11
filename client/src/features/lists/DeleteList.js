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
        <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={handleDeleteClick}>Delete</button>
    )
}
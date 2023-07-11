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
        <button onClick={handleDeleteClick}>Delete</button>
    )
}
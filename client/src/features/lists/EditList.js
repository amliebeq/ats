import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { listEdited } from '../login_page/loginSlice';

export const EditList = ({ setEdit, list }) => {
    const dispatch = useDispatch()
    const[name, setName] = useState(list.name)

    const handleListNameChange = (e) => setName(e.target.value)

    const onEditSubmitClick = (e) => {
        e.preventDefault()
        dispatch(listEdited({id: list.id, name: name}))
        fetch (`/lists/${list.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({
                name: name,
            }),
        })
        .then((r) => r.json())
        .then((name) => setName(name))
        setEdit(false)      
    }

    return (
        <div>
            <form onSubmit={onEditSubmitClick}>
                <label>Name:</label>
                <input type='text' value={name} onChange={handleListNameChange} />
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Submit</button>
            </form>
        </div>
    )
}
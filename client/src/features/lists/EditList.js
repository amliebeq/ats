import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { listEdited } from '../login_page/loginSlice';

export const EditList = ({ setEdit, list }) => {
    const dispatch = useDispatch()
    const[name, setName] = useState(list.name)

    const handleListNameChange = (e) => setName(e.target.value)

    const onEditSubmitClick = (e) => {
        e.preventDefault()
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
        .then((name) => dispatch(listEdited(name)))
        setEdit(false)      
    }

    return (
        <div>
            <form onSubmit={onEditSubmitClick}>
                <label className="block mb-2 font-bold">Name:</label>
                <input className="w-full px-3 py-2 mb-2 border rounded-lg" type='text' value={name} onChange={handleListNameChange} />
                <button className='block w-full p-3 text-center text-white duration-300 bg-blue-700 rounded-sm hover:bg-blue-500'>Submit</button>
            </form>
        </div>
    )
}
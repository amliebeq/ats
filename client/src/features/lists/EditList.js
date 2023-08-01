import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { listEdited } from '../login_page/loginSlice';

export const EditList = ({ setEdit, list }) => {
    const dispatch = useDispatch()
    const [name, setName] = useState(list.name)
    const [errors, setErrors] = useState([])

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
        .then ((r) => {
            if (r.ok) {
                r.json().then ((name) => dispatch(listEdited(name)))
                setEdit(false)
            }
            else {
                r.json().then((errors) => setErrors(errors.errors))
            }
        }) 
    }

    return (
        <div>
            <form onSubmit={onEditSubmitClick}>
                <label className="block mb-2 font-bold">Name:</label>
                <input className="w-full px-3 py-2 mb-2 border rounded-lg" type='text' value={name} onChange={handleListNameChange} />
                {errors.length === 0 ? null : errors.map(error => <p className='text-lg text-center text-red-600' key={error}>{error}</p>)}
                <button className='block w-full p-3 text-center text-white duration-300 bg-indigo-500 rounded-lg hover:bg-indigo-600'>Submit</button>
            </form>
        </div>
    )
}
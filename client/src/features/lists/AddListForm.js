import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listAdded } from '../login_page/loginSlice';

export const AddListForm = () => {
    const [name, setName] = useState('')
    const [formVisible, setFormVisible] = useState(false)
    const [errors, setErrors] = useState([])
    const user = useSelector(state => state.login.user)
    const dispatch = useDispatch()

    const onListChange = (e) => setName(e.target.value)

    const handleListSubmit = (e) => {
        e.preventDefault()
        const data = {
            name,
            user_id: user.id
        }
        fetch ('/lists' , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), 
        })
        .then ((r) => {
            if (r.ok) {
                r.json().then ((data) => dispatch(listAdded(data)))
                setName('')
                setFormVisible(false)
            }
            else {
                r.json().then((errors) => setErrors(errors.errors))
            }
        })             
    }

    const handleVisibleClick = () => setFormVisible(!formVisible)

    const renderListForm = () => {
        if (formVisible) {
            return (
                <form className='p-4 bg-gray-100' onSubmit={handleListSubmit}>
                    <label className="block mb-2 font-bold">New List Name</label>
                    <input className="w-full px-3 py-2 mb-2 border rounded-lg" type='text' value={name} onChange={onListChange} />
                    {errors.length === 0 ? null : errors.map(error => <p key={error}>{error}</p>)}     
                    <button className='block w-full p-3 text-center text-white duration-300 bg-indigo-500 rounded-lg hover:bg-indigo-600' type='submit' >Submit</button>                       
                </form>
            )
        }
    }

    return (
        <div>
            {renderListForm()}
            <div className='pb-4'>
                <button className='block w-full p-3 text-center text-white duration-300 bg-teal-500 rounded-lg hover:bg-teal-600' onClick={handleVisibleClick} >{formVisible ? "Cancel" : "Create A New List"}</button>
            </div>
        </div>
    )
}
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
                <form onSubmit={handleListSubmit}>
                    <label>New List Name</label>
                    <input type='text' value={name} onChange={onListChange} />
                    {errors.length === 0 ? null : errors.map(error => <p key={error}>{error}</p>)}     
                    <button type='submit' >Submit</button>                       
                </form>
            )
        }
    }

    return (
        <div>
            {renderListForm()}
            <button onClick={handleVisibleClick} >{formVisible ? "cancel" : "Create A New List"}</button>
        </div>
    )
}
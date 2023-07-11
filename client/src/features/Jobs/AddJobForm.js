import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jobAdded } from '../login_page/loginSlice';

export const AddJobForm = () => {
    const [company, setCompany] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [payRate, setPayRate] = useState('')
    const [title, setTitle] = useState('')
    const [jobFormVisible, setJobFormVisible] = useState(false)
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()
    const user = useSelector(state => state.login.user)

    const onVisibleClick = () => setJobFormVisible(!jobFormVisible)

    const handleCompanyChange = (e) => setCompany(e.target.value)
    const handleDescriptionChange = (e) => setDescription(e.target.value)
    const handlePayRateChange = (e) => setPayRate(e.target.value)
    const handleLocationChange = (e) => setLocation(e.target.value)
    const handleTitleChange = (e) => setTitle(e.target.value)

    const handleNewJobClick = (e) => {
        e.preventDefault()
        const data = {
            company,
            description,
            location,
            title,
            pay_rate: payRate,
            user_id: user.id             
        }
        fetch ('/jobs' , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), 
        })
        .then ((r) => {
            if (r.ok) {
                r.json().then ((data) => dispatch(jobAdded(data)))
                setJobFormVisible(false)
                setCompany('')
                setDescription('')
                setLocation('')
                setPayRate('')
                setTitle('')
            }
            else {
                r.json().then((errors) => setErrors(errors.errors))
            }
        })        
    }

    const showForm = () => { 
        if (jobFormVisible) {
            return(
            <form className="max-w-sm mx-auto" onSubmit={handleNewJobClick}>
                <label>Job Title</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type='text' value={title} onChange={handleTitleChange} />
                <label>Company</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type='text' value={company} onChange={handleCompanyChange} /> 
                <label>Location</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type='text' value={location} onChange={handleLocationChange} /> 
                <label>Pay Rate / Range</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type='text' value={payRate} onChange={handlePayRateChange} /> 
                <label>Job Description</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type='text' value={description} onChange={handleDescriptionChange} />
                {errors.length === 0 ? null : errors.map(error => <p key={error}>{error}</p>)}     
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" type='submit' >Submit</button>            
            </form>
            )
        }
    }

    return (
        <div>
            {showForm()}
            <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={onVisibleClick} >{jobFormVisible ? 'Cancel' : 'Add a New Job'}</button>
        </div>
    )
}
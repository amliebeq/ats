import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { jobEdited } from '../login_page/loginSlice';

export const EditJob = ({ job, setFormVisible }) => {
    const [editJobName, setEditJobName] = useState(`${job.title}`)
    const [editJobPay, setEditJobPay] = useState(`${job.pay_rate}`)
    const [editJobLocation, setEditJobLocation] = useState(`${job.location}`)
    const [editJobDescription, setEditJobDescription] = useState(`${job.description}`)
    const dispatch = useDispatch()

    const onJobNameChange = (e) => setEditJobName(e.target.value)
    const onJobPayChange = (e) => setEditJobPay(e.target.value)
    const onJobLocationChange = (e) => setEditJobLocation(e.target.value)
    const onJobDescriptionChange = (e) => setEditJobDescription(e.target.value)

    const onEditSubmit = (e) => {
        e.preventDefault()
        const data = {id: job.id, title: editJobName, pay_rate: editJobPay, location: editJobLocation, description: editJobDescription}
        fetch (`/jobs/${job.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(data),
        })
        .then((r) => r.json())
        .then((job) => dispatch(jobEdited(job)))
        setFormVisible(false)
    }

    return (
        <form onSubmit={onEditSubmit}>
            <label>Name:</label>
            <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type='text' value={editJobName} onChange={onJobNameChange} />
            <label>Location:</label>
            <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type='text' value={editJobLocation} onChange={onJobLocationChange}/>
            <label>Pay Range: $</label>
            <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type='text' value={editJobPay} onChange={onJobPayChange}/>
            <label>Description:</label>
            <textarea type='text' value={editJobDescription} className="w-full px-3 py-2 border border-gray-300 rounded-md" onChange={onJobDescriptionChange}/>
            <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Submit</button>
        </form>
    )
}
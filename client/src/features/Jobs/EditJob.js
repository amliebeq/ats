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
            <label className="block mb-2 font-bold">Name:</label>
            <input className="w-full px-3 py-2 mb-2 border rounded-lg" type='text' value={editJobName} onChange={onJobNameChange} />
            <label className="block mb-2 font-bold"> Location:</label>
            <input className="w-full px-3 py-2 mb-2 border rounded-lg" type='text' value={editJobLocation} onChange={onJobLocationChange}/>
            <label className="block mb-2 font-bold">Pay Range: $</label>
            <input className="w-full px-3 py-2 mb-2 border rounded-lg" type='text' value={editJobPay} onChange={onJobPayChange}/>
            <label className="block mb-2 font-bold">Description:</label>
            <textarea className="w-full px-3 py-2 mb-2 border rounded-lg" type='text' value={editJobDescription} onChange={onJobDescriptionChange}/>
            <button className='block w-full p-3 text-center text-white duration-300 bg-blue-700 rounded-sm hover:bg-blue-500'>Submit</button>
        </form>
    )
}
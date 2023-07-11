import React, { useState } from 'react';

export const EditJob = ({ job, formVisible, setFormVisible }) => {
    const [editJobName, setEditJobName] = useState(`${job.title}`)
    const [editJobPay, setEditJobPay] = useState(`${job.pay_rate}`)
    const [editJobLocation, setEditJobLocation] = useState(`${job.location}`)
    const [editJobDescription, setEditJobDescription] = useState(`${job.description}`)

    const onJobNameChange = (e) => setEditJobName(e.target.value)

    return (
        <form>
            <label>Name:</label>
            <input type='text' value={editJobName} onChange={onJobNameChange} />
            <label>Applicants: {job.applicants.length}</label>
            <label>Location:</label>
            <input type='text' value={editJobLocation} />
            <label>Pay Range:</label>
            <input type='text' value={editJobPay} />
            <label>Description:</label>
            <textarea type='text' value={editJobDescription} className='resize-x'/>
        </form>
    )
}
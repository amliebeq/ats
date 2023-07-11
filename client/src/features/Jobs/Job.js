import React, { useState } from 'react';
import { DeleteJob } from './DeleteJob';
import { EditJob } from './EditJob';

export const Job = ({ job }) => {
    const [formVisible, setFormVisible] = useState(false)

    const hanleEditClick = () => setFormVisible(!formVisible)

    const jobCard =        
    <ul>
        <li>Name: {job.title}</li>
        <li>Applicants: {job.applicants.length}</li>
        <li>Location: {job.location}</li>
        <li>Pay Range: ${job.pay_rate}</li>
        <li>Description: {job.description}</li>
    </ul>

    return (
        <div className="border-black border-4 p-8">
            {formVisible ? <EditJob job={job} setFormVisible={setFormVisible} /> : jobCard}
            <button onClick={hanleEditClick} className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">{formVisible ? 'Cancel' : 'Edit'}</button>
            <DeleteJob job={job} />
        </div>
    )
}
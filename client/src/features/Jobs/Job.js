import React, { useState } from 'react';
import { DeleteJob } from './DeleteJob';
import { EditJob } from './EditJob';

export const Job = ({ job }) => {
    const [formVisible, setFormVisible] = useState(false)

    const jobCard =        
    <ul>
        <li>Name: {job.title}</li>
        <li>Applicants: {job.applicants.length}</li>
        <li>Location: {job.location}</li>
        <li>Pay Range: ${job.pay_rate}</li>
        <li>Description: {job.description}</li>
        <DeleteJob job={job} />
    </ul>

    return (
        <div className="border-black border-4 p-8">
            {jobCard}
            <EditJob job={job} formVisible={formVisible} setFormVisible={setFormVisible} />
        </div>
    )
}
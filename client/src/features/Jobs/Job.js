import React from 'react';
import { DeleteJob } from './DeleteJob';

export const Job = ({ job }) => {
    return (
        <ul className="border-black border-4 p-8">
            <li>Name: {job.title}</li>
            <li>Applicants: {job.applicants.length}</li>
            <li>Location: {job.location}</li>
            <li>Pay Range: ${job.pay_rate}</li>
            <li>Description: {job.description}</li>
            <DeleteJob job={job} />
        </ul>
    )
}
import React, { useState } from 'react';
import { DeleteJob } from './DeleteJob';
import { EditJob } from './EditJob';
import { RemoveApplicantFromJob } from './RemoveApplicantFromJob';
import { Link } from 'react-router-dom';

export const Job = ({ job }) => {
    const [formVisible, setFormVisible] = useState(false)

    const hanleEditClick = () => setFormVisible(!formVisible)

    const jobCard =        
    <div>
        <p>Name: {job.title}</p>
        <p>Applicants: {job.applicants.length}</p>
        <p>Location: {job.location}</p>
        <p>Pay Range: ${job.pay_rate}</p>
        <p className='pb-2'>Description: {job.description}</p>
        <div className='flex flex-wrap'>
            <label className='pr-2'>Candidates:</label>
            {job.applicants.map((applicant) => {
                return (
                <div className='flex flex-wrap'>
                    <Link to={`/applicants/${applicant.id}`} target="_blank" rel="noopener noreferrer" className='pb-4 font-medium text-blue-600 dark:text-blue-500 hover:underline'>{applicant.first_name} {applicant.last_name}</Link>
                    <RemoveApplicantFromJob job={job} applicant={applicant} />
                </div>
            )})}
        </div>
    </div>

    return (
        <div className="p-4 mb-4 text-center transition duration-200 transform bg-gray-100 border rounded-lg shadow-md hover:scale-105">
            {formVisible ? <EditJob job={job} setFormVisible={setFormVisible} /> : jobCard}
            <div className='flex flex-wrap'>
                <button className='block w-1/2 p-3 text-center text-white duration-300 bg-teal-500 rounded-lg hover:bg-teal-600' onClick={hanleEditClick}>{formVisible ? 'Cancel' : 'Edit'}</button>
                <DeleteJob job={job} />
            </div>
        </div>
    )
}
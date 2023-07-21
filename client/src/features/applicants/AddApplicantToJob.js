import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applicantAddedToJob } from '../login_page/loginSlice';

export const AddApplicantToJob = ({ applicant, setShowCandidateJobForm }) => {
    const jobs = useSelector(state => state.login.user.jobs)
    const [job, setJob] = useState('Select a job below')
    const dispatch = useDispatch()

    const handleJobChange = (e) => setJob(e.target.value)

    const handleAddToJobClick = (e) => {
        e.preventDefault()
        const data = {job_id: job, applicant_id: applicant.id}
        fetch (`/add_applicant_to_job`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(data),
        })
        .then((r) => r.json())
        .then((data) => {
            dispatch(applicantAddedToJob(data))
        })
        setShowCandidateJobForm(false)
    }

    return(
        <form onSubmit={handleAddToJobClick}>
            <select className="block w-full px-3 py-2 mb-2 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring focus:border-blue-300" onChange={handleJobChange}>
                <option value='Select a job below'>'Select a job below'</option>
                {jobs.map((job) => <option key={job.id} value={job.id}>{job.title}</option>)}
            </select>
            <button className='block w-full p-3 text-center text-white duration-300 bg-indigo-500 rounded-lg hover:bg-indigo-600'>Submit</button>
        </form>
    )
}
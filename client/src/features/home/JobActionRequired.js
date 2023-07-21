import React from 'react'
import { useSelector } from 'react-redux'

export const JobActionRequired = () => {
    const jobs = useSelector(state => state.login.user.jobs)

    const actionableJobs = jobs.filter(job => job.applicants.length === 0)

    return (
        <div>
            <p>Jobs With Zero Candidates</p>
            <ul>
                {actionableJobs.map(job => <li key={job.id}>{job.title}</li>)}
            </ul>
        </div>
    )
}

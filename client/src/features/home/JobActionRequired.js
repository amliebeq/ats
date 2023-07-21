import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const JobActionRequired = () => {
    const jobs = useSelector(state => state.login.user.jobs)

    const actionableJobs = jobs.filter(job => job.applicants.length === 0)

    return (
        <div className="p-4 mb-4 mr-4 bg-white border rounded-lg shadow-md">
            <p className='text-lg font-bold'>Jobs With Zero Candidates</p>
            <ul>
                {actionableJobs.length > 0 ? actionableJobs.map(job => <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" to={`/jobs`}>{job.title}</Link>) : <p>All jobs have candidates</p>}
            </ul>
        </div>
    )
}

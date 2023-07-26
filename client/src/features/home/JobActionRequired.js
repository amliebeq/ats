import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const JobActionRequired = () => {
    const jobs = useSelector(state => state.login.user.jobs)

    const actionableJobs = jobs.filter(job => job.applicants.length === 0)

    const actionableJobsList = actionableJobs.map((job) => {
        return(
            <div>
                <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" to={`/jobs/${job.id}`} key={job.id}>{job.title}</Link>
            </div>
        )
    })

    console.log(actionableJobsList)

    return (
        <div className="p-4 mb-4 mr-4 bg-gray-100 border rounded-lg shadow-md">
            <p className='text-lg font-bold'>Jobs With Zero Candidates</p>
            {actionableJobs.length > 0 ? actionableJobsList : <p>All jobs have candidates</p>}
        </div>
    )
}

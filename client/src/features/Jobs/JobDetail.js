import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Applicant } from '../applicants/Applicant'

export const JobDetail = () => {
    const { id } = useParams()
    const jobDetail = useSelector(state => state.login.user.jobs).find(job => job.id == id)

    const applicantList = jobDetail.applicants.map((applicant) => {return <Applicant applicant={applicant} key={applicant.id} />
    })

    return (
        <div>
            <div className="p-4 mb-4 mr-4 bg-white border rounded-lg shadow-md">
                <h1 className='pb-2 text-xl'>{jobDetail.title}</h1>
                <p>Company: {jobDetail.company}</p>
                <p>Address: {jobDetail.location}</p>
                <p>${jobDetail.pay_rate}</p>
            </div>
            <div className="p-4 mb-4 mr-4 bg-white border rounded-lg shadow-md">
                <h1 className='pb-2 text-xl'>Candidates</h1>
                <div className="grid grid-cols-1 gap-5 px-10 py-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-4">
                    {applicantList}
                </div>
            </div>
        </div>
    )
}

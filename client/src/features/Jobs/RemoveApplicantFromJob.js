import React from 'react';
import { useDispatch } from 'react-redux';
import { applicantRemovedFromJob } from '../login_page/loginSlice';

export const RemoveApplicantFromJob = ({ job, applicant }) => {
    const dispatch = useDispatch()
    const handleRemoveClick = () => {
        const data = {applicant_id: applicant.id, job_id: job.id}
        fetch(`/remove_applicant_from_job`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(data),
        })
        dispatch(applicantRemovedFromJob(data))
    }
    return (
        <div className='px-4'>
            <button className='block w-8 h-8 text-center text-white duration-300 bg-orange-400 rounded-sm hover:bg-orange-500' onClick={handleRemoveClick}>-</button>
        </div>
    )
}
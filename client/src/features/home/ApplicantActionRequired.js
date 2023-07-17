import React from 'react';
import { useSelector } from 'react-redux';

export const ApplicantActionRequired = () => {
    const applicants = useSelector(state => state.login.user.applicants)
    
    const newApplicantList = applicants.filter(applicant => applicant.status === 'New')
    
    return (
        <div>
            <p>Applicant Action Required</p>
            {newApplicantList.map((applicant) => {
                return (
                    <div>
                        <a key={applicant.id} href={`/applicants/${applicant.id}`} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{applicant.first_name} {applicant.last_name}</a>
                    </div>
            )})}
        </div>
    )
}
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const ApplicantActionRequired = () => {
    const applicants = useSelector(state => state.login.user.applicants)
    
    const newApplicantList = applicants.filter(applicant => applicant.status === 'New')

    const renderApplicants = newApplicantList.map((applicant) => {
        return (
            <div>
                <Link key={applicant.id} to={`/applicants/${applicant.id}`} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{applicant.first_name} {applicant.last_name}</Link>
            </div>
    )})
    
    return (
        <div className="p-4 mb-4 mr-4 bg-gray-100 border rounded-lg shadow-md">
            <p className='text-lg font-bold'>Candidate Action Required</p>
            {newApplicantList.length > 0 ? renderApplicants : <p>No new candidates</p>}
        </div>
    )
}
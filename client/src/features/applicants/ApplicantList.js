import React from 'react';
import { useSelector } from 'react-redux';
import { Applicant } from './Applicant';
import { AddApplicantForm } from './AddApplicantForm';

export const ApplicantList = () => {
    const applicants = useSelector(state => state.login.user.applicants)

    const applicantListCreation = () => applicants.map(applicant => <Applicant applicant={applicant} key={applicant.id} />)

    return (
        <div>
            <AddApplicantForm />
            {applicants.length === 0 ? <p>No applicants so far!</p> : applicantListCreation()}
        </div>
    )
}
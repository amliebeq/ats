import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Notes } from '../notes/Notes';
import { ApplicantStatus } from './ApplicantStatus';

export const ApplicantDetail = () => {
    const { id } = useParams()
    const applicant = useSelector(state => state.login.user.applicants).find(applicant => applicant.id == id)

    return (
        <div>
            <h1>{applicant.first_name} {applicant.last_name}</h1>
            <ApplicantStatus applicant={applicant}/>
            <Notes applicant={applicant} />
        </div>
    )
}
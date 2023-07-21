import React from 'react';
import { RemoveApplicant } from './RemoveApplicant';
import { Link } from 'react-router-dom';

export const ListApplicant = ({ applicant, list }) => {
    return (
        <div>
            <Link to={`/applicants/${applicant.id}`} target="_blank" rel="noopener noreferrer">{applicant.first_name} {applicant.last_name}</Link>
            <RemoveApplicant list={list} applicant={applicant}/>
        </div>
    )
}
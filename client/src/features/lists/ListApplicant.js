import React from 'react';
import { RemoveApplicant } from './RemoveApplicant';

export const ListApplicant = ({ applicant, list }) => {
    return (
        <div>
            <a href={`/applicants/${applicant.id}`} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{applicant.first_name} {applicant.last_name}</a>
            <RemoveApplicant list={list} applicant={applicant}/>
        </div>
    )
}
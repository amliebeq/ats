import React from 'react';
import { RemoveApplicant } from './RemoveApplicant';
import { Link } from 'react-router-dom';

export const ListApplicant = ({ applicant, list }) => {
    return (
        <div className='flex flex-wrap'>
            <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" to={`/candidates/${applicant.id}`} target="_blank" rel="noopener noreferrer">{applicant.first_name} {applicant.last_name}</Link>
            <p className='pl-8'>{applicant.phone}</p>
            <p className='pl-8'>{applicant.email}</p>
            <RemoveApplicant list={list} applicant={applicant}/>
        </div>
    )
}
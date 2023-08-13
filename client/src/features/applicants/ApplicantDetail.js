import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Notes } from '../notes/Notes';
import { ApplicantStatus } from './ApplicantStatus';

export const ApplicantDetail = () => {
    const { id } = useParams()
    const applicant = useSelector(state => state.login.user.applicants).find(applicant => applicant.id == id)

    return (
        <div>
            <div className="p-4 mb-4 mr-4 bg-white border rounded-lg shadow-md">
                <p>{applicant.first_name} {applicant.last_name}</p>
                <p>{applicant.position}</p>
                <p>{applicant.city}, {applicant.state}</p>
                <ApplicantStatus applicant={applicant}/>
            </div>
            <div className="p-4 mb-4 mr-4 bg-white border rounded-lg shadow-md">
                Contact Info
                <p>{applicant.email}</p>
                <p>{applicant.phone}</p>
            </div>
            <div className="p-4 mb-4 mr-4 bg-white border rounded-lg shadow-md">
                <h1>Jobs</h1>
                {applicant.jobs.length > 0 ? applicant.jobs.map(job => <Link className="pr-4 font-medium text-blue-600 dark:text-blue-500 hover:underline" to={'/jobs'}>{job.title}</Link>) : <p>Not added to any jobs yet</p>}
            </div>
            <div className="p-4 mb-4 mr-4 bg-white border rounded-lg shadow-md">
                <h1>Lists</h1>
                {applicant.lists.length > 0 ? applicant.lists.map(list => <Link className="pr-4 font-medium text-blue-600 dark:text-blue-500 hover:underline" to={`/lists/${list.id}`}>{list.name}</Link>) : <p>Not added to any lists yet</p>}
            </div>
            <div className="p-4 mb-4 mr-4 bg-white border rounded-lg shadow-md">
                <Notes applicant={applicant} />
            </div>
        </div>
    )
}
import React, { useState } from 'react';
import { DeleteApplicant } from './DeleteApplicant';
import { EditApplicant } from './EditApplicant';
import { AddApplicantToList } from './AddApplicantToList';
import { ApplicantStatus } from './ApplicantStatus';
import { AddApplicantToJob } from './AddApplicantToJob';
import { Link } from 'react-router-dom';

export const Applicant = ({ applicant }) => {
    const [showEdit, setShowEdit] = useState(false)
    const [showCandidateListForm, setShowCandidateListForm] = useState(false)
    const [showCandidateJobForm, setShowCandidateJobForm] = useState(false)

    const onEditClick = () => setShowEdit(!showEdit)
    const onAddToListClick = () => setShowCandidateListForm(!showCandidateListForm)
    const onAddToJobClick = () => setShowCandidateJobForm(!showCandidateJobForm)

    const applicantCard =
    <div className='break-all'>
        <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer" to={`/candidates/${applicant.id}`}>{applicant.first_name} {applicant.last_name}</Link>
        <ul>
            <li>{applicant.email}</li>
            <li>Phone Number: {applicant.phone}</li>
            <li>Position: {applicant.position}</li>
            <li>City: {applicant.city}</li>
            <li>State: {applicant.state}</li>
            <ApplicantStatus applicant={applicant} />
        </ul>
    </div>

    return (
        <div className="p-4 mb-4 text-center transition duration-200 transform bg-gray-100 border rounded-lg shadow-md hover:scale-105">
            {showEdit ? <EditApplicant applicant={applicant} setShowEdit={setShowEdit} /> : applicantCard}
            {showCandidateListForm ? <AddApplicantToList applicant={applicant} setShowCandidateListForm={setShowCandidateListForm} /> : null}
            <button className='block w-full p-3 text-center text-white duration-300 bg-teal-500 rounded-lg hover:bg-teal-600' onClick={onAddToListClick}>{showCandidateListForm ? 'Cancel' : 'Add to a list'}</button>
            {showCandidateJobForm ? <AddApplicantToJob applicant={applicant} setShowCandidateJobForm={setShowCandidateJobForm} /> : null}
            <button className='block w-full p-3 text-center text-white duration-300 bg-teal-500 rounded-lg hover:bg-teal-600' onClick={onAddToJobClick}>{showCandidateJobForm ? 'Cancel' : 'Add to Job'}</button>
            <button className='block w-full p-3 text-center text-white duration-300 bg-teal-500 rounded-lg hover:bg-teal-600' onClick={onEditClick}>{showEdit ? `Cancel` : `Edit`}</button>
            <DeleteApplicant applicant={applicant} />
            </div>
    )
}
import React, { useState } from 'react';
import { DeleteApplicant } from './DeleteApplicant';
import { EditApplicant } from './EditApplicant';
import { AddApplicantToList } from './AddApplicantToList';
import { ApplicantStatus } from './ApplicantStatus';
import { AddApplicantToJob } from './AddApplicantToJob';

export const Applicant = ({ applicant }) => {
    const [showEdit, setShowEdit] = useState(false)
    const [showCandidateListForm, setShowCandidateListForm] = useState(false)
    const lists = applicant.lists.map(list => <li key={list.id}>{list.name}</li>)
    const [showCandidateJobForm, setShowCandidateJobForm] = useState(false)

    const onEditClick = () => setShowEdit(!showEdit)
    const onAddToListClick = () => setShowCandidateListForm(!showCandidateListForm)
    const onAddToJobClick = () => setShowCandidateJobForm(!showCandidateJobForm)

    const applicantCard = 
    <ul>
        <a href={`/applicants/${applicant.id}`} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Name: {applicant.first_name} {applicant.last_name}</a>
        <li>email: {applicant.email}</li>
        <li>Phone Number: {applicant.phone}</li>
        <li>Position: {applicant.position}</li>
        <li>City: {applicant.city}</li>
        <li>State: {applicant.state}</li>
        <ApplicantStatus applicant={applicant} />
        <li>Lists:</li>
        <ul>{lists}</ul>
    </ul>

    return (
        <div  className="border-black border-4 p-8 inline-flex flex-col">
            {showEdit ? <EditApplicant applicant={applicant} setShowEdit={setShowEdit} /> : applicantCard}
            {showCandidateListForm ? <AddApplicantToList applicant={applicant} setShowCandidateListForm={setShowCandidateListForm} /> : null}
            <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={onAddToListClick}>{showCandidateListForm ? 'Cancel' : 'Add to a list'}</button>
            {showCandidateJobForm ? <AddApplicantToJob applicant={applicant} setShowCandidateJobForm={setShowCandidateJobForm} /> : <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={onAddToJobClick}>Add to Job</button>}
            <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={onEditClick}>{showEdit ? `Cancel` : `Edit`}</button>
            <DeleteApplicant applicant={applicant} />
        </div>
    )
}
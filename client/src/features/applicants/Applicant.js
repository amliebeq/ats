import React from 'react';
import { DeleteApplicant } from './DeleteApplicant';

export const Applicant = ({ applicant }) => {
    const lists = applicant.lists.map(list => <li key={list.id}>{list.name}</li>)

    return (
        <ul className="border-black border-4 p-8 inline-flex flex-col">
            <li>Name: {applicant.first_name} {applicant.last_name}</li>
            <li>email: {applicant.email}</li>
            <li>Phone Number: {applicant.phone}</li>
            <li>Position: {applicant.position}</li>
            <li>Location: {applicant.city}, {applicant.state}</li>
            <li>Lists:</li>
            <ul>{lists}</ul>
            <DeleteApplicant applicant={applicant} />
        </ul>
    )
}
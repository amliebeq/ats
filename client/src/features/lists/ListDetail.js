import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ListApplicant } from './ListApplicant';

export const ListDetail = () => {
    const { id } = useParams()
    const list = useSelector(state => state.login.user.lists.find(list => list.id == id))

    const listApplicantCreation = list.applicants.map(applicant => <ListApplicant list={list} applicant={applicant} key={applicant.id} />)

    return (
        <div className="p-4 mb-4 mr-4 bg-gray-100 border rounded-lg shadow-md">
            <h1 className='pb-4 text-2xl'>{list.name}</h1>
            {list.applicants.length > 0 ? listApplicantCreation : <p>No candidates so far</p>}
        </div>
    )
}
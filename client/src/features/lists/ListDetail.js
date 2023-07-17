import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ListApplicant } from './ListApplicant';

export const ListDetail = () => {
    const { id } = useParams()
    const list = useSelector(state => state.login.user.lists.find(list => list.id == id))

    const listApplicantCreation = () => list.applicants.map(applicant => <ListApplicant list={list} applicant={applicant} key={applicant.id} />)

    return (
        <div>
            <h1>{list.name}</h1>
            {listApplicantCreation()}
        </div>  
    )
}
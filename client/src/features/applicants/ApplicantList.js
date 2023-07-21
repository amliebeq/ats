import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Applicant } from './Applicant';
import { AddApplicantForm } from './AddApplicantForm';
import { ApplicantFilter } from './ApplicantFilter';

export const ApplicantList = () => {
    const applicants = useSelector(state => state.login.user.applicants)
    const [filterValue, setFilterValue] = useState('')

    const applicantFilter = applicants.filter(applicant => applicant.first_name.toLowerCase().includes(filterValue.toLowerCase()) || applicant.city.toLowerCase().includes(filterValue.toLowerCase()) || applicant.last_name.toLowerCase().includes(filterValue.toLowerCase()) || applicant.state.toLowerCase().includes(filterValue.toLowerCase()) || applicant.position.toLowerCase().includes(filterValue.toLowerCase()) || applicant.status.toLowerCase().includes(filterValue.toLowerCase()))

    const applicantListCreation = () => applicantFilter.map(applicant => <Applicant applicant={applicant} key={applicant.id} />)

    return (
        <div>
            <h1 className='py-8 text-4xl text-center'>Candidates</h1>
            <AddApplicantForm />
            <ApplicantFilter setFilterValue={setFilterValue} />
            <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5">
                {applicants.length === 0 ? <p>No applicants so far!</p> : applicantListCreation()}
            </div>
        </div>
    )
}
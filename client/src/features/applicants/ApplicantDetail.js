import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Notes } from '../notes/Notes';

export const ApplicantDetail = () => {
    const { id } = useParams()
    const applicant = useSelector(state => state.login.user.applicants).find(applicant => applicant.id == id)
    console.log(applicant)

    return (
        <div>
            <Notes applicant={applicant} />
        </div>
    )
}
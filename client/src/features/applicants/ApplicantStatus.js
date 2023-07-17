import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { statusChanged } from '../login_page/loginSlice';

export const ApplicantStatus = ({ applicant }) => {
    const [currentStatus, setCurrentStatus] = useState(applicant.status)
    const [statusChangeVisible, setStatusChangeVisible] = useState(false)
    const dispatch = useDispatch()

    const onStatusChange = (e) => setCurrentStatus(e.target.value)
    const onStatusClick = () => setStatusChangeVisible(!statusChangeVisible)

    const handleStatusSubmitClick = (e) => {
        e.preventDefault()
        const data = {status: currentStatus}
        fetch (`/applicants/${applicant.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(data),
        })
        .then((r) => r.json())
        .then((applicant) => dispatch(statusChanged({id: applicant.id, status: applicant.status})))
        setStatusChangeVisible(false)
    }

    const showStatusForm = () => {
        if (statusChangeVisible === false) {
            return <li onClick={onStatusClick} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Status: {applicant.status}</li>
        }
        else {
            return(
        <form onSubmit={handleStatusSubmitClick}>
            <label>Status:</label>
            <select onChange={onStatusChange} >
                <option value='None'>Select Status</option>
                <option value='New'>New</option>
                <option value='Left Voicemail'>Left Voicemail</option>
                <option value='Phone Screen Scheduled'>Phone Screen Scheduled</option>
                <option value='Assessment'>Assessment</option>
                <option value='First Client Interview'>First Client Interview</option>
                <option value='Second Client Interview'>Second Client Interview</option>
                <option value='Third Client Interview'>Third Client Interview</option>
                <option value='Placed'>Placed</option>
            </select>
            <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" type='submit'>Submit</button>
            <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={onStatusClick}>Cancel</button>
        </form>
            )
        }
    }

    return (
        <div>
            {showStatusForm()}
        </div>
    )
}
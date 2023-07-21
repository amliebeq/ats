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
            return <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer" onClick={onStatusClick}>Status: {applicant.status}</p>
        }
        else {
            return(
        <form onSubmit={handleStatusSubmitClick}>
            <select className="block w-full px-3 py-2 mb-2 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring focus:border-blue-300" onChange={onStatusChange} >
                <option value='None'>Select Status</option>
                <option value='New'>New</option>
                <option value='Left Voicemail'>Left Voicemail</option>
                <option value='Phone Screen'>Phone Screen</option>
                <option value='Assessment'>Assessment</option>
                <option value='First Interview'>First Interview</option>
                <option value='Second Interview'>Second Interview</option>
                <option value='Third Interview'>Third Interview</option>
                <option value='Placed'>Placed</option>
            </select>
            <div className='flex flex-wrap'>
                <button className='block w-1/2 p-3 text-center text-white duration-300 bg-indigo-500 rounded-lg hover:bg-indigo-600' type='submit'>Submit</button>
                <button className='block w-1/2 p-3 text-center text-white duration-300 bg-orange-400 rounded-lg hover:bg-orange-500' onClick={onStatusClick}>Cancel</button>
            </div>
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
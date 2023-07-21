import React from 'react';
import { ToDoList } from './ToDoList';
import { ApplicantActionRequired } from './ApplicantActionRequired';
import { ApplicantStageGraph } from './ApplicantStageGraph';
import { JobActionRequired } from './JobActionRequired';
import { useSelector } from 'react-redux';

export const HomePage = () => {
    return (
        <div>
            <h1 className='py-8 text-2xl text-center'>Welcome, {useSelector(state => state.login.user.first_name)}</h1>
            <ToDoList />
            <ApplicantActionRequired />
            <JobActionRequired />
            <ApplicantStageGraph />
        </div>
    )
}
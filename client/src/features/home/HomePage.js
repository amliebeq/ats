import React from 'react';
import { ToDoList } from './ToDoList';
import { ApplicantActionRequired } from './ApplicantActionRequired';
import { ApplicantStageGraph } from './ApplicantStageGraph';
import { JobActionRequired } from './JobActionRequired';

export const HomePage = () => {
    return (
        <div>
            <ToDoList />
            <ApplicantActionRequired />
            <JobActionRequired />
            <ApplicantStageGraph />
        </div>
    )
}
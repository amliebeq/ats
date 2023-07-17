import React from 'react';
import { ToDoList } from './ToDoList';
import { ApplicantActionRequired } from './ApplicantActionRequired';
import { ApplicantStageGraph } from './ApplicantStageGraph';

export const HomePage = () => {
    return (
        <div>
            <ToDoList />
            <ApplicantActionRequired />
            <ApplicantStageGraph />
        </div>
    )
}
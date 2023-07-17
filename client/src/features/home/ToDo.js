import React from 'react';
import { RemoveToDo } from './RemoveToDo';

export const ToDo = ({ toDo }) => {
    return (
        <div className='flex flex-row'>
            <p>{toDo.item}</p>
            <RemoveToDo toDo={toDo} />
        </div>
    )
}
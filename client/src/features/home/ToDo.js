import React from 'react';
import { RemoveToDo } from './RemoveToDo';

export const ToDo = ({ toDo }) => {
    return (
        <div className='flex flex-wrap break-all'>
            <ul>
                <li className='pr-4'>{toDo.item}</li>
            </ul>
            <RemoveToDo toDo={toDo} />
        </div>
    )
}
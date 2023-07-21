import React from 'react';
import { RemoveToDo } from './RemoveToDo';

export const ToDo = ({ toDo }) => {
    return (
        <div>
            <ul>
                <li>{toDo.item}</li>
            </ul>
            <RemoveToDo toDo={toDo} />
        </div>
    )
}
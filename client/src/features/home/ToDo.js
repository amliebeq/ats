import React from 'react';
import { RemoveToDo } from './RemoveToDo';

export const ToDo = ({ toDo }) => {
    return (
        <div>
            <p>{toDo.item}</p>
            <RemoveToDo toDo={toDo} />
        </div>
    )
}
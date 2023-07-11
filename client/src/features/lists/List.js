import React from 'react';
import { DeleteList } from './DeleteList';

export const List = ({ list }) => {
    console.log(list)
    return (
        <ul className="border-black border-4 p-8">
            <li>Name: {list.name}</li>
            <li>Applicant Count: {list.applicants.length ? list.applicants.length : 0 }</li>
            <DeleteList list={list} />
        </ul>
    )
}
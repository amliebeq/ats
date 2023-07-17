import React from 'react';
import { AddNote } from './AddNote';
import { Note } from './Note';

export const Notes = ({ applicant }) => {
    const notes = applicant.notes.map(note => <Note key={note.id} note={note}/>)

    return (
        <div>
            <AddNote applicant={applicant}/>
            {notes}
        </div>
    )

}
import React from 'react';
import { AddNote } from './AddNote';
import { Note } from './Note';

export const Notes = ({ applicant }) => {
    const notes = applicant.notes.map(note => <Note key={note.id} note={note}/>)

    return (
        <div>
            <h1>Notes</h1>
            <AddNote applicant={applicant}/>
            {notes.length > 0 ? notes : <p>No notes yet</p>}
        </div>
    )

}
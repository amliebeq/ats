import React from 'react';

export const Notes = ({ applicant }) => {
    const notes = applicant.notes.map(note => <li key={note.id}>{note.body}</li>)

    return (
        <div>
            {notes}
        </div>
    )

}
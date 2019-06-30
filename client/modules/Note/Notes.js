import React from 'react';
import Note from './Note';
import Edit from '../../components/Edit'

const Notes = ({ notes, laneId, onValueClick, onUpdate, onDelete, moveWithinLane}) => (
    <ul>{notes.map((note) =>
      <Note
        id={note.id}
        key={note.id}
        moveWithinLane={moveWithinLane}
        laneId={laneId}
      >
        <Edit
          editing={note.editing}
          value={note.task}
          onValueClick={() => onValueClick(note.id)}
          onUpdate={task => onUpdate({
            ...note,
            task,
            editing: false,
          })}
          onDelete={() => onDelete(note.id, laneId)}
        />
      </Note>
    )}</ul>
);

export default Notes;
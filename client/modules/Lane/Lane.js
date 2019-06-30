import React from 'react';
import NotesContainer from '../Note/NoteContainer';
import Edit from '../../components/Edit'

const Lane = (props) => {
  const { connectDropTarget, lane, laneNotes, editLane, addNote, updateLane, deleteLane } = props;
  const laneId = lane.id;

  return connectDropTarget(
    <div> 
      <div>
        <div>
          <button onClick={() => addNote({ task: 'New Note'}, laneId)}>Add Note</button>
        </div>
        <Edit
          editing={lane.editing}
          value={lane.name}
          onValueClick={() => editLane(lane.id)}
          onUpdate={name => updateLane({ ...lane, name, editing: false })}
        />
        <div>
          <button onClick={() => deleteLane(laneId)}>Remove Lane</button>
        </div>
      </div>
      <NotesContainer
        notes={laneNotes}
        laneId={laneId}
      />
    </div>
  );
};

export default Lane;

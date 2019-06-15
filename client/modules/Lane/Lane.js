import React, { PropTypes } from 'react';
import NotesContainer from '../Note/NoteContainer';
import Edit from '../../components/Edit'


import styles from './Lane.css';

const Lane = (props) => {
  const { connectDropTarget, lane, laneNotes, editLane, addNote, updateLane, deleteLane } = props;
  const laneId = lane.id;

  return connectDropTarget(
    <div className={styles.Lane}>
      <div className={styles.LaneHeader}>
        <div className={styles.LaneAddNote}>
          <button onClick={() => addNote({ task: 'New Note'}, laneId)}>Add Note</button>
        </div>
        <Edit
          className={styles.LaneName}
          editing={lane.editing}
          value={lane.name}
          onValueClick={() => editLane(lane.id)}

          onUpdate={name => updateLane({ ...lane, name, editing: false })}
        />
        <div className={styles.LaneDelete}>
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
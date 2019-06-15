import { connect } from 'react-redux';
import Notes from './Notes';
import { deleteNoteRequest, updateNoteRequest, editNote, moveWithinLane, } from './NoteActions';
import { createNoteRequest } from '../Note/NoteActions';

const mapDispatchToProps = {
  onValueClick: editNote,
  onUpdate: updateNoteRequest,
  onDelete: deleteNoteRequest,
  moveWithinLane,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);
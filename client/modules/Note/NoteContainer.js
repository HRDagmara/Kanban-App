import { connect } from 'react-redux';
import Notes from './Notes';
import { deleteNoteRequest, updateNoteRequest, editNote, moveWithinLane, createNoteRequest } from './NoteActions';

const mapDispatchToProps = {
  addNote: createNoteRequest,
  onValueClick: editNote,
  onUpdate: updateNoteRequest,
  onDelete: deleteNoteRequest,
  moveWithinLane,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);

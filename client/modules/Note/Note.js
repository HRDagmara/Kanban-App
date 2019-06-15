import React from 'react';
import styles from './Note.css';
import {DragSource, DropTarget} from 'react-dnd';
import { compose } from 'redux';
import ItemTypes from '../Kanban/itemTypes';


const noteSource = {
  beginDrag(props) {
    return {
      id: props.id,
      laneId: props.laneId,
    };
  },
  isDragging(props, monitor) {
    return props.id === monitor.getItem().id;
  }
};

const noteTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();

    if (targetProps.id !== sourceProps.id) {
      targetProps.moveWithinLane(targetProps.laneId, targetProps.id, sourceProps.id);
    }
  }
};

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const {connectDragSource, isDragging,
      editing, children} = this.props;

    const dragSource = editing ? a => a : connectDragSource;

    return dragSource(
      <li className={styles.Note}
        style={{
        opacity: isDragging ? 0 : 1
      }} >{children}</li>
    );
  }
}

export default compose(
  DragSource(ItemTypes.NOTE, noteSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })),
  DropTarget(ItemTypes.NOTE, noteTarget, (connect) => ({
    connectDropTarget: connect.dropTarget()
  }))
)(Note);
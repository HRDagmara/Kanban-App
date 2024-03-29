import React from 'react';
import {DragSource, DropTarget} from 'react-dnd';
import { compose } from 'redux';
import ItemTypes from '../Kanban/itemTypes';


class Note extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const {connectDragSource, connectDropTarget, isDragging,
      editing, children} = this.props;

    const dragSource = editing ? a => a : connectDragSource;

    return dragSource(connectDropTarget(
      <li
        style={{
        opacity: isDragging ? 0 : 1
      }} >{children}</li>
    ));
  }
}

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

    const lane = targetProps.laneId === sourceProps.laneId
    if (targetProps.id !== sourceProps.id && lane) {
      targetProps.moveWithinLane(targetProps.laneId, targetProps.id, sourceProps.id);
    }
  }
};

export default compose(
  DragSource(ItemTypes.NOTE, noteSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })),
  DropTarget(ItemTypes.NOTE, noteTarget, (connect) => ({
    connectDropTarget: connect.dropTarget()
  }))
)(Note);

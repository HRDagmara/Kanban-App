import React from 'react';
import { connect } from 'react-redux';
import Lanes from '../Lane/Lanes';
import { createLane } from '../Lane/LaneActions'
import styles from '../Lane/Lane.css';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { compose } from 'redux';

const Kanban = (props) => (
  <div>
    <button className={styles.AddLane} onClick={() => props.createLane({ name: 'New lane'})}>Add lane</button>
    <Lanes lanes={props.lanes} />
  </div>
);

Kanban.need = [() => { return fetchLanes(); }];

const mapStateToProps = state => ({
  lanes: Object.values(state.lanes)
});

const mapDispatchToProps = { createLane }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  DragDropContext(HTML5Backend)
)(Kanban);

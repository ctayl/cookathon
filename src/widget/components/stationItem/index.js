import React, { useState } from "react";
import { DropTarget } from "react-dnd";
import './style.css'
 function StationItem ({droppedItems, isOver, canDrop, connectDropTarget,children, color }) {
  const isActive = isOver && canDrop;
    let backgroundColor = '';
   if (isActive) {
     backgroundColor = 'darkgreen';
   }
   else if (canDrop) {
     backgroundColor = 'darkkhaki';
   }
  return connectDropTarget (
    <div className="station" style={{backgroundColor:color}} ref={connectDropTarget}>
      {children}
    </div>
  );
}

export default DropTarget((props) => props.accepts, {
  drop(props, monitor) {
    if (props.onDrop) {
      props.onDrop(monitor.getItem());
     }
  },
  canDrop(props, monitor) {
    if (props.acceptMultiple) {
      return true;
    }
    return props.droppedItems.length === 0;
  }
}, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))(StationItem);


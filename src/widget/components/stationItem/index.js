import React, { useState } from "react";
import { DropTarget } from "react-dnd";
import './style.css'
 function StationItem ({droppedItems, isOver, canDrop, connectDropTarget,children }) {
  const isActive = isOver && canDrop;
    let backgroundColor = '';
   if (isActive) {
     backgroundColor = 'darkgreen';
   }
   else if (canDrop) {
     backgroundColor = 'darkkhaki';
   }
   console.log(droppedItems);
  return connectDropTarget (
    <div className="station" ref={connectDropTarget} style={{ backgroundColor }}>
      {children}
    </div>
  );
}

export default DropTarget((props) => props.accepts, {
  drop(props, monitor) {
      props.onDrop(monitor.getItem());
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


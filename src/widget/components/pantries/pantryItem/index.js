import React, { useState } from "react";
import './style.css'
import { DragSource } from 'react-dnd';

 function PantryItem({pantry, isDragging, connectDragSource}) {

  const opacity = isDragging ? 0.4 : 1;

  return connectDragSource (
    <div className="pantry" style={{opacity}}>
      <div className="pantry-img">
      </div>
      <div className="pantry-title">
        <span> {pantry.name}</span>
      </div>
    
    </div>
  );
}


export default DragSource((props) => props.type, {
  beginDrag: (props) => ({ pantry: props.pantry}),
}, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))(PantryItem);

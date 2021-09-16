import React, { useState } from "react";
import './style.css'
export default function PantryItem({pantry}) {
  return (
    <div className="pantry">
      <div className="pantry-img">
      </div>
      <div className="pantry-title">
        <span> {pantry.name}</span>
      </div>
    
    </div>
  );
}

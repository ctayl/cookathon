import React, { useState } from "react";
import { STATE } from "../../../data/Enums";
import PantryItem from "./pantryItem";
import './style.css'
export default function Pantries({ pantryItems }) {
 
  const listItems = pantryItems.map((pantry, index) =>
    <div className="pantry-item">
      <PantryItem pantry={pantry} key={ index } type= {STATE.RAW}/>
    </div>
  );
  return (
    <div>
      <h4 className="section-title">Pantries</h4>
      <div className="pantries-container">
        {listItems}
      </div>
    </div>
  );
}


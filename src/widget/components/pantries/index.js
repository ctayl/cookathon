import React, { useState } from "react";
import { STATE } from "../../../data/Enums";
import PantryItem from "./pantryItem";
import './style.css'
export default function Pantries(props) {
  const [count, setCount] = useState(0);
  const pantries = [
    {
      id: 1,
      name: "Pantry 1",
      images: {
        raw: '',
        prepped: '',
        cooked: ''
      },
      type: STATE.PREPPED
    },
    {
      id: 2,
      name: "Pantry 2",
      recipe: [],
      type: STATE.PREPPED
    },
    {
      id: 3,
      name: "Pantry 3",
      recipe: [],
      type: STATE.PREPPED
    },
    
  ];

  return (
    <div>
      <h4 className="section-title">Pantries</h4>
      <div className="pantries-container">
        {pantries.map((pantry, index) =>
          <div className="pantry-item">
            <PantryItem pantry={pantry} key={ index } {...props} />
          </div>
        )}
      </div>
    </div>
  );
}


import React, { useState } from "react";
import PantryItem from "./pantryItem";
import './style.css'
export default function Pantries({ pantryItems }) {
  const [count, setCount] = useState(0);
  // const pantries = [
  //   {
  //     name: "Pantry 1",
  //     images: {
  //       raw: '',
  //       prepped: '',
  //       cooked: ''
  //     }
  //   },
  //   {
  //     name: "Pantry 2",
  //     recipe: []
  //   },
  //   {
  //     name: "Pantry 3",
  //     recipe: []
  //   },
    
  // ];

  const listItems = pantryItems.map((pantry) =>
      <div className="pantry-item">
        <PantryItem pantry={pantry}/>
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

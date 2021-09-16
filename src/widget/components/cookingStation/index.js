import React, { useState } from "react";
import StationItem from "../stationItem";
import './style.css'
export default function CookingStations() {
  const [count, setCount] = useState(0);
  const prepStations = [
    'station1',
    'station2',
    'station3',
  ];

  const listItems = prepStations.map((station) =>
      <div className="station-item">
        <StationItem station={station}/>
      </div>
  );
  return (
    <div>
      <h4 className="section-title">Cooking Station</h4>
      <div className="stations-container">
          {listItems}
      </div>
    </div>
  );
}

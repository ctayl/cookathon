import React, { useCallback, useEffect, useState } from "react";
import { STATE } from "../../../data/Enums";
import pantryItem from "../pantries/pantryItem";
import StationItem from "../stationItem";
import './style.css'
export default function PrepStations({  }) {
  const accepts = [STATE.PREPPED];
  const [stations, setStations] = useState({});
  const [pantry, setPantry] = useState(null);

  useEffect(() => {
    prepareStations()
  }, [])

  const prepareStations = () => {
    const prepStat = {};
    for (let i = 0; i < 3; i++) {
      prepStat[i] = [];
    }
    setStations(prepStat);
  }

  const handleDrop = useCallback((index, item) => {
    
    setStations({ ...stations, [index]: stations[index].push(item.pantry) });

    console.log(stations);

  }, [stations]);

  

  const listItems = Object.values(stations).map((droppedItems, index) =>(
    <div className="station-item">
      <StationItem accepts={accepts} droppedItems={droppedItems} acceptMultiple={false}
        onDrop={(item) => handleDrop(index, item)} key={index} >
        {droppedItems.length > 0 ? (<pantryItem pantry={droppedItems[0]}/>) : null}
      </StationItem>
    </div>
    )
  );
  return (
    <div>
      <h4 className="section-title">Prep Station</h4>
      <div className="stations-container">
          {listItems}
      </div>
    </div>
  );
}

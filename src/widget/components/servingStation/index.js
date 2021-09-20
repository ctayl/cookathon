import React, { useCallback, useEffect, useState } from "react";
import { STATE } from "../../../data/Enums";
import PantryItem from "../pantries/pantryItem";
import StationItem from "../stationItem";
import './style.css'
export default function ServingStations({servingStations}) {
  const accepts = [STATE.COOKED];
  const [stations, setStations] = useState({});

  useEffect(() => {
    prepareStations()
  }, [])

  const prepareStations = () => {
    const servingStat = {};
    for (let i = 0; i < servingStations.length; i++) {
      servingStat[i] = [];
    }
    setStations(servingStat);
  }

  const handleDrop = useCallback((index, item) => {
    
    setStations({ ...stations, [index]: [...stations[index], item.pantry] });

    console.log("Serving Station",stations);

  }, [stations]);

  

  const listItems = Object.values(stations).map((droppedItems, index) =>(
    <div className="station-item">
      <StationItem accepts={accepts} droppedItems={droppedItems} acceptMultiple={true} color={"#9ba3ff"}
        onDrop={(item) => handleDrop(index, item)} key={index} >
        {droppedItems.length > 0 ? (
          droppedItems.map((droppedItem,index) => <PantryItem pantry={droppedItem} key={index}  type= {STATE.COOKED}/>)
        ) : null}
      </StationItem>
    </div>
    )
  );
  return (
    <div>
      <h4 className="section-title">Serving Station</h4>
      <div className="stations-container">
          {listItems}
      </div>
    </div>
  );
}

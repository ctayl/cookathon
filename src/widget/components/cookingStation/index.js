import React, { useCallback, useEffect, useState } from "react";
import { STATE } from "../../../data/Enums";
import PantryItem from "../pantries/pantryItem";
import StationItem from "../stationItem";
import './style.css'
export default function CookingStations({cookingStations}) {
  const accepts = [STATE.PREPPED];
  const [stations, setStations] = useState({});

  useEffect(() => {
    prepareStations()
  }, [])

  const prepareStations = () => {
    const cookStat = {};
    for (let i = 0; i < cookingStations.length; i++) {
      cookStat[i] = [];
    }
    setStations(cookStat);
  }

  const handleDrop = useCallback((index, item) => {
    
    setStations({ ...stations, [index]: [...stations[index], item.pantry] });

    console.log("Cooking Station",stations);

  }, [stations]);

  const handleRemove = useCallback((index, item) => {

    const filteredData = stations[index].filter(elem => elem.id !== item.pantry.id);
    
    setStations({ ...stations, [index]: [...filteredData] });

    console.log("Remove Dropped",index, filteredData);

  }, [stations]);

  

  const listItems = Object.values(stations).map((droppedItems, index) =>(
    <div className="station-item">
      <StationItem accepts={accepts} droppedItems={droppedItems} acceptMultiple={true}
        onDrop={(item) => handleDrop(index, item)} key={index} >
        {droppedItems.length > 0 ? (
          droppedItems.map((droppedItem,index) => <PantryItem pantry={droppedItem} key={index}  type= {STATE.COOKED} onDrop={(item) => handleRemove(index, item)}/>)
        ) : null}
      </StationItem>
    </div>
    )
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

import React, { useCallback, useEffect, useState } from "react";
import { STATE } from "../../../data/Enums";
import PantryItem from "../pantries/pantryItem";
import StationItem from "../stationItem";
import './style.css'
export default function PrepStations({ prepStations,prepStationClick }) {
  const accepts = [STATE.RAW];
  const [stations, setStations] = useState({});
  const [pantry, setPantry] = useState(null);

  useEffect(() => {
    prepareStations()
  }, [])

  const prepareStations = () => {
    const prepStat = {};
    for (let i = 0; i < prepStations.length; i++) {
      prepStat[i] = [];
    }
    setStations(prepStat);
  }

  const handleDrop = useCallback((index, item) => {
    
    setStations({ ...stations, [index]: [...stations[index], item.pantry] });

    console.log("Prep Station",stations);

  }, [stations]);

  const handleRemove = useCallback((index, item) => {
    
    setStations({ ...stations, [index]: [] });

    console.log("Remove Dropped",index, item);

  }, [stations]);


  const callGamePrepStationClick=(droppedItems,index)=>{
    prepStationClick(droppedItems,index,(completed,image)=>{
      if(completed){
        droppedItems[0].state=STATE.PREPPED;
        droppedItems[0].image=image;
        setStations({...stations,[index]:[droppedItems[0]]});
      }
    })
  }
  const listItems = Object.values(stations).map((droppedItems, index) =>(
    <div className="station-item" onClick={()=>callGamePrepStationClick(droppedItems,index)}>
      <StationItem accepts={accepts} droppedItems={droppedItems} acceptMultiple={false} color={'#8243EC'}
        onDrop={(item) => handleDrop(index, item)} key={index} >
        {droppedItems.length > 0 ? (<PantryItem pantry={droppedItems[0]} type= {STATE.PREPPED} onDrop={(item) => handleRemove(index, item)}/>) : null}
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

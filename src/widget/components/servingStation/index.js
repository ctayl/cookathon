import React, { useCallback, useEffect, useState } from "react";
import { STATE } from "../../../data/Enums";
import PantryItem from "../pantries/pantryItem";
import StationItem from "../stationItem";
import './style.css'
export default function ServingStations({servingStations, completeOrders}) {
  const accepts = [STATE.COOKED];
  const trashAccepts = [STATE.COOKED, STATE.PREPPED, STATE.RAW];
  const [stations, setStations] = useState({});
  const [doneStation, setDoneStation] = useState({});

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

    completeOrders([...stations[index], item.pantry], (done, recipe) => {
      if (done) {
        setDoneStation({ index, image: recipe.image });
        setTimeout(() => {
          setStations({ ...stations, [index]: [] });
          setDoneStation({ });
        }, 2000);
      }
    })

  }, [stations, doneStation]);

  

  const listItems = Object.values(stations).map((droppedItems, index) =>(
    <div className="station-item">
      <StationItem accepts={accepts} droppedItems={droppedItems} acceptMultiple={true} color={"#9ba3ff"}
        onDrop={(item) => handleDrop(index, item)} key={index} >
        {droppedItems.length > 0  && doneStation.index !== index ? (
          droppedItems.map((droppedItem,index) => <PantryItem pantry={droppedItem} key={index}/>)
        ) : doneStation.index === index ? <div className="img-block">
          <img src={doneStation.image} alt="" />
      </div> : null}
      </StationItem>
    </div>
    )
  );
  return (
    <div>
      <h4 className="section-title">Serving Station</h4>
      <div className="stations-container">
        <StationItem accepts={trashAccepts}  acceptMultiple={true} >
          <div className="img-block">
            <img src="../widget/images/trash.png" alt="" />
          </div>
        </StationItem>
        {listItems}
      </div>
    </div>
  );
}

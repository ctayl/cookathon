import React, { Component } from "react";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import Orders from "../components/orders";
import Pantries from "../components/pantries";
import PrepStations from "../components/prepStation";
import CookingStations from "../components/cookingStation";
import ServingStations from "../components/servingStation";

export default class Game extends Component {
  render() {
    return (
      <div>
        <Orders />
        <DndProvider backend={HTML5Backend}>
          <Pantries />
          <PrepStations />
          <CookingStations></CookingStations>
          <ServingStations></ServingStations>
        </DndProvider>
      </div>
    );
  }
}

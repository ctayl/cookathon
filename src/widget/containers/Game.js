import React, { useState } from "react";
import CookingStations from "../components/cookingStation";
import Orders from "../components/orders";
import Pantries from "../components/pantries";
import PrepStations from "../components/prepStation";
import ServingStations from "../components/servingStation";

export default function Game() {

  return (
    <div>
      <Orders />
      <Pantries />
      <PrepStations />
      <CookingStations></CookingStations>
      <ServingStations></ServingStations>
    </div>
  );
}

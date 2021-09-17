import React, { Component, useState } from "react";
import CookingStations from "../components/cookingStation";
import Orders from "../components/orders";
import Pantries from "../components/pantries";
import PrepStations from "../components/prepStation";
import ServingStations from "../components/servingStation";

import { level1 } from "../../dataAccess/Level1";
import { basicPantries } from "../../dataAccess/BasicPantries";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tick: null,
      timer: 0,
      levels: [level1],
      currentLevel: null,
      level: null,
      score: 0,
      orders: [],
      prepStations: [],
      cookingStations: [],
      servingStations: [],
      pantryItems: basicPantries
    };
  }

  start = () => {
    this.setState(({ levels }) => {
      const currentLevel = levels[0];
      const prepStations = Array(currentLevel.kitchen.prepStations).fill({});
      const cookingStations = Array(currentLevel.kitchen.cookingStations).fill({});
      const servingStations = Array(currentLevel.kitchen.servingStations).fill({});

      return { level: 0, currentLevel, prepStations, cookingStations, servingStations };
    });

    this.tick = setInterval(() => {
      this.setState(({ timer, currentLevel, orders }) => {
        timer += 1;

        const upcomingOrders = [];

        currentLevel.orders.forEach((order) => {
          if (order.startTime <= timer) {
            orders.push(order);
          } else {
            upcomingOrders.push(order);
          }
        });

        currentLevel.orders = upcomingOrders;

        return { timer, orders };
      });
    }, 1000);
  }

  render() {
    console.error(this.state);
    const { currentLevel } = this.state;
    if (!currentLevel) return <div onClick={this.start}>Start Game</div>;

    const { prepStations, cookingStations, servingStations, pantryItems, orders } = this.state;
    return (
      <div>
        <Orders orders={orders} />
        <Pantries pantryItems={pantryItems} />
        <PrepStations prepStations={prepStations} />
        <CookingStations cookingStations={cookingStations} />
        <ServingStations servingStations={servingStations} />
      </div>
    );
  }
}

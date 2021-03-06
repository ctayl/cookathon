import React, { Component } from "react";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import Orders from "../components/orders";
import Pantries from "../components/pantries";
import PrepStations from "../components/prepStation";
import CookingStations from "../components/cookingStation";
import ServingStations from "../components/servingStation";

import { level1 } from "../../dataAccess/Level1";
import { basicPantries } from "../../dataAccess/BasicPantries";
import './style.css'
import { ACTIONS, STATE } from "../../data/Enums";

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


  calculateScore = (order) => {
    this.setState(({score}) => {
      score += order.markup;
      return { score };
     }) 
  }


  
  render() {
    const { currentLevel } = this.state;
    if (!currentLevel) return <div className="start-game-block">
      <button type="button" onClick={this.start}>Start Game</button>
    </div>;

    const { prepStations, cookingStations, servingStations, pantryItems, orders } = this.state;

    const prepStationClick = (droppedItems,index,callback)=>{
      if(droppedItems && droppedItems.length == 1){
        let clickedOn = droppedItems[0];
        var orders=this.state.orders;
        for (let i = 0; i < orders.length; i++) {
          const order = orders[i];
          for (let r = 0; r < order.recipes.length; r++) {
            const recp = order.recipes[r];
            for (let s = 0; s < recp.stages.length; s++) {
              const stage = recp.stages[s];
              let find = stage.pantries.find(el => el.id === clickedOn.id);
              if (find) {
                if(stage.state == STATE.RAW && stage.action == ACTIONS.PREP){
                  if(stage.prepClicks>0){
                    stage.prepClicks=stage.prepClicks-1;
                    this.setState({orders:orders});
                  }else{
                    return callback(true,stage.image);
                  }
                }
              }
            }
          }
        }
      }
      return callback(false,null);
    };

    const completeOrders = (droppedItems, callback) => {
      if (droppedItems && droppedItems.length > 0) {
        for (const order of this.state.orders) {
          for (const recipe of order.recipes) {
            let cookStages = recipe.stages.filter(elem => elem.action === ACTIONS.COOK);
            let matchedStages = cookStages.filter(elem1 => droppedItems.some(elem2 => elem1.pantries.find(el=>el.id==elem2.id)));
            if (matchedStages.length === cookStages.length) {
              this.calculateScore(order);
              callback(true, recipe);
              return;
            }
          }
        }
        callback(false);
      } else {
        callback(false);
      }

    }
  

    return (
      <div>
        <div className="score">
          <span>SCORE {this.state.score}$</span>
        </div>
        <Orders orders={orders} />
        <DndProvider backend={HTML5Backend}>
          <Pantries pantryItems={pantryItems} />
          <PrepStations prepStations={prepStations} prepStationClick={prepStationClick}/>
          <CookingStations cookingStations={cookingStations} />
          <ServingStations servingStations={servingStations} completeOrders={completeOrders}/>
        </DndProvider>
      </div>
    );
  }
}

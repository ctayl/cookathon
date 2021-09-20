import React, { useState } from "react";
import './style.css'
export default function OrderItem({order}) {
  return (
    <div className="order">
      <div className="order-img-block">
        <img className="order-img" src={order.recipes[0].image}/>
      </div>
      <div className="order-title">
        <span> {order.recipes[0].name}</span>
      </div>
      <div className="order-recipe">
      </div>
    </div>
  );
}

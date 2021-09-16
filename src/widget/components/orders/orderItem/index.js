import React, { useState } from "react";
import './style.css'
export default function OrderItem({order}) {
  return (
    <div className="order">
      <div className="order-img">
      </div>
      <div className="order-title">
        <span> {order.name}</span>
      </div>
      <div className="order-recipe">
      </div>
    </div>
  );
}

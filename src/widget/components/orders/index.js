import React, { useState } from "react";
import OrderItem from "./orderItem";
import './style.css'
export default function Orders({ orders }) {
  const [count, setCount] = useState(0);
  // const orders = [
  //   {
  //     name: "Order 1",
  //     recipe: []
  //   },
  //   {
  //     name: "Order 2",
  //     recipe: []
  //   },
  //   {
  //     name: "Order 3",
  //     recipe: []
  //   },
  //   {
  //     name: "Order 1",
  //     recipe: []
  //   },
  //   {
  //     name: "Order 2",
  //     recipe: []
  //   },
  //   {
  //     name: "Order 3",
  //     recipe: []
  //   },
  // ];

  const listItems = orders.map((order) =>
      <div className="order-item">
        <OrderItem order={order}/>
      </div>
  );
  return (
    <div>
      <h4 className="section-title">Orders</h4>
      <div className="orders-container">
          {listItems}
      </div>
    </div>
  );
}

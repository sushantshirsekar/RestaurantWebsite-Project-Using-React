import React, { useState } from "react";

import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  let [total, setTotal] = useState(0);

  const addItemToCartHandler = (item) => {
    let previousData = [...items];
    let existingItemIndex = items.findIndex((item1) => item1.id === item.id);

    if (existingItemIndex === -1) {
      previousData.push(item);
    } else {
      previousData[existingItemIndex].quantity =
        Number(previousData[existingItemIndex].quantity) + 1;
    }
    updateItems(previousData);

    let newTotal = 0;
    previousData.forEach((item) => {
      newTotal += Number(item.quantity) * Number(item.price);
    });
    setTotal(newTotal);
  };

  const reomveItemFromCartHandler = (id) => {
    let previousData = [...items];
    let existingItemIndex = items.findIndex((item1) => item1.id === id);
    console.log(previousData[existingItemIndex].quantity);
    if(previousData[existingItemIndex].id === id)
    {
      previousData[existingItemIndex].quantity = Number(previousData[existingItemIndex].quantity) -1; 
    }
    let newData = previousData.filter((item)=>   item.quantity !== 0)
    updateItems(newData);
    let newTotal = 0;
    newData.forEach((item) => {
      newTotal += Number(item.quantity) * Number(item.price);
    });
    setTotal(newTotal);

  };
  const cartContext = {
    items: items,
    totalAmount: total,
    addItem: addItemToCartHandler,
    removeItem: reomveItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

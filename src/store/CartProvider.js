import React, {useState} from "react";

import CartContext from "./cart-context";


const CartProvider = props => {
    
    const [items, updateItems] = useState([]);
    const addItemToCartHandler = (item) => {
        updateItems([...items,item]);
    }
    const reomveItemFromCartHandler = (id) => {

    }
    const cartContext = {
        items:items,
        totalAmount:0,
        addItem: addItemToCartHandler,
        removeItem: reomveItemFromCartHandler
    }
 return <CartContext.Provider value={cartContext}>
    {props.children}
 </CartContext.Provider>
}

export default CartProvider;
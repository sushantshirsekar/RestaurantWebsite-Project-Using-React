import React, { useContext } from "react";
import classes from "./CartItem.module.css";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const ctx = useContext(CartContext);
  const price = `₹${props.price.toFixed(2)}`;
 const onAdd = () => {
  return ctx.addItem(props);
 }

 
 const onRemove = () => {
  return ctx.removeItem(props.id);
 }


  return (
    <li className={classes["cart-item"]} id={props.id}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>
            x{props.quantity}
          </span>

        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

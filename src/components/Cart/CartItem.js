import React, { useContext } from "react";
import  {useState} from "react";

import classes from "./CartItem.module.css";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const ctx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const [quantity, setQuantity] = useState(props.quantity);
  const quantityRemoveHandler = () => {
    return Number(setQuantity(Number(quantity)-1));
  };
  
  const quantityAddHandler = () => {
    return Number(setQuantity(Number(quantity)+1));
  }
  

  return (
    <li className={classes["cart-item"]}>
      {console.log(ctx.items)}
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>
            x{quantity}
          </span>

        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={quantityRemoveHandler}>−</button>
        <button onClick={quantityAddHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

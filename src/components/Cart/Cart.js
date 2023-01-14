import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItemCtx = useContext(CartContext);
  const hasItems = cartItemCtx.items.length > 0;

  const carItems = (
    <ul className={classes["cart-items"]}>
      {cartItemCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onBack={props.onCloseCart}>
      {carItems}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹{cartItemCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

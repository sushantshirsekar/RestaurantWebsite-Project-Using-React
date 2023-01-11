import React,{ useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItemCtx = useContext(CartContext);
  
  

  return (
    <Modal onBack={props.onCloseCart}>
      {cartItemCtx.items.map((item)=>{
        return <CartItem key={item.id} name={item.name} price={item.price} quantity={item.quantity}/>
      })}
       <div className={classes.total}>
        <span>Total Amount</span>
        <span>{0}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
import React, { useContext } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);

 
  const onClickAdd = (event) => {
    event.preventDefault();
    let quantity = document.getElementById("amount_" + props.id).value;
    cartCtx.addItem({ ...props.item, quantity: quantity });
  };
  return (
    <form className={classes.form} onSubmit={onClickAdd}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit" id={props.id}>
        + Add 
      </button>
    </form>
  );
};

export default MealItemForm;

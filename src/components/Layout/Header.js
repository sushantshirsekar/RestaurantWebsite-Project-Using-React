import {Fragment} from "react";

import mealImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";



const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 style={{textAlign: "center"}} >NodeMeals</h1>
        <HeaderCartButton /> 
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="Food" />
      </div>
    </Fragment>
  );
};

export default Header;

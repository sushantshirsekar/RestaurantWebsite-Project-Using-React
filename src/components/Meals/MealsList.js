import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import classes from "./MealsList.module.css";

const MealsList = () => {
  const data = [
    {
      id: "m1",
      name: "Biryani",
      description: "Best dum biryani in India",
      price: 300,
    },
    {
      id: "m2",
      name: "Chicken Chilly",
      description: "One of our speciality",
      price: 220,
    },
    {
      id: "m3",
      name: "Butter Chicken",
      description: "Best wth butter garlic naan",
      price: 240,
    },
    {
      id: "m4",
      name: "Chicken Shwarma",
      description: "Soft chicken filled with mayo and schezwan",
      price: 120,
    },
    {
      id: "m5",
      name: "Veg Paneer Biryani",
      description: "Best biryani for veg people",
      price: 200,
    },
    {
      id: "m6",
      name: "Panner Chilly",
      description: "Veg starters, with semi-gravy",
      price: 250,
    },
    {
      id: "m7",
      name: "Paneer Shwarma",
      description: "Some extras for veg people",
      price: 100,
    },
  ];
  const list = data.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id = {meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{list}</ul>
      </Card>
    </section>
  );
};
export default MealsList;

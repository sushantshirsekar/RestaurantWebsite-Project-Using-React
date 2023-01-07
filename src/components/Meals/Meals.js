import React,{Fragment} from "react";

import MealsList from "./MealsList";
import Summary from "./Summary";

const Meals = (props) => {
    return <Fragment>
        <Summary />
        <MealsList />
    </Fragment>
}
export default Meals;
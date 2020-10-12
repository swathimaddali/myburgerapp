import React from "react";
import classes from './Burger.css';
import BurgerIngredient from "../BurgerIngredients/BurgerIngredients"
const burger = (props) => {
    return (
        <BurgerIngredient className={classes.Burger} type="bread-top"></BurgerIngredient>);
}


export default burger;
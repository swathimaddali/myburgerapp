import React, { Component } from "react";
import classes from './BurgerIngredient.css'
import propTypes from "prop-types"
class BurgerIngredients extends Component {
    render() {
        let ingredient = null;
        switch (this.props.type) {

            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = <div className={classes.BreadTop}></div>;
                break;
            default:
                ingredient = null;


        }
        return ingredient;

    }
}
BurgerIngredients.prototypes = { type: propTypes.string.isRequired }

export default BurgerIngredients;
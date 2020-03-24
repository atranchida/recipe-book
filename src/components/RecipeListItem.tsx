import React from "react";
import { Recipe } from "../interfaces/Recipe";
import IngredientList from "./IngredientList";
import styles from '../css/RecipeList.module.css';

interface Props {
    recipe: Recipe;
}

const RecipeListItem = ({ recipe }: Props) => {
    return (<div className={styles.RecipeCard}>
        <div className={styles.CardContents}>
            <h1>{recipe.name}</h1>
            <IngredientList ingredients={recipe.ingredients} />
        </div>
    </div>)
};

export default RecipeListItem;
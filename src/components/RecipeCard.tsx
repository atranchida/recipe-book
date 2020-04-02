import React from "react";
import { Recipe } from "../interfaces/Recipe";
import IngredientList from "./IngredientList";
import styles from '../css/RecipeList.module.css';

interface Props {
    recipe: Recipe;
}

function RecipeCard({ recipe }: Props) {
    return (<div className={styles.RecipeCard}>
        <button className={styles.DeleteButton}>X</button>
        <div className={styles.CardContents}>
            <h1>{recipe.name}</h1>
            <IngredientList ingredients={recipe.ingredients} />
        </div>
    </div>)
}

export default RecipeCard;
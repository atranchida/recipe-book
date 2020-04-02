import React from "react";
import { Recipe } from "../interfaces/Recipe";
import IngredientList from "./IngredientList";
import styles from '../css/RecipeList.module.css';

export interface Props {
    recipe: Recipe;
    onDelete: (name: string) => void
}

function RecipeCard({ recipe, onDelete }: Props) {
    return (
        <div className={styles.RecipeCard}>
            <button className={styles.DeleteButton}
                onClick={() => onDelete(recipe.name)}
                data-testid="delete-recipe">
                X
            </button>
            <div className={styles.CardContents}>
                <h1>{recipe.name}</h1>
                <IngredientList ingredients={recipe.ingredients} />
            </div>
        </div>)
}

export default RecipeCard;
import React from "react";
import ContentEditable from 'react-contenteditable';
import styles from '../css/RecipeList.module.css';
import { Ingredient } from "../interfaces/Ingredient";
import { Recipe } from "../interfaces/Recipe";
import IngredientList from "./IngredientList";

export interface Props {
    recipe: Recipe;
    onDelete: (recipe: Recipe) => void
    onEditRecipeName: (recipe: Recipe, newName: string) => void
    onEditIngredients: (recipe: Recipe) => void
}

function RecipeCard({ recipe, onDelete, onEditRecipeName, onEditIngredients }: Props) {

    const handleChange = (evt: { target: { value: string; }; }) => {
        onEditRecipeName(recipe, evt.target.value);
        recipe.name = evt.target.value
    };

    const handleIngredientChange = (newIngredients: Array<Ingredient>) => {
        recipe.ingredients = newIngredients;
        //onEditIngredients(recipe);
    }

    return (
        <>
            <div className={styles.RecipeCard}>
                <button className={styles.DeleteButton}
                    onClick={() => onDelete(recipe)}
                    data-testid="delete-recipe">
                    X
             </button>
                <div className={styles.CardContents}>
                    <h1>
                        <ContentEditable
                            html={recipe.name}
                            onChange={handleChange}
                        />
                    </h1>
                    <IngredientList
                        ingredients={recipe.ingredients}
                        onEditIngredient = {handleIngredientChange}
                    />
                </div>
            </div>
        </>
    )
}

export default RecipeCard;
import React, { useState, ChangeEvent, MouseEvent, HTMLProps } from "react";
import styles from '../css/RecipeForm.module.css';
import IngredientList from "./IngredientList";
import { Ingredient } from "../interfaces/Ingredient";

interface Props extends HTMLProps<HTMLFormElement> {
    handleAddIngredient: (event: MouseEvent<HTMLButtonElement>) => void;
    handleIngredientChange: (event: ChangeEvent<HTMLInputElement>) => void;
    ingredientValue: string;

    onRecipeValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
    recipeValue: string;

    ingredients: Ingredient[];
}

const RecipeForm = ({ handleIngredientChange, handleAddIngredient, ingredientValue, onRecipeValueChange, recipeValue, ingredients, ...props }: Props) => {
    return (
        <form className={styles.RecipeForm} {...props}>
            <h1>Enter a new Recipe!</h1>
            <input
                placeholder="Enter the recipe name..."
                onChange={onRecipeValueChange}
                value={recipeValue}
            />
            <IngredientList ingredients={ingredients} />
            <div>
                <input placeholder="Enter ingredient..."
                    onChange={handleIngredientChange}
                    value={ingredientValue} />
                <button onClick={handleAddIngredient}>+ Ingredient</button>
            </div>
            <button >Create</button>
        </form>
    );
};

export default RecipeForm;
import React, { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import styles from '../css/RecipeForm.module.css';
import { Ingredient } from "../interfaces/Ingredient";
import { Recipe } from "../interfaces/Recipe";
import IngredientList from "./IngredientList";

export interface Props {
    onIngredientChange: (ingredient: string) => void;
    onRecipeNameChange: (recipe: string) => void;
    onAddIngredient: (ingredient: string) => void;
    onCreate: (newRecipe: Recipe) => void;
}

function RecipeForm({ onAddIngredient, onCreate, onIngredientChange, onRecipeNameChange, ...props }: Props) {
    const [recipeName, setRecipeName] = useState("");
    const [ingredients, setIngredients] = useState<Array<Ingredient>>([]);
    const [ingredient, setIngredient] = useState("");

    const handleIngredientChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setIngredient(value);
        onIngredientChange(value);
    };

    const handleAddIngredient = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        setIngredients(previousIngredients => [
            ...previousIngredients,
            {
                name: ingredient
            }
        ]);

        onAddIngredient(ingredient);
        setIngredient("");
    };

    const handleRecipeNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setRecipeName(value);
        onRecipeNameChange(value);
    };

    const handleCreateRecipe = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onCreate({
            name: recipeName,
            ingredients: ingredients
        });
        setRecipeName("");
        setIngredients([]);
    };

    return (
        <div>

            <form data-testid="recipe-form" className={styles.RecipeForm} onSubmit={handleCreateRecipe} {...props}>
                <h1>Enter a new Recipe!</h1>
                <input
                    type="text"
                    name="recipeValue"
                    data-testid="recipeValue"
                    placeholder="Enter the recipe name..."
                    onChange={handleRecipeNameChange}
                    value={recipeName}
                />

                <IngredientList ingredients={ingredients} />

                <div className={styles.Ingredients}>
                    <input
                        type="text"
                        name="ingredient"
                        data-testid="ingredient"
                        placeholder="Enter ingredient..."
                        onChange={handleIngredientChange}
                        value={ingredient} />
                    <button
                        className={styles.AddIngredientButton}
                        onClick={handleAddIngredient}
                        data-testid="addIngredient">
                        +
                    </button>
                </div>

                <button
                    className={styles.CreateButton}
                    type="submit"
                    data-testid="create">
                    Create
            </button>

            </form>
        </div>
    );
};

export default RecipeForm;
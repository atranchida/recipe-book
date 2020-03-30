import React, { useState, ChangeEvent, MouseEvent, HTMLProps, FormEvent } from "react";
import styles from '../css/RecipeForm.module.css';
import IngredientList from "./IngredientList";
import { Ingredient } from "../interfaces/Ingredient";
import { Recipe } from "../interfaces/Recipe";
import RecipeList from "./RecipeList";

export interface Props {
    onIngredientChange: (ingredient: string) => void;
    onRecipeChange: (recipe: string) => void;
    onAddIngredient: (ingredient: string) => void;
    //onCreate: (recipe: string, ingredient: Ingredient[]) => void;
}

function RecipeForm(props: Props) {
    const [recipes, setRecipes] = useState<Array<Recipe>>([]);
    const [recipeValue, setRecipeValue] = useState("");
    const [ingredients, setIngredients] = useState<Array<Ingredient>>([]);
    const [ingredient, setIngredient] = useState("");

    const handleIngredientChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setIngredient(value);
        props.onIngredientChange(value);
    };

    const handleAddIngredient = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        setIngredients(previousIngredients => [
            ...previousIngredients,
            {
                name: ingredient
            }
        ]);

        props.onAddIngredient(ingredient);
        setIngredient("");
    };

    const handleRecipeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setRecipeValue(value);
        props.onRecipeChange(value);
    };

    const handleCreateRecipe = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setRecipes(previousRecipes => [
            ...previousRecipes,
            {
                name: recipeValue,
                ingredients: ingredients
            }
        ]);

        //props.onCreate(recipeValue, ingredients);
        setRecipeValue("");
        setIngredients([]);
    };

    return (
        <div>
            <RecipeList recipes={recipes} />

            <form data-testid="recipe-form" className={styles.RecipeForm} onSubmit={handleCreateRecipe} {...props}>
                <h1>Enter a new Recipe!</h1>
                <input
                    type="text"
                    name="recipeValue"
                    data-testid="recipeValue"
                    placeholder="Enter the recipe name..."
                    onChange={handleRecipeChange}
                    value={recipeValue}
                />

                <IngredientList ingredients={ingredients} />

                <div>
                    <input
                        type="text"
                        name="ingredient"
                        data-testid="ingredient"
                        placeholder="Enter ingredient..."
                        onChange={handleIngredientChange}
                        value={ingredient} />
                    <button
                        onClick={handleAddIngredient}
                        data-testid="addIngredient">
                        + Ingredient
                    </button>
                </div>

                <button
                    type="submit"
                    data-testid="create">
                    Create
            </button>

            </form>
        </div>
    );
};

export default RecipeForm;
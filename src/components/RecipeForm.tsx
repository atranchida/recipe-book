import React, { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from "react";
import styles from '../css/RecipeForm.module.css';
import RecipeJSON from "../data/recipes.json";
import { Ingredient } from "../interfaces/Ingredient";
import { Recipe } from "../interfaces/Recipe";
import IngredientList from "./IngredientList";
import RecipeFilter from "./RecipeFilter";
import RecipeList from "./RecipeList";

export interface Props {
    onIngredientChange: (ingredient: string) => void;
    onRecipeChange: (recipe: string) => void;
    onAddIngredient: (ingredient: string) => void;
    onCreate: (recipe: string, ingredients: Ingredient[]) => void;
}

function RecipeForm({ onAddIngredient, onCreate, onIngredientChange, onRecipeChange, ...props }: Props) {
    const [recipes, setRecipes] = useState<Array<Recipe>>([]);
    const [recipeValue, setRecipeValue] = useState("");
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

    const handleRecipeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setRecipeValue(value);
        onRecipeChange(value);
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

        onCreate(recipeValue, ingredients);
        setRecipeValue("");
        setIngredients([]);
    };

    const handleDeleteRecipe = (name: string) => {
        const newRecipeList = recipes.filter(recipe => recipe.name !== name);
        setRecipes(newRecipeList);
    };

    const handleFilter = (filteredRecipes: Array<Recipe>) => {
        setRecipes(filteredRecipes);
    };

    useEffect(() => {
        const recipesObj: Array<Recipe> = RecipeJSON;
        setRecipes(recipesObj);
    }, [])

    return (
        <div>
            <RecipeFilter
                recipes={RecipeJSON}
                onFilter={handleFilter}
            />

            <RecipeList
                recipes={recipes}
                onDelete={handleDeleteRecipe}
            />

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
import { ADD_RECIPE, Recipe, RecipeActionTypes, DELETE_RECIPE, EDIT_RECIPE } from "../interfaces/Recipe";

export const addRecipe = (recipe: Recipe): RecipeActionTypes => ({
    type: ADD_RECIPE,
    recipe
});

export const deleteRecipe = (recipe: Recipe): RecipeActionTypes => ({
    type: DELETE_RECIPE,
    recipe
});

export const editRecipe = (recipe: Recipe, newName: string): RecipeActionTypes => ({
    type: EDIT_RECIPE,
    recipe,
    newName
});
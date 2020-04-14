import { Ingredient } from "../interfaces/Ingredient";
import { ADD_RECIPE, DELETE_RECIPE, EDIT_INGREDIENT, EDIT_RECIPE, FILTER_RECIPE, Recipe, RecipeActionTypes } from "../interfaces/Recipe";

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

export const editIngredients = (recipe: Recipe, newIngredients: Ingredient[]): RecipeActionTypes => ({
    type: EDIT_INGREDIENT,
    recipe,
    newIngredients
});

export const filterRecipes = (filterValue: string): RecipeActionTypes => ({
    type: FILTER_RECIPE,
    filterValue
});
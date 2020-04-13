import { Recipe } from "../interfaces/Recipe"
import { Ingredient } from "../interfaces/Ingredient"

export const ADD_RECIPE = "ADD_RECIPE"
export const EDIT_RECIPE = "EDIT_RECIPE"
export const EDIT_INGREDIENT = "EDIT_INGREDIENT"
export const DELETE_RECIPE = "DELETE_RECIPE"
export const SET_RECIPES = "SET_RECIPES"

export interface SetRecipeAction {
    type: typeof SET_RECIPES;
    recipes: Recipe[];
}

export interface AddRecipeAction {
    type: typeof ADD_RECIPE;
    recipe: Recipe;
}

export interface EditRecipeAction {
    type: typeof EDIT_RECIPE;
    recipe: Recipe;
}

export interface DeleteRecipeAction {
    type: typeof DELETE_RECIPE;
    recipe: Recipe;
}

// Don't know if this is needed
export interface EditIngredientAction {
    type: typeof EDIT_INGREDIENT;
    ingredient: Ingredient;
}

export type RecipeActionTypes =
    | SetRecipeAction
    | AddRecipeAction
    | EditRecipeAction
    | DeleteRecipeAction
    | EditIngredientAction

// can add filter action types somehow
export type AppActions = RecipeActionTypes
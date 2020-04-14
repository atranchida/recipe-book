import { Ingredient } from "../interfaces/Ingredient"

export interface Recipe {
    name: string;
    ingredients: Ingredient[];
}

export interface RecipeBookState {
    recipes: Recipe[],
    filter: ''
}

export const ADD_RECIPE = "ADD_RECIPE"
export const DELETE_RECIPE = "DELETE_RECIPE"
export const EDIT_RECIPE = "EDIT_RECIPE"
export const EDIT_INGREDIENT = "EDIT_INGREDIENT"

export interface AddRecipeAction {
    type: typeof ADD_RECIPE;
    recipe: Recipe;
}

export interface DeleteRecipeAction {
    type: typeof DELETE_RECIPE;
    recipe: Recipe;
}

export interface EditRecipeAction {
    type: typeof EDIT_RECIPE;
    recipe: Recipe;
    newName: string;
}

export interface EditIngredientAction {
    type: typeof EDIT_INGREDIENT;
    recipe: Recipe;
    newIngredients: Ingredient[];
}

export type RecipeActionTypes =
    | AddRecipeAction
    | DeleteRecipeAction
    | EditRecipeAction
    | EditIngredientAction

export type AppActions = RecipeActionTypes
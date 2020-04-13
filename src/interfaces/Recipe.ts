import { Ingredient } from "../interfaces/Ingredient"

export interface Recipe {
    name: string;
    ingredients: Ingredient[];
}

export interface RecipeBookState {
    recipes: Recipe[]
}

export const ADD_RECIPE = "ADD_RECIPE"
 export const SET_RECIPES = "SET_RECIPES"

// export const EDIT_RECIPE = "EDIT_RECIPE"
// export const EDIT_INGREDIENT = "EDIT_INGREDIENT"
// export const DELETE_RECIPE = "DELETE_RECIPE"


export interface SetRecipeAction {
    type: typeof SET_RECIPES;
    recipes: Recipe[];
}

export interface AddRecipeAction {
    type: typeof ADD_RECIPE;
    recipe: Recipe;
}

// export interface EditRecipeAction {
//     type: typeof EDIT_RECIPE;
//     recipe: Recipe;
// }

// export interface DeleteRecipeAction {
//     type: typeof DELETE_RECIPE;
//     recipe: Recipe;
// }

// export interface EditIngredientAction {
//     type: typeof EDIT_INGREDIENT;
//     ingredient: Ingredient;
// }

export type RecipeActionTypes =
    | SetRecipeAction
    | AddRecipeAction
    // | EditRecipeAction
    // | DeleteRecipeAction
    // | EditIngredientAction

export type AppActions = RecipeActionTypes
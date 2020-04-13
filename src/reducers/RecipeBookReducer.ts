import { Recipe, RecipeActionTypes, RecipeBookState } from "../interfaces/Recipe";

const initialState: RecipeBookState = {
    recipes: Array<Recipe>(),
    filter: ''
}

export function RecipeBookReducer(
    state = initialState,
    action: RecipeActionTypes
): RecipeBookState {
    switch(action.type) {
        case "ADD_RECIPE": {
            return {
                recipes:  [action.recipe, ...state.recipes],
                filter: ''                
            }
        }
        default:
            return state
    }
}
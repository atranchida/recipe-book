import { Recipe, RecipeActionTypes, RecipeBookState } from "../interfaces/Recipe";
import RecipeJSON from "../data/recipes.json";

const recipesObj: Array<Recipe> = RecipeJSON;

const initialState: RecipeBookState = {
    recipes: recipesObj,
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

export default RecipeBookReducer
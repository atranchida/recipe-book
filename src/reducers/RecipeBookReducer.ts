import { Recipe, ADD_RECIPE, DELETE_RECIPE, RecipeActionTypes, RecipeBookState } from "../interfaces/Recipe";
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
    switch (action.type) {
        case ADD_RECIPE: {
            return {
                recipes: [action.recipe, ...state.recipes],
                filter: ''
            }
        }

        case DELETE_RECIPE: {
            return {
                recipes: deleteRecipe(action.recipe, state.recipes),
                filter: ''
            }
        }
        default:
            return state
    }
}

function deleteRecipe(recipe: Recipe, recipes: Recipe[]) {
    const index = recipes.findIndex(r => r.name === recipe.name);
    let recipesClone = [...recipes];
    recipesClone.splice(index, 1);
    return recipesClone;
}

export default RecipeBookReducer
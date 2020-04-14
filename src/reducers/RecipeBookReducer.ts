import { Recipe, ADD_RECIPE, DELETE_RECIPE, EDIT_RECIPE, RecipeActionTypes, RecipeBookState } from "../interfaces/Recipe";
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

        case EDIT_RECIPE: {
            return {
                recipes: editRecipe(action.recipe, state.recipes, action.newName),
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

    console.log("Deleted Recipe: " + recipesClone[index].name);

    return recipesClone;
}

function editRecipe(recipe: Recipe, recipes: Recipe[], newName: string) {
    const index = recipes.findIndex(r => r.name === recipe.name);
    let recipesClone = [...recipes];
    let recipeToEdit = { ...recipesClone[index] };
    recipeToEdit.name = newName;
    recipesClone[index] = recipeToEdit;

    console.log("Recipe renamed to: " + recipesClone[index].name);

    return recipesClone;
}

export default RecipeBookReducer
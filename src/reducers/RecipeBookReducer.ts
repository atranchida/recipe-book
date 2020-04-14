import RecipeJSON from "../data/recipes.json";
import { Ingredient } from "../interfaces/Ingredient";
import { ADD_RECIPE, DELETE_RECIPE, EDIT_INGREDIENT, EDIT_RECIPE, Recipe, RecipeActionTypes, RecipeBookState } from "../interfaces/Recipe";

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

        case EDIT_INGREDIENT: {
            return {
                recipes: editIngredient(action.recipe, state.recipes, action.newIngredients),
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
    console.log("Deleted Recipe: " + recipesClone[index].name);
    recipesClone.splice(index, 1);

    return recipesClone;
}

function editRecipe(recipe: Recipe, recipes: Recipe[], newName: string) {
    console.log("Recipe renamed to: " + newName);

    const index = recipes.findIndex(r => r.name === recipe.name);
    let recipesClone = [...recipes];
    let recipeToEdit = { ...recipesClone[index] };
    recipeToEdit.name = newName;
    recipesClone[index] = recipeToEdit;

    return recipesClone;
}

function editIngredient(recipe: Recipe, recipes: Recipe[], newIngredients: Ingredient[]) {    
    const index = recipes.findIndex(r => r.name === recipe.name);
    let recipesClone = [...recipes];
    let recipeToEdit = { ...recipesClone[index] };
    recipeToEdit = recipe;
    recipeToEdit.ingredients = newIngredients;
    recipesClone[index] = recipeToEdit;

    return recipesClone;
}

export default RecipeBookReducer
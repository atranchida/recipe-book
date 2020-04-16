/*import RecipeJSON from "../data/recipes.json";
import { Ingredient } from "../interfaces/Ingredient";
import { ADD_RECIPE, DELETE_RECIPE, EDIT_INGREDIENT, EDIT_RECIPE, FILTER_RECIPE, Recipe, RecipeActionTypes, RecipeBookState } from "../interfaces/Recipe";

const recipesObj: Array<Recipe> = RecipeJSON.map((recipe, index) => ({
  ...recipe,
  id: index,
})) as Recipe[];

const initialState: RecipeBookState = {
  recipes: recipesObj,
  filter: "",
  nextId: recipesObj.length + 1,
};

export function RecipeBookReducer(
  state = initialState,
  action: RecipeActionTypes
): RecipeBookState {
  switch (action.type) {
    case ADD_RECIPE: {
      const id = state.nextId;
      console.log(`Generated new ID: ${id}`);
      const newRecipe: Recipe = {
        ...action.recipe,
        id,
      };
      return {
        ...state,
        recipes: [newRecipe, ...state.recipes],
        nextId: id + 1,
      };
    }

    case DELETE_RECIPE: {
      return {
        ...state,
        recipes: deleteRecipe(action.recipe, state.recipes),
      };
    }

    case EDIT_RECIPE: {
      return {
        ...state,
        recipes: editRecipe(action.recipe, state.recipes, action.newName),
      };
    }

    case EDIT_INGREDIENT: {
      return {
        ...state,
        recipes: editIngredient(
          action.recipe,
          state.recipes,
          action.newIngredients
        ),
      };
    }

    case FILTER_RECIPE: {
      return {
        ...state,
        filter: action.filterValue,
      };
    }

    default:
      return state;
  }
}

function deleteRecipe(recipe: Recipe, recipes: Recipe[]) {
  const index = recipes.findIndex((r) => r.name === recipe.name);
  let recipesClone = [...recipes];
  console.log("Deleted Recipe: " + recipesClone[index].name);
  recipesClone.splice(index, 1);

  return recipesClone;
}

function editRecipe(recipe: Recipe, recipes: Recipe[], newName: string) {
  console.log("Recipe renamed to: " + newName);

  return recipes.map((currentRecipe) => {
    if (currentRecipe.name === recipe.name) {
      return {
        ...currentRecipe,
        name: newName,
      };
    } else return currentRecipe;
  });
}

function editIngredient(
  recipe: Recipe,
  recipes: Recipe[],
  newIngredients: Ingredient[]
) {
  const index = recipes.findIndex((r) => r.name === recipe.name);
  let recipesClone = [...recipes];
  let recipeToEdit = { ...recipesClone[index] };
  recipeToEdit = recipe;
  recipeToEdit.ingredients = newIngredients;
  recipesClone[index] = recipeToEdit;

  return recipesClone;
}

export default RecipeBookReducer;*/

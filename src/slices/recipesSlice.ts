import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import RecipeJSON from "../data/recipes.json";
import { Ingredient } from "../interfaces/Ingredient";
import { NewRecipe, Recipe, RecipeBookState } from "../interfaces/Recipe";

const recipesObj: Array<Recipe> = RecipeJSON.map((recipe, index) => ({
  ...recipe,
  id: index,
})) as Recipe[];

const initialState: RecipeBookState = {
  recipes: recipesObj,
  filter: "",
  nextId: recipesObj.length + 1,
};

interface EditRecipeNameDetails {
  recipe: Recipe;
  newName: string;
}

interface EditIngredientsDetails {
  recipe: Recipe;
  newIngredients: Ingredient[];
}

const recipesSlice = createSlice({
  name: "recipes",
  initialState: initialState,
  reducers: {
    addRecipe(state, action: PayloadAction<NewRecipe>) {
      const id = state.nextId;
      console.log(`Generated new ID: ${id}`);
      const newRecipe: Recipe = {
        ...action.payload,
        id,
      };

      state.recipes = [newRecipe, ...state.recipes];
      state.nextId = id + 1;
    },

    deleteRecipe(state, action: PayloadAction<Recipe>) {
      state.recipes = doDeleteRecipe(action.payload, state.recipes);
    },

    editRecipeName(state, action: PayloadAction<EditRecipeNameDetails>) {
      state.recipes = doEditRecipeName(
        action.payload.recipe,
        state.recipes,
        action.payload.newName
      );
    },

    editIngredients(state, action: PayloadAction<EditIngredientsDetails>) {
      state.recipes = doEditIngredients(
        action.payload.recipe,
        state.recipes,
        action.payload.newIngredients
      );
    },

    filterRecipes(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

function doDeleteRecipe(recipe: Recipe, recipes: Recipe[]) {
  console.log("Deleted Recipe: " + recipe.name);

  const index = recipes.findIndex((r) => r.name === recipe.name);
  let recipesClone = [...recipes];
  recipesClone.splice(index, 1);

  return recipesClone;
}

function doEditRecipeName(recipe: Recipe, recipes: Recipe[], newName: string) {
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

function doEditIngredients(
  recipe: Recipe,
  recipes: Recipe[],
  newIngredients: Ingredient[]
) {
  return recipes.map((currentRecipe) => {
    if (currentRecipe.name === recipe.name) {
      return {
        ...currentRecipe,
        ingredients: newIngredients,
      };
    } else return currentRecipe;
  });
}

export const {
  addRecipe,
  deleteRecipe,
  editRecipeName,
  editIngredients,
  filterRecipes,
} = recipesSlice.actions;
export default recipesSlice.reducer;

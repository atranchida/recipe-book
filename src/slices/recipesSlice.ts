import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import RecipeJSON from "../data/recipes.json";
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
  },
});

function doDeleteRecipe(recipe: Recipe, recipes: Recipe[]) {
  const index = recipes.findIndex((r) => r.name === recipe.name);
  let recipesClone = [...recipes];
  console.log("Deleted Recipe: " + recipesClone[index].name);
  recipesClone.splice(index, 1);

  return recipesClone;
}

export const { addRecipe, deleteRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;

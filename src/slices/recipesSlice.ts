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

      state.recipes.unshift(newRecipe);
      state.nextId = id + 1;
    },

    deleteRecipe(state, action: PayloadAction<Recipe>) {
      const index = state.recipes.findIndex(
        (r) => r.name === action.payload.name
      );
      state.recipes.splice(index, 1);
    },

    editRecipeName(state, action: PayloadAction<EditRecipeNameDetails>) {
      updateRecipeById(
        state.recipes,
        action.payload.recipe.id,
        (recipe) => (recipe.name = action.payload.newName)
      );
    },

    editIngredients(state, action: PayloadAction<EditIngredientsDetails>) {
      updateRecipeById(
        state.recipes,
        action.payload.recipe.id,
        (recipe) => (recipe.ingredients = action.payload.newIngredients)
      );
    },

    filterRecipes(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

function updateRecipeById(
  recipes: Recipe[],
  id: number,
  updater: (recipe: Recipe) => void
) {
  const recipe = recipes.find((recipe) => recipe.id === id);
  if (recipe) {
    updater(recipe);
  }
}

export const {
  addRecipe,
  deleteRecipe,
  editRecipeName,
  editIngredients,
  filterRecipes,
} = recipesSlice.actions;
export default recipesSlice.reducer;

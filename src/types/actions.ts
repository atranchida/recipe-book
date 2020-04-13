import { ADD_RECIPE, Recipe, RecipeActionTypes, SET_RECIPES } from "../interfaces/Recipe";

export const addRecipe = ( recipe: Recipe ): RecipeActionTypes => ({
        type: ADD_RECIPE,
        recipe
});

export const setRecipes = ( recipes: Recipe[] ): RecipeActionTypes => ({
    type: SET_RECIPES,
    recipes
});

//   const handleAddRecipe = (newRecipe: Recipe) => {
//     var newRecipes = [newRecipe, ...recipes]
//     setRecipes(newRecipes);
//   };
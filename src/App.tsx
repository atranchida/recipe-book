import React, { useState, useEffect } from 'react';
import './App.css';
import AddRecipeButton from './components/AddRecipeButton';
import RecipeJSON from "./data/recipes.json";
import { Recipe } from "./interfaces/Recipe";
import RecipeList from './components/RecipeList';

const Welcome = () => {
  return <h1>Welcome to the Recipe Page!</h1>
};

const App = () => {
  const [recipes, setRecipes] = useState<Array<Recipe>>([]);

  useEffect(() => {
    const recipesObj: Array<Recipe> = RecipeJSON;
    setRecipes(recipesObj);
  }, [])

  const handleDeleteRecipe = (name: string) => {
    const newRecipeList = recipes.filter(recipe => recipe.name !== name);
    setRecipes(newRecipeList);
  };

  return (
    <div>
      <Welcome />

      <AddRecipeButton
        recipes={recipes}
      />

      <RecipeList
        recipes={recipes}
        onDelete={handleDeleteRecipe}
      />
    </div>
  );
};

export default App;

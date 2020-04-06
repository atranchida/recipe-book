import React, { useEffect, useState } from 'react';
import './App.css';
import AddRecipeButton from './components/AddRecipeButton';
import RecipeFilter from './components/RecipeFilter';
import RecipeList from './components/RecipeList';
import RecipeJSON from "./data/recipes.json";
import { Recipe } from "./interfaces/Recipe";

const Welcome = () => {
  return <h1>Welcome to the Recipe Page!</h1>
};

const App = () => {
  const [recipes, setRecipes] = useState<Array<Recipe>>([]);

  useEffect(() => {
    const recipesObj: Array<Recipe> = RecipeJSON;
    setRecipes(recipesObj);
  }, [])

  const handleAddRecipe = (newRecipe: Recipe) => {
    var newRecipes = [newRecipe, ...recipes]
    setRecipes(newRecipes);
  };

  const handleDeleteRecipe = (name: string) => {
    const newRecipeList = recipes.filter(recipe => recipe.name !== name);
    setRecipes(newRecipeList);
  };

  const handleFilter = (filteredRecipes: Array<Recipe>) => {
    setRecipes(filteredRecipes);
  };

  return (
    <div>
      <Welcome />

      <RecipeFilter
        recipes={RecipeJSON}
        onFilter={handleFilter}
      />

      <AddRecipeButton
        onAdd={handleAddRecipe}
      />

      <RecipeList
        recipes={recipes}
        onDelete={handleDeleteRecipe}
      />
    </div>
  );
};

export default App;

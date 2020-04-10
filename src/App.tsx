import React, { useEffect, useState } from 'react';
import './App.css';
import AddRecipeButton from './components/AddRecipeButton';
import RecipeFilter from './components/RecipeFilter';
import RecipeList from './components/RecipeList';
import RecipeJSON from "./data/recipes.json";
import { Recipe } from "./interfaces/Recipe";

const Welcome = () => {
  return <h1>Cook Book</h1>
};

const App = () => {
  const [recipes, setRecipes] = useState<Array<Recipe>>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Array<Recipe>>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const recipesObj: Array<Recipe> = RecipeJSON;
    setRecipes(recipesObj);
  }, [])

  useEffect(() => {
    const filteredRecipes = recipes.filter(recipe =>
      (recipe.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
      || (filterIngredients(recipe, filter)));

    setFilteredRecipes(filteredRecipes);
  }, [recipes, filter])

  function filterIngredients(recipe: Recipe, filterValue: string) {
    let hasIngredient = false;
    recipe.ingredients.map((ingredient) => {
      if (ingredient.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
        hasIngredient = true;
      return hasIngredient;
    });
    return hasIngredient;
  }

  const handleAddRecipe = (newRecipe: Recipe) => {
    var newRecipes = [newRecipe, ...recipes]
    setRecipes(newRecipes);
  };

  const handleDeleteRecipe = (recipe: Recipe) => {
    console.log("Recipe deleted: " + recipe.name);

    //would probably be better to add deleted flag, set deleted to true and filter out deleted = true
    const index = recipes.findIndex(r => r.name === recipe.name);
    let recipesClone = [...recipes];
    recipesClone.splice(index, 1);
    setRecipes(recipesClone);
  };

  const handleEditRecipeName = (recipe: Recipe, newName: string) => {
    const index = recipes.findIndex(r => r.name === recipe.name);
    let recipesClone = [...recipes];
    let recipeToEdit = { ...recipesClone[index] };
    recipeToEdit.name = newName;
    recipesClone[index] = recipeToEdit;
    setRecipes(recipesClone);

    console.log("Recipe renamed to: " + recipesClone[index].name);
  };

  const handleEditIngredients = (recipe: Recipe) => {
    const index = recipes.findIndex(r => r.name === recipe.name);
    let recipesClone = [...recipes];
    let recipeToEdit = { ...recipesClone[index] };
    recipeToEdit = recipe;
    recipesClone[index] = recipeToEdit;
    setRecipes(recipesClone);
  };

  const handleFilter = (filterValue: string) => {
    setFilter(filterValue);
  };

  return (
    <div>

      <div className="App-header">
        <Welcome />

        <RecipeFilter
          onFilter={handleFilter}
        />

        or

        <AddRecipeButton
          onAdd={handleAddRecipe}
        />
      </div>

      <RecipeList
        recipes={filteredRecipes}
        onDelete={handleDeleteRecipe}
        onEditRecipeName={handleEditRecipeName}
        onEditIngredients={handleEditIngredients}
      />
    </div>
  );
};

export default App;

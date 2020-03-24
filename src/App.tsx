import React, { useState, ChangeEvent, FormEvent, MouseEvent } from 'react';
import './App.css';
import RecipeForm from './components/RecipeForm';
import { Recipe } from './interfaces/Recipe';
import { Ingredient } from './interfaces/Ingredient';

const Welcome = () => {
  return <h1>Welcome to the Recipe Page!</h1>
};

const App = () => {
  const [recipes, setRecipes] = useState<Array<Recipe>>([]);
  const [recipeValue, setRecipeValue] = useState("");
  
  const [ingredients, setIngredients] = useState<Array<Ingredient>>([]);
  const [ingredient, setIngredient] = useState("");

  const handleIngredientChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIngredient(event.currentTarget.value);
  };

  const handleAddIngredient = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setIngredients(previousIngredients => [
      ...previousIngredients,
      {
        name: ingredient
      }
    ]);

    setIngredient("");
  };

  const handleRecipeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRecipeValue(event.currentTarget.value);
  };

  const handleCreateRecipe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setRecipes(previousRecipes => [
      ...previousRecipes,
      {
        name: recipeValue,
        ingredients: ingredients
      }
    ]);

    setRecipeValue("");
    setIngredients([]);
  }

  return (
    <div>
      <Welcome />
      <RecipeForm
        handleIngredientChange={handleIngredientChange}
        handleAddIngredient={handleAddIngredient}
        ingredientValue={ingredient}
        onSubmit={handleCreateRecipe}
        onRecipeValueChange={handleRecipeChange}
        recipeValue={recipeValue}
        ingredients={ingredients} />
    </div>
  );
};

export default App;

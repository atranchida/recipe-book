import React, {useState, ChangeEvent} from 'react';
import './App.css';
import RecipeForm from './components/RecipeForm';
import { Recipe } from './interfaces/Recipe';

const Welcome = () => {
  return <h1>Welcome to the Recipe Page!</h1>
};

const App = () => {
  const [recipes, setRecipes] = useState<Array<Recipe>>([]);
  const [recipeValue, setRecipeValue] = useState("");

  return (
    <div>
      <Welcome />
      <RecipeForm />
    </div>
  );
};

export default App;

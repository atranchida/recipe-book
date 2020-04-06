import React from 'react';
import './App.css';
import RecipeForm from './components/RecipeForm';
import AddRecipeButton from './components/AddRecipeButton';

const Welcome = () => {
  return <h1>Welcome to the Recipe Page!</h1>
};

function noop() {
  return;
}

const App = () => {
  return (
    <div>
      <Welcome />
      <AddRecipeButton />
      <RecipeForm
        onIngredientChange={noop}
        onRecipeChange={noop}
        onAddIngredient={noop}
        onCreate={noop}
      />
    </div>
  );
};

export default App;

import React from 'react';
import './App.css';
import RecipeForm from './components/RecipeForm';

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

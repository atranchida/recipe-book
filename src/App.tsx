import React from 'react';
import './App.css';
import RecipeForm from './components/RecipeForm';

const Welcome = () => {
  return <h1>Welcome to the Recipe Page!</h1>
};

const App = () => {
  return (
    <div>
      <Welcome />
      <RecipeForm />
    </div>
  );
};

export default App;

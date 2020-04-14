import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import AddRecipeButton from './components/AddRecipeButton';
import RecipeFilter from './components/RecipeFilter';
import RecipeList from './components/RecipeList';
import { Recipe, RecipeBookState } from "./interfaces/Recipe";

const Welcome = () => {
  return <h1>Cook Book</h1>
};

const mapStateToProps = (state: RecipeBookState) => ({
  recipes: state.recipes,
  filter: state.filter
})

const App = (state : RecipeBookState) => {

  function filterIngredients(recipe: Recipe, filterValue: string) {
    let hasIngredient = false;
    recipe.ingredients.map((ingredient) => {
      if (ingredient.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
        hasIngredient = true;
      return hasIngredient;
    });
    return hasIngredient;
  }

  const handleEditIngredients = (recipe: Recipe) => {
    /*const index = recipes.findIndex(r => r.name === recipe.name);
    let recipesClone = [...recipes];
    let recipeToEdit = { ...recipesClone[index] };
    recipeToEdit = recipe;
    recipesClone[index] = recipeToEdit;
    setRecipes(recipesClone);*/
  };

  const handleFilter = (filterValue: string) => {
   //setFilter(filterValue);
  };

  return (
    <div>

      <div className="App-header">
        <Welcome />

        <RecipeFilter
          onFilter={handleFilter}
        />

        or

        <AddRecipeButton />
      </div>

      <RecipeList
        recipes={state.recipes}
        onEditIngredients={handleEditIngredients}
      />
    </div>
  );
};

export default connect(mapStateToProps) (App);

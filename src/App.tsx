import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import AddRecipeButton from "./components/AddRecipeButton";
import RecipeFilter from "./components/RecipeFilter";
import RecipeList from "./components/RecipeList";
import { RecipeBookState } from "./interfaces/Recipe";

const Welcome = () => {
  return <h1>Cook Book</h1>;
};

const App = () => {
  const { recipes, filter } = useSelector<RecipeBookState, RecipeBookState>(
    (state) => state
  );

  // function filterIngredients(recipe: Recipe, filterValue: string) {
  //   let hasIngredient = false;
  //   recipe.ingredients.map((ingredient) => {
  //     if (
  //       ingredient.name
  //         .toLocaleLowerCase()
  //         .includes(filterValue.toLocaleLowerCase())
  //     )
  //       hasIngredient = true;
  //     return hasIngredient;
  //   });
  //   return hasIngredient;
  // }

  return (
    <div>
      <div className="App-header">
        <Welcome />
        <RecipeFilter filter={filter} /> or
        <AddRecipeButton />
      </div>

      <RecipeList recipes={recipes} filter={filter} />
    </div>
  );
};

export default App;

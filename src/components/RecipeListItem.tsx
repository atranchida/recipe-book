import React from "react";
import { Recipe } from "../interfaces/Recipe";
import IngredientList from "./IngredientList";

interface Props {
    recipe: Recipe;
}

const RecipeListItem = ({ recipe }: Props) => {
    return (<>
        <h1>{recipe.name}</h1>
        <IngredientList ingredients={recipe.ingredients} />
    </>)
};

export default RecipeListItem;
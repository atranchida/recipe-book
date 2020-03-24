import React from "react";
import { Recipe } from "../interfaces/Recipe";
import RecipeListItem from "./RecipeListItem";

interface Props {
    recipes: Recipe[];
}

const RecipeList = ({ recipes }: Props) => {
    return (
        <div>
            <ul>
                {recipes.map(recipe => (
                    <RecipeListItem
                        recipe={{
                            name: recipe.name,
                            ingredients: recipe.ingredients
                        }}
                    />
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;
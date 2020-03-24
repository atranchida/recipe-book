import React from "react";
import { Recipe } from "../interfaces/Recipe";
import RecipeListItem from "./RecipeListItem";
import styles from '../css/RecipeList.module.css';

interface Props {
    recipes: Recipe[];
}

const RecipeList = ({ recipes }: Props) => {
    return (
        <div className = {styles.RecipeList}>
            {recipes.map(recipe => (
                <RecipeListItem
                    recipe={{
                        name: recipe.name,
                        ingredients: recipe.ingredients
                    }}
                />
            ))}
        </div>
    );
};

export default RecipeList;
import React from "react";
import { Recipe } from "../interfaces/Recipe";
import RecipeCard from "./RecipeCard";
import styles from '../css/RecipeList.module.css';

interface Props {
    recipes: Recipe[];
    onDelete: (name: string) => void
}

const RecipeList = ({ recipes, onDelete }: Props) => {
    return (
        <div data-testid="recipeList" className = {styles.RecipeList}>
            {recipes.map(recipe => (
                <RecipeCard
                    key={recipe.name}
                    recipe={{
                        name: recipe.name,
                        ingredients: recipe.ingredients
                    }}
                   onDelete = {onDelete}
                />
            ))}
        </div>
    );
};

export default RecipeList;
import React, { ChangeEvent, useState } from "react";
import { Recipe } from "../interfaces/Recipe";

interface Props {
    recipes: Recipe[];
    onFilter: (filterValue: Array<Recipe>) => void
}

const RecipeFilter = ({ recipes, onFilter }: Props) => {
    const [filter, setFilter] = useState("");

    const handleFilterValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setFilter(value);
        doFilter(value);
    };

    const doFilter = (filterValue: string) => {
        const filteredRecipes = recipes.filter(recipe =>
            (recipe.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
            || (filterIngredients(recipe, filterValue)));

        onFilter(filteredRecipes); //pass recipes back to reload list
    };

    function filterIngredients(recipe: Recipe, filterValue: string) {
        let hasIngredient = false;
        recipe.ingredients.map(ingredient => {
            if (ingredient.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
                hasIngredient = true;
        });

        return hasIngredient;
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                value={filter}
                onChange={handleFilterValueChange}>
            </input>
        </div>
    );
};

export default RecipeFilter;
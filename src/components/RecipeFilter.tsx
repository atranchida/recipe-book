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
        const newRecipeList = recipes.filter(recipe =>
            (recipe.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())));
        onFilter(newRecipeList);
    };

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
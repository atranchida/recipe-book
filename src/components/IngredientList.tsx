import React from "react";
import { Ingredient } from "../interfaces/Ingredient";
import IngredientListItem from "./IngredientListItem";

interface Props {
    ingredients: Ingredient[];
}

const IngredientList = ({ ingredients }: Props) => {
    return (
        <div>
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map(ingredient => (
                    <IngredientListItem
                        ingredient={{
                            name: ingredient.name
                        }}
                    />
                ))}
            </ul>
        </div>
    );
};

export default IngredientList;
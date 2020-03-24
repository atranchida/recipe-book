import React from "react";
import { Ingredient } from "../interfaces/Ingredient";
import IngredientListItem from "./IngredientListItem";

interface Props {
    ingredients: Ingredient[];
}

const IngredientList = ({ingredients} : Props) => {
    return (
        <ul>
            {ingredients.map(ingredient => (
                <IngredientListItem
                    ingredient={{
                        name: ingredient.name
                    }}
                    />
            ))}
        </ul>
    );
};

export default IngredientList;
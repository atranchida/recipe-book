import React from "react";
import { Ingredient } from "../interfaces/Ingredient";

interface Props {
    ingredient: Ingredient;
}

const IngredientListItem = ({ ingredient }: Props) => {
    return <li>{ingredient.name}</li>
};

export default IngredientListItem;
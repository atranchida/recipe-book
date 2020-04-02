import React from "react";
import { Ingredient } from "../interfaces/Ingredient";
import IngredientListItem from "./IngredientListItem";

interface Props {
    ingredients: Ingredient[];
}

const IngredientList = ({ ingredients }: Props) => {
    return (
        <div>
            <ul>
                {ingredients.map(ingredient => (
                    <IngredientListItem
                        key={ingredient.name}
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
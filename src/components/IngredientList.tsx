import React from "react";
import ContentEditable from "react-contenteditable";
import { Ingredient } from "../interfaces/Ingredient";

interface Props {
    ingredients: Ingredient[];
    onEditIngredient: (ingredients: Array<Ingredient>) => void;
}

const IngredientList = ({ ingredients, onEditIngredient }: Props) => {

    const handleChange = (ingredient: Ingredient, evt: { target: { value: string; }; }) => {
        const index = ingredients.findIndex(i => i.name === ingredient.name);
        let ingredientToEdit = { ...ingredients[index] };
        ingredientToEdit.name = evt.target.value;
        ingredients[index] = ingredientToEdit;

        onEditIngredient(ingredients);
        ingredient.name = evt.target.value;

        console.log("Ingredient changed to: " + ingredients[index].name);
    };

    return (
        <div>
            <ul>
                {ingredients.map(ingredient => (
                    <ContentEditable
                        key={ingredient.name}
                        html={ingredient.name}
                        onChange={(e) => handleChange(ingredient, e)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default IngredientList;
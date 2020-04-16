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
        let ingredientsClone = [...ingredients];
        let ingredientToEdit = { ...ingredientsClone[index] };
        ingredientToEdit.name = evt.target.value;
        ingredientsClone[index] = ingredientToEdit;

        onEditIngredient(ingredientsClone);

        console.log("Ingredient changed to: " + evt.target.value);
    };

    return (
        <div>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <ContentEditable
                        key={index}
                        html={ingredient.name}
                        onChange={(e) => handleChange(ingredient, e)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default IngredientList;
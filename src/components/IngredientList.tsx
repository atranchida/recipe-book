import React, { useRef } from "react";
import { Ingredient } from "../interfaces/Ingredient";
import ContentEditable from "react-contenteditable";


interface Props {
    ingredients: Ingredient[];
}

const IngredientList = ({ ingredients }: Props) => {

    const text = useRef("");

    const handleChange = (evt: { target: { value: string; }; }) => {
        text.current = evt.target.value;
    };

    const handleBlur = () => {
        console.log(text.current);
    };

    return (
        <div>
            <ul>
                {ingredients.map(ingredient => (
                    <ContentEditable
                        key={ingredient.name}
                        html={ingredient.name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                ))}
            </ul>
        </div>
    );
};

export default IngredientList;
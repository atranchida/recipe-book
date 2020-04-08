import React, { useRef, useState } from "react";
import { Recipe } from "../interfaces/Recipe";
import IngredientList from "./IngredientList";
import styles from '../css/RecipeList.module.css';
import ContentEditable from 'react-contenteditable'

export interface Props {
    recipe: Recipe;
    onDelete: (name: string) => void
}

function RecipeCard({ recipe, onDelete }: Props) {

    const text = useRef("");
    const [html, setHTML] = useState(`<h1>` + recipe.name + `</h1>`);

    const handleChange = (evt: { target: { value: string; }; }) => {
        text.current = evt.target.value;
        setHTML(text.current);
    };

    const handleBlur = () => {
        console.log(text.current);
    };

    return (
        <>
            <div className={styles.RecipeCard}>
                <button className={styles.DeleteButton}
                    onClick={() => onDelete(recipe.name)}
                    data-testid="delete-recipe">
                    X
            </button>
                <div className={styles.CardContents}>
                    <ContentEditable
                        html={html}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    <IngredientList ingredients={recipe.ingredients} />
                </div>
            </div>
        </>
    )
}

export default RecipeCard;
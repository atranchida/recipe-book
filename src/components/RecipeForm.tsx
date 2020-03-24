import React, { HTMLProps, ChangeEvent } from "react";
import styles from '../css/RecipeForm.module.css'

const RecipeForm = () => {
    return (
        <form className={styles.RecipeForm}>
            <h1>Enter a new Recipe!</h1>
            <input placeholder="Enter the recipe name..."/>
            <input placeholder="Enter ingredient..." />
            <button >Create</button>
        </form>
    );
};

export default RecipeForm;
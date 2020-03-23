import React, { HTMLProps, ChangeEvent } from "react";

const RecipeForm = () => {
    return (
        <form>
            <h1>Enter a new Recipe!</h1>
            <input placeholder="Enter the recipe name..."/>
            <input placeholder="Enter ingredient..." />
            <button >Create</button>
        </form>
    );
};

export default RecipeForm;
import React, { useState } from 'react'
import RecipeForm from './RecipeForm';
import { Modal } from 'react-responsive-modal';
import "react-responsive-modal/styles.css";
import { Recipe } from '../interfaces/Recipe';

interface Props {
    recipes: Recipe[];
}

function noop() {
    return;
}

const AddRecipeButton = ({ recipes }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button className="button" onClick={() => setOpen(true)}>
                Add New Recipe
            </button>
            <Modal open={open} onClose={() => setOpen(false)} center>
                <RecipeForm
                    onIngredientChange={noop}
                    onRecipeChange={noop}
                    onAddIngredient={noop}
                    onCreate={noop}
                    jsonRecipes={recipes}
                />
            </Modal>
        </>
    );
}

export default AddRecipeButton;
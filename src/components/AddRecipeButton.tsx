import React, { useState } from 'react'
import RecipeForm from './RecipeForm';
import { Modal } from 'react-responsive-modal';
import "react-responsive-modal/styles.css";

function noop() {
    return;
}

function AddRecipeButton() {
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
                />
            </Modal>
        </>
    );
}

export default AddRecipeButton;
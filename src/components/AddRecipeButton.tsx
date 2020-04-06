import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import "react-responsive-modal/styles.css";
import { Recipe } from '../interfaces/Recipe';
import RecipeForm from './RecipeForm';
import styles from '../css/RecipeForm.module.css';

interface Props {
    onAdd: (newRecipe: Recipe) => void;
}

function noop() {
    return;
}

const AddRecipeButton = ({ onAdd }: Props) => {
    const [open, setOpen] = useState(false);

    const handleCreateRecipe = (newRecipe: Recipe) => {
        onAdd(newRecipe);
        setOpen(false);
    };

    return (
        <>
            <button className={styles.AddRecipeButton} onClick={() => setOpen(true)}>
                Add New Recipe
            </button>
            <Modal open={open} onClose={() => setOpen(false)} center>
                <RecipeForm
                    onIngredientChange={noop}
                    onRecipeNameChange={noop}
                    onAddIngredient={noop}
                    onCreate={handleCreateRecipe}
                />
            </Modal>
        </>
    );
}

export default AddRecipeButton;
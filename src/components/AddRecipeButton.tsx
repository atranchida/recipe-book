import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'react-responsive-modal';
import "react-responsive-modal/styles.css";
import styles from '../css/RecipeForm.module.css';
import { NewRecipe } from '../interfaces/Recipe';
import { addRecipe } from '../types/actions';
import RecipeForm from './RecipeForm';

function noop() {
    return;
}

const AddRecipeButton = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const handleCreateRecipe = (newRecipe: NewRecipe) => {
        dispatch(addRecipe(newRecipe));
        setOpen(false);
    };

    return (
        <>
            <button className={styles.AddRecipeButton} onClick={() => setOpen(true)}>
                Add New Recipe
            </button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                center
                classNames={{ modal: 'CustomModal' }}
            >

                <RecipeForm
                    onIngredientChange={noop}
                    onRecipeNameChange={noop}
                    onAddIngredient={noop}
                    onEditIngredient={noop}
                    onCreate={handleCreateRecipe}
                />
            </Modal>
        </>
    );
}

export default AddRecipeButton;
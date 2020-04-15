import React from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { useDispatch } from "react-redux";
import styles from "../css/RecipeList.module.css";
import { Ingredient } from "../interfaces/Ingredient";
import { Recipe } from "../interfaces/Recipe";
import { deleteRecipe, editIngredients, editRecipe } from "../types/actions";
import IngredientList from "./IngredientList";

export interface Props {
  recipe: Recipe;
}

function RecipeCard({ recipe }: Props) {
  const dispatch = useDispatch();

  const handleRecipeNameChange = (evt: ContentEditableEvent) => {
    if (evt.type === "input") {
      dispatch(editRecipe(recipe, evt.target.value));
    }
  };

  const handleDelete = (recipe: Recipe) => {
    dispatch(deleteRecipe(recipe));
  };

  const handleIngredientChange = (newIngredients: Array<Ingredient>) => {
    dispatch(editIngredients(recipe, newIngredients));
  };

  return (
    <>
      <div className={styles.RecipeCard}>
        <button
          className={styles.DeleteButton}
          onClick={() => handleDelete(recipe)}
          data-testid="delete-recipe"
        >
          X
        </button>
        <div className={styles.CardContents}>
          <h1>
            <ContentEditable
              html={recipe.name}
              onChange={handleRecipeNameChange}
            />
          </h1>
          <IngredientList
            ingredients={recipe.ingredients}
            onEditIngredient={handleIngredientChange}
          />
        </div>
      </div>
    </>
  );
}

export default RecipeCard;

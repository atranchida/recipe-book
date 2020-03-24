import React, { useState, ChangeEvent, MouseEvent } from "react";
import styles from '../css/RecipeForm.module.css';
import { Ingredient } from "../interfaces/Ingredient";
import IngredientList from "./IngredientList";

const RecipeForm = () => {

    const [ingredients, setIngredients] = useState<Array<Ingredient>>([]);
    const [ingredient, setIngredient] = useState("");

    const handleAddIngredient = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        setIngredients(previousIngredients => [
          ...previousIngredients,
          {
            name: ingredient
          }
        ]);
    
        setIngredient("");
      };

      const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIngredient(event.currentTarget.value);
      };
    
    
    return (
        <form className={styles.RecipeForm}>
            <h1>Enter a new Recipe!</h1>
            <input 
                placeholder="Enter the recipe name..."       
            />
            <h2>Ingredients</h2>
            <IngredientList ingredients={ingredients} />
            <div>
                <input placeholder="Enter ingredient..." 
                      onChange={handleChange}
                      value={ingredient}/>
                <button onClick={handleAddIngredient}>+ Ingredient</button>
            </div>
            <button >Create</button>
        </form>
    );
};

export default RecipeForm;
import React from "react";
import { render, getByTestId, fireEvent } from "@testing-library/react";

import RecipeForm, { Props } from "../components/RecipeForm";
import "@testing-library/jest-dom/extend-expect";

function renderRecipeForm(props: Partial<Props> = {}) {
    const defaultProps: Props = {

        onIngredientChange() {
            return;
        },

        onRecipeChange() {
            return;
        },

        onAddIngredient() {
            return;
        }
    };
    return render(<RecipeForm {...defaultProps} {...props} />);
}

describe("<RecipeForm />", () => {
    test("should display a blank recipe form with default values set", async () => {
        const { findByTestId } = renderRecipeForm();

        const recipeForm = await findByTestId("recipe-form");

        expect(recipeForm).toHaveFormValues({
            recipeValue: "",
            ingredient: ""
        });
    });

    test("should allow entering a recipe name", async () => {
        const onRecipeChange = jest.fn();
        const { findByTestId } = renderRecipeForm({ onRecipeChange });
        const recipeValue = await findByTestId("recipeValue");

        fireEvent.change(recipeValue, { target: { value: "test" } });

        expect(onRecipeChange).toHaveBeenCalledWith("test");
    });

    test("should allow entering an ingredient value", async () => {
        const onIngredientChange = jest.fn();
        const { findByTestId } = renderRecipeForm({ onIngredientChange });
        const ingredient = await findByTestId("ingredient");

        fireEvent.change(ingredient, { target: { value: "apple" } });

        expect(onIngredientChange).toHaveBeenCalledWith("apple");
    });

    test("should add new ingredient to list of ingredients", async () => {
        const onAddIngredient = jest.fn();
        const onIngredientChange = jest.fn();

        const { findByTestId } = renderRecipeForm({
            onAddIngredient,
            onIngredientChange
        });

        const addIngredient = await findByTestId("addIngredient");
        const ingredient = await findByTestId("ingredient");

        fireEvent.change(ingredient, { target: { value: "newIngredient" } });
        fireEvent.click(addIngredient);
        fireEvent.change(addIngredient, { target: { value: "newIngredient" } });

        expect(onAddIngredient).toHaveBeenCalledWith("newIngredient");
    });

    // TODO: Write test for clicking create 
});
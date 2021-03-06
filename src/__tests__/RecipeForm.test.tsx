import React from "react";
import { render, fireEvent } from "@testing-library/react";

import RecipeForm, { Props } from "../components/RecipeForm";
import "@testing-library/jest-dom/extend-expect";

function renderRecipeForm({ ...props }: Partial<Props> = {}) {
  const defaultProps: Props = {
    onIngredientChange() {
      return;
    },

    onRecipeNameChange() {
      return;
    },

    onAddIngredient() {
      return;
    },

    onCreate() {
      return;
    },

    onEditIngredient() {
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
      ingredient: "",
    });
  });

  test("should allow entering a recipe name", async () => {
    const onRecipeNameChange = jest.fn();
    const { findByTestId } = renderRecipeForm({ onRecipeNameChange });
    const recipeValue = await findByTestId("recipeValue");

    fireEvent.change(recipeValue, { target: { value: "test" } });

    expect(onRecipeNameChange).toHaveBeenCalledWith("test");
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
      onIngredientChange,
    });

    const addIngredient = await findByTestId("addIngredient");
    const ingredient = await findByTestId("ingredient");

    fireEvent.change(ingredient, { target: { value: "newIngredient" } });
    fireEvent.click(addIngredient);
    fireEvent.change(addIngredient, { target: { value: "newIngredient" } });

    expect(onAddIngredient).toHaveBeenCalledWith("newIngredient");
  });

  test("should add a new recipe with recipeValue and ingredients", async () => {
    const onRecipeNameChange = jest.fn();
    const onAddIngredient = jest.fn();
    const onIngredientChange = jest.fn();
    const onCreate = jest.fn();

    const { findByTestId } = renderRecipeForm({
      onAddIngredient,
      onIngredientChange,
      onRecipeNameChange,
      onCreate,
    });

    const addIngredient = await findByTestId("addIngredient");
    const ingredient = await findByTestId("ingredient");
    const recipeValue = await findByTestId("recipeValue");
    const createButton = await findByTestId("create");

    fireEvent.change(recipeValue, { target: { value: "test" } });
    fireEvent.change(ingredient, { target: { value: "newIngredient" } });
    fireEvent.click(addIngredient);
    fireEvent.change(addIngredient, { target: { value: "newIngredient" } });
    fireEvent.click(createButton);

    expect(onCreate).toHaveBeenCalledWith({
      name: "test",
      ingredients: [{ name: "newIngredient" }],
    });
  });
});

import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import React from "react";
import RecipeCard, { Props } from "../components/RecipeCard";
import { Recipe } from "../interfaces/Recipe";

const mockRecipe: Recipe = {
    name: "Apple Pie",
    ingredients: [
        {
            "name": "Apples"
        }
    ]
};

function renderRecipeCard({ ...props }: Partial<Props> = {}) {
    const defaultProps: Props = {

        recipe: mockRecipe,

        onDelete() {
            return;
        },

        onEditIngredients() {
            return;
        },

        onEditRecipeName() {
            return;
        }
    };
    return render(<RecipeCard {...defaultProps} {...props} />);
}

describe("<RecipeCard />", () => {
    test("should allow deleting of a recipe when delete button is clicked", async () => {
        const onDelete = jest.fn();
        const { findByTestId } = renderRecipeCard({ recipe: mockRecipe, onDelete });
        const deleteRecipe = await findByTestId("delete-recipe");

        fireEvent.click(deleteRecipe);

        expect(onDelete).toHaveBeenCalledWith(mockRecipe);
    });
});
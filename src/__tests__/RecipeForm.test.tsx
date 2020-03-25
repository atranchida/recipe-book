import React from "react";
import { render } from "@testing-library/react";

import RecipeForm, { Props } from "../components/RecipeForm";

function renderRecipeForm(props: Partial<Props> = {}) {
    const defaultProps: Props = {

        onIngredientChange() {
            return;
        },

        onRecipeChange() {
            return;
        }
    };
    return render(<RecipeForm {...defaultProps} {...props} />);
}

describe("<RecipeForm />", () => {
    test("should display a blank recipe form with default values set", async () => {
        // use findByTestId to find elements by their data-testid attribute value
        const { findByTestId } = renderRecipeForm();

        const recipeForm = await findByTestId("recipe-form");

        expect(recipeForm).toHaveFormValues({
            recipeValue: "",
            ingredients: []
        });
    });
});


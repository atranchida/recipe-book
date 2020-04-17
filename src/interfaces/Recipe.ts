import { Ingredient } from "../interfaces/Ingredient";

export interface NewRecipe {
  name: string;
  ingredients: Ingredient[];
}

export interface Recipe extends NewRecipe {
  id: number;
}

export interface RecipeBookState {
  recipes: Recipe[];
  filter: string;
  nextId: number;
}

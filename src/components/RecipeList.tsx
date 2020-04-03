import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from '../css/RecipeList.module.css';
import { Recipe } from "../interfaces/Recipe";
import RecipeCard from "./RecipeCard";

interface Props {
    recipes: Recipe[];
    onDelete: (name: string) => void
}

const RecipeList = ({ recipes, onDelete }: Props) => {
    const [currentRecipes, setCurrentRecipes] = useState<Array<Recipe>>([]);
    const [hasMore, setHasMore] = useState(true);

    function fetchMoreData() {
        if(currentRecipes.length >= 50){
            setHasMore(false);
            return;
        }
        setCurrentRecipes(currentRecipes.concat(recipes.slice(4,50)))
    };

    useEffect(() => {
        let testArray = Array.from(recipes.splice(0,2)); //trying to load the first 2 recipes
        setCurrentRecipes(testArray)
    }, [])
  
    return (
        <div data-testid="recipeList" className = {styles.RecipeList}>
            
            <span>{currentRecipes.length}</span>
            <InfiniteScroll
                dataLength={recipes.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
            >
                {currentRecipes.map(recipe => (
                <RecipeCard
                    key={recipe.name}
                    recipe={{
                        name: recipe.name,
                        ingredients: recipe.ingredients
                    }}
                   onDelete = {onDelete}
                />
            ))}
            </InfiniteScroll>
        </div>
    );
};

export default RecipeList;
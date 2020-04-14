import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from '../css/RecipeList.module.css';
import { Recipe } from "../interfaces/Recipe";
import RecipeCard from "./RecipeCard";

interface Props {
    recipes: Recipe[];
    filter: string;
}

const RecipeList = ({ recipes, filter }: Props) => {
    const [currentRecipes, setCurrentRecipes] = useState<Array<Recipe>>([]);
    const [hasMore, setHasMore] = useState(true);
    const [currentLength, setCurrentLength] = useState(30);

    function fetchMoreData() {
        if (currentLength >= recipes.length) {
            setHasMore(false);
            return;
        }
        let newCurrentLength = currentLength + 20;
        setCurrentRecipes(currentRecipes.concat(recipes.slice(currentLength, newCurrentLength)));
        setCurrentLength(newCurrentLength);
    };

    useEffect(() => {
        setCurrentRecipes(Array.from(recipes.slice(0, currentLength)));
    }, [recipes, currentLength])

    return (
        <div data-testid="recipeList" className={styles.RecipeList}>

            <InfiniteScroll className={styles.InfiniteScroll}
                dataLength={currentLength}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
            >
                {currentRecipes
                    .filter(recipe => recipe.name.includes(filter))
                    .map((recipe, index) => (
                    <RecipeCard
                        key={index}
                        recipe={{
                            name: recipe.name,
                            ingredients: recipe.ingredients
                        }}
                    />
                ))}
            </InfiniteScroll>
        </div>
    );
};

export default RecipeList;
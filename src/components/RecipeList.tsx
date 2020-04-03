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
    const [currentLength, setCurrentLength] = useState(20);

    function fetchMoreData() {
        if(currentLength >= recipes.length){
            setHasMore(false);
            return;
        }
        let newCurrentLength = currentLength + 20;
        setCurrentRecipes(currentRecipes.concat(recipes.slice(currentLength,newCurrentLength)));
        setCurrentLength(newCurrentLength);
    };

    useEffect(() => {
        setCurrentRecipes(Array.from(recipes.slice(0,currentLength)));
    }, [recipes, currentLength])
  
    return (
        <div data-testid="recipeList" className = {styles.RecipeList}>   
           
           <div>
            <span>current recipes loaded: {currentRecipes.length}</span><br/>
            <span>current length: {currentLength}</span><br/>
            <span>total recipes: {recipes.length}</span><br/>
            <span>hasMore: {String(hasMore)}</span><br/>
            </div>
        
            <InfiniteScroll className={styles.InfiniteScroll}
                dataLength={currentLength}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
            >
                {currentRecipes.map((recipe, index) => (
                <RecipeCard
                    key={index}
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
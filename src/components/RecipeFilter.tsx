import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { filterRecipes } from "../types/actions";

interface Props {
    filter: string;
}

const RecipeFilter = ({ filter }: Props) => {
    const dispatch = useDispatch();

    const handleFilterValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        dispatch(filterRecipes(value));
    };

    return (
        <div>
            <input
                className="Search-filter"
                type="text"
                placeholder="Search"
                value={filter}
                onChange={handleFilterValueChange}>
            </input>
        </div>
    );
};

export default RecipeFilter;
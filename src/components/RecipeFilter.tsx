import React, { ChangeEvent, useState } from "react";

interface Props {
    onFilter: (filterValue: string) => void;
}

const RecipeFilter = ({ onFilter }: Props) => {
    const [filter, setFilter] = useState("");

    const handleFilterValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setFilter(value);
        onFilter(value);
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
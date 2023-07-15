import React from "react";

export const Search = ({
  searchCategory,
  setSearchCategory,
  searchQuery,
  setSearchQuery,
}) => {
  const handleSearchCategoryChange = (event) => {
    setSearchCategory(event.target.value);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form style={{ display: "flex", flexDirection: "row-reverse" }}>
      <div>
        <label>
          <input
            type="radio"
            value="name"
            checked={searchCategory === "name"}
            onChange={handleSearchCategoryChange}
          />
          Search by Name
        </label>
        <label>
          <input
            type="radio"
            value="ingredients"
            checked={searchCategory === "ingredients"}
            onChange={handleSearchCategoryChange}
          />
          Search by Ingredients
        </label>
        <label>
          <input
            type="radio"
            value="cuisine"
            checked={searchCategory === "cuisine"}
            onChange={handleSearchCategoryChange}
          />
          Search by Cuisine
        </label>
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchQueryChange}
        placeholder="Enter search query"
      />
    </form>
  );
};

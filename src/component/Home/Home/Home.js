import React, { useContext, useState } from "react";
import { FoodContext } from "../../../context/FoodContext";
import { HomeList } from "./HomeList";
import { Search } from "../Serach/Search";

export const Home = () => {
  const { state } = useContext(FoodContext);
  const [searchCategory, setSearchCategory] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = state.recipe.filter((food) => {
    if (searchCategory === "name") {
      return food.name.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (searchCategory === "ingredients") {
      return food.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (searchCategory === "cuisine") {
      return food.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return false;
  });

  return (
    <div className="food">
      <Search
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className="food-list">
        {filteredRecipes.map((food) => (
          <HomeList food={food} key={food.id} />
        ))}
      </div>
    </div>
  );
};

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { FoodContext } from "../../../context/FoodContext";
import "./SinglePage.css";

export const SinglePage = () => {
  const { state } = useContext(FoodContext);
  const { id } = useParams();

  const findData = state.recipe.find((res) => res.id === Number(id));
  console.log(findData);

  return (
    <div className="single-page">
      <div>
        <h1 className="name">{findData.name}</h1>
        <div className="card">
          <div className="image-container">
            <img src={findData.image} alt="" className="image" />
          </div>
          <div className="details">
            <p className="cuisine">Cuisine: {findData.cuisine}</p>
            <ul className="ingredients">
              <b>Ingredients:</b>
              {findData.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <ul className="instructions">
              <b>Instructions:</b>
              {findData.instructions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

export const HomeList = ({ food }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      key={food.id}
      onClick={() => navigate(`/singlePage/${food.id}`)}
    >
      <div className="card-image">
        <img src={food.image} alt="" className="food-image" />
      </div>
      <div className="card-details">
        <h3>{food.name}</h3>
        <p className="cuisine-type">Cuisine Type: {food.cuisine}</p>
        <p>
          Ingredients: <span className="see-recipe">See Recipe {`>`}</span>
        </p>
        <p>
          Instruction: <span className="see-recipe">See Recipe {`>`}</span>
        </p>
      </div>
    </div>
  );
};

import React from "react";

const RecipeModal = ({
  recipe,
  handleClose,
  handleRecipeChange,
  handleIngredientChange,
  handleInstructionChange,
  handleAddIngredient,
  handleAddInstruction,
  handleSaveRecipe,
}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Add Recipe</h2>
          <span className="modal-close" onClick={handleClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={recipe.name}
              onChange={handleRecipeChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ingredients">Ingredients:</label>
            {recipe.ingredients.map((ingredient, index) => (
              <input
                type="text"
                key={index}
                value={ingredient}
                onChange={(event) => handleIngredientChange(event, index)}
              />
            ))}
            <button className="add-button" onClick={handleAddIngredient}>
              Add Ingredient
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="instructions">Instructions:</label>
            {recipe.instructions.map((instruction, index) => (
              <textarea
                key={index}
                value={instruction}
                onChange={(event) => handleInstructionChange(event, index)}
              ></textarea>
            ))}
            <button className="add-button" onClick={handleAddInstruction}>
              Add Instruction
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="cuisine">Cuisine:</label>
            <input
              type="text"
              id="cuisine"
              name="cuisine"
              value={recipe.cuisine}
              onChange={handleRecipeChange}
            />
          </div>
        </div>
        <div className="form-actions">
          <button onClick={handleSaveRecipe}>Save</button>
          <button onClick={handleClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;

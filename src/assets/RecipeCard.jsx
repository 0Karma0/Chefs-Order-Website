import React from 'react';
import jsonData from './data.json';

const RecipeCard = ({ recipe, onAddToWantToCook, isInWantToCook }) => {
  const {
    recipe_id,
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparation_time,
    calories,
  } = recipe;

  const handleAddToWantToCook = () => {
    onAddToWantToCook(recipe);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={recipe_image}
        alt={recipe_name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{recipe_name}</h3>
        <p className="mb-2">{short_description}</p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <div className="flex justify-between items-center">
          <div className="text-gray-600">
            <span className="font-semibold">Preparation Time:</span>{' '}
            {preparation_time}
          </div>
          <div className="text-gray-600">
            <span className="font-semibold">Calories:</span>{' '}
            {calories}
          </div>
        </div>
        <button
          className={`bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 ${
            isInWantToCook ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handleAddToWantToCook}
          disabled={isInWantToCook}
        >
          Want to Cook
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
import React, { useState } from 'react';
import jsonData from './data.json';

const Sidebar = ({
  wantToCook,
  currentlyCooking,
  onAddToCurrentlyCooking,
  onRemoveFromWantToCook,
  totalPreparationTime,
  totalCalories,
}) => {
  const [toastMessage, setToastMessage] = useState('');

  const handleAddToCurrentlyCooking = (recipe) => {
    onAddToCurrentlyCooking(recipe);
    setToastMessage(`Added ${recipe.recipe_name} to Currently Cooking`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleRemoveFromWantToCook = (recipe) => {
    onRemoveFromWantToCook(recipe);
    setToastMessage(`Removed ${recipe.recipe_name} from Want to Cook`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <div className="bg-gray-100 p-4 sticky top-16">
      <h2 className="text-2xl font-semibold mb-4">Want to Cook</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Recipe</th>
            <th className="text-left">Preparation Time</th>
            <th className="text-left">Calories</th>
            <th className="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {wantToCook.map((recipe) => (
            <tr key={recipe.recipe_id}>
              <td className="text-left">{recipe.recipe_name}</td>
              <td className="text-left">{recipe.preparation_time}</td>
              <td className="text-left">{recipe.calories}</td>
              <td className="text-left">
                <button
                  className="bg-green-500 text-white py-2 px-4 rounded-lg mr-2"
                  onClick={() => handleAddToCurrentlyCooking(recipe)}
                >
                  Preparing
                </button>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-lg"
                  onClick={() => handleRemoveFromWantToCook(recipe)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Currently Cooking</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Recipe</th>
            <th className="text-left">Preparation Time</th>
            <th className="text-left">Calories</th>
          </tr>
        </thead>
        <tbody>
          {currentlyCooking.map((recipe) => (
            <tr key={recipe.recipe_id}>
              <td className="text-left">{recipe.recipe_name}</td>
              <td className="text-left">{recipe.preparation_time}</td>
              <td className="text-left">{recipe.calories}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <div className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-2">
          Total Preparation Time: {totalPreparationTime}
        </div>
        <div className="bg-red-500 text-white py-2 px-4 rounded-lg">
          Total Calories: {totalCalories}
        </div>
      </div>
      {toastMessage && <div className="bg-yellow-500 text-white py-2 px-4 rounded-lg mt-4">{toastMessage}</div>}
    </div>
  );
};

export default Sidebar;
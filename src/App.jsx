import React, { useState } from 'react';
import jsonData from './assets/data.json';
import RecipeCard from './assets/RecipeCard';
import Sidebar from './assets/Sidebar';

const App = () => {
  const [wantToCook, setWantToCook] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  const addToWantToCook = (recipe) => {
    if (wantToCook.some((r) => r.recipe_id === recipe.recipe_id)) return;
    setWantToCook([...wantToCook, recipe]);
  };

  const removeFromWantToCook = (recipe) => {
    setWantToCook(wantToCook.filter((r) => r.recipe_id !== recipe.recipe_id));
  };

  const addToCurrentlyCooking = (recipe) => {
    setCurrentlyCooking([...currentlyCooking, recipe]);
    setWantToCook(wantToCook.filter((r) => r.recipe_id !== recipe.recipe_id));
  };

  const totalPreparationTime = currentlyCooking.reduce(
    (total, recipe) => total + recipe.preparation_time,
    0
  );

  const totalCalories = currentlyCooking.reduce((total, recipe) => total + recipe.calories, 0);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="lg:text-2xl font-bold">CHEFS TABLE</div>
          <nav className="flex space-x-4">
            <div>Home</div>
            <div>Recipes</div>
            <div>About</div><div>Search</div>
          </nav>
          <div className="flex lg:space-x-4">
          <div className="w-10 rounded-full">
            <img className='rounded-full' alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
          <div className='pt-2'>User</div>
          </div>
        </div>
      </header>
      <section className="bg-cover lg:h-[800px] bg-center py-16" style={{ backgroundImage: `url(${jsonData.banner_image})` }}>
        <div className="container mx-auto text-white text-center">
          <h2 className="text-4xl mt-40 font-bold mb-4">{jsonData.banner_title}</h2>
          <p className="mb-8">{jsonData.banner_description}</p>
          <button className="bg-white text-gray-800 py-3 px-4 rounded-lg mr-4">Explore Now</button>
          <button className="bg-gray-800 text-white py-4 px-4 rounded-lg">Our Feedback</button>
        </div>
      </section>

      <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Recipes</h2>
          <p className="mb-8">{jsonData.our_recipes_description}</p>
      </div>
      <div className='lg:flex gap-2'>
      <section className="container mx-auto lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {jsonData.recipes.map((recipe) => (
          <RecipeCard
            key={recipe.recipe_id}
            recipe={recipe}
            onAddToWantToCook={addToWantToCook}
            isInWantToCook={wantToCook.some((r) => r.recipe_id === recipe.recipe_id)}
          />
        ))}
      </section>
      <section className='mt-16'>
      <Sidebar
        wantToCook={wantToCook}
        currentlyCooking={currentlyCooking}
        onAddToCurrentlyCooking={addToCurrentlyCooking}
        onRemoveFromWantToCook={removeFromWantToCook}
        totalPreparationTime={totalPreparationTime}
        totalCalories={totalCalories}
      />
      </section>
      </div>
    </div>
  );
};

export default App;

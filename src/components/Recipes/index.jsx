import React from "react";
import RecipeCard from "./RecipeCard";

const Recipes = ({ recipes }) => {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold leading-3">All Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 gap-y-7">
        {recipes?.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe?.id} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;

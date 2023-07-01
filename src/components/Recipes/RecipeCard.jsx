import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { useData } from "../../contexts/DataContext";

const RecipeCard = ({ recipe }) => {
  const { deleteRecipe } = useData();
  return (
    <div className="card max-w-[340px] bg-zinc-900 shadow-xl">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="text-sm">{recipe?.cuisine}</div>
        <div className="card-title">
          {recipe?.recipe_name}
          {recipe?.veg ? (
            <span className="badge badge-success badge-sm">VEG</span>
          ) : (
            <span className="badge badge-error badge-sm ">NONVEG</span>
          )}
        </div>

        <div className="card-actions justify-end mt-5">
          <NavLink to={`/recipe/${recipe?.id}`}>
            <div className="btn btn-outline btn-success">See full recipe</div>
          </NavLink>
          <button className="btn btn-outline btn-accent">
            <FiEdit2 size={24} />
          </button>
          <button
            className="btn btn-outline btn-error"
            onClick={() => deleteRecipe(recipe?.id)}
          >
            <AiOutlineDelete size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { useData } from "../contexts/DataContext";

const Recipe = () => {
  const { id } = useParams();
  const { recipes } = useData();
  const recipe = recipes?.find((recipe) => recipe?.id === parseInt(id));
  console.log(recipe);
  return (
    <div className="max-w-[1280px] mx-auto mt-5">
      <NavLink to="/" className="flex gap-2 m-5">
        <BiHomeAlt2 size={24} /> Home
      </NavLink>
      <div className="card card-side bg-zinc-900 shadow-xl">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Movie"
            className="w-96 h-full"
          />
        </figure>
        <div className="card-body">
          <p className="card-title text-base">
            Cuisine: {recipe?.cuisine}{" "}
            {recipe?.veg ? (
              <span className="badge badge-success badge-sm">VEG</span>
            ) : (
              <span className="badge badge-success badge-sm">VEG</span>
            )}
          </p>
          <h2 className="text-3xl font-semibold">Ingredients : </h2>
          <div style={{ display: "inline" }}>
            {recipe?.ingredients?.map((ingredient, index) => (
              <React.Fragment key={index}>
                {index > 0 && ", "}
                <span>{ingredient?.name}</span>
              </React.Fragment>
            ))}
          </div>
          <div className="">
            <h2 className="text-3xl font-semibold">Instructions : </h2>
            <ol className="list-decimal ml-4 leading-10">
              {recipe?.instructions?.map((instruction) => (
                <li>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;

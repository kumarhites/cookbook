import React from "react";
import icon from "../assets/cookbook.png";
import { NavLink } from "react-router-dom";

const SearchBar = () => {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-[50px] md:h-[70px] mt-2 p-5 flex items-center gap-5">
      <NavLink to="/">
        <img src={icon} alt="icon" height={48} width={48} />
      </NavLink>
      <form className="w-full" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search Recipes"
          className="input input-bordered input-accent w-full"
        />
      </form>
    </div>
  );
};

export default SearchBar;

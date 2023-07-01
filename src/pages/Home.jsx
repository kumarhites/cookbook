import React from "react";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import Recipes from "../components/Recipes";
import { useData } from "../contexts/DataContext";

const Home = () => {
  const { recipes } = useData();
  return (
    <div className="max-w-[1280px] mx-auto">
      <SearchBar />
      <Filters />
      <Recipes recipes={recipes} />
    </div>
  );
};

export default Home;

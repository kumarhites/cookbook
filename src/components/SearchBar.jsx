import { NavLink } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import icon from "../assets/cookbook.png";

const SearchBar = () => {
  const { search, setSearch } = useData();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Any additional logic for submitting the search form
  };

  const searchFilter = (e) => {
    setSearch(e.target.value.toLowerCase());
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
          onChange={searchFilter}
          value={search || ""}
        />
      </form>
    </div>
  );
};

export default SearchBar;

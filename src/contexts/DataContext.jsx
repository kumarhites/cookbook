import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { fakeFetch } from "../api/fakefetch";
import { recipeReducer } from "../reducers/recipeReducer";

const DataContext = createContext();
const initialState = {
  recipes: [],
};

export const DataProvider = ({ children }) => {
  const [recipesState, recipeDispatch] = useReducer(
    recipeReducer,
    initialState
  );
  const [search, setSearch] = useState("");

  const searchFilter = () => {
    const searched = recipesState.recipes.filter((recipe) =>
      recipe.recipe_name.toLowerCase().includes(search.toLowerCase())
    );
    recipeDispatch({ type: "SEARCH", payload: searched });
  };

  useEffect(() => {
    searchFilter();
  }, [search]);

  const deleteRecipe = (id) => {
    const updatedRecipes = recipesState.recipes.filter(
      (recipe) => recipe.id !== id
    );

    recipeDispatch({ type: "DELETE_RECIPE", payload: updatedRecipes });
  };

  const getRecipes = async () => {
    try {
      const { recipes, status } = await fakeFetch(
        "https://example.com/api/recipes"
      );
      if (status === 200) {
        recipeDispatch({ type: "GET_RECIPES", payload: recipes });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <DataContext.Provider
      value={{ recipes: recipesState.recipes, search, setSearch, deleteRecipe }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

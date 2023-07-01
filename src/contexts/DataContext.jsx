import { createContext, useContext, useEffect, useReducer } from "react";
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
    <DataContext.Provider value={{ recipes: recipesState.recipes }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);

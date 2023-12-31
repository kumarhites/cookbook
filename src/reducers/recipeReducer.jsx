export const recipeReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_RECIPES":
      return { ...state, recipes: payload };
    case "SEARCH":
      return { ...state, recipes: payload };
    case "DELETE_RECIPE":
      return { ...state, recipes: payload };
    default:
      return state;
  }
};

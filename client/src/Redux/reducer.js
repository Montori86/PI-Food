import { GET_RECIPES, FILTER_FOR_DIET, GET_DETAIL } from "./actions";

const initialState = {
  recipes: [],
  diets: [],
  datail: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, recipes: action.payload };

    case FILTER_FOR_DIET:
      let filter = [];

      for (let i = 0; i < state.recipes.length; i++) {
        let recipes = state.recipes[i];
        for (let diets of recipes.diets) {
          if (diets.length > 0) {
            filter.push(diets);
          }
        }
        // let dietRecipe = state.recipes[i].diets.filter(diet => diet === action.payload)
        // if (dietRecipe.length < 0){filter.push(dietRecipe)}
      }

      return {
        ...state,
        diets: filter,
      };

    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    default:
      return state;
  }
}

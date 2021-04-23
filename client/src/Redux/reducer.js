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
        let recipes = state.recipes;
        console.log(action.payload)
        for (let diets in recipes.diets) {
          if (diets.length > 0) {
            filter.push(recipes);
            
          }
        }
        // let dietRecipe = state.recipes[i].diets.filter(diet => diet === action.payload)
        // if (dietRecipe.length < 0){filter.push(dietRecipe)}
      

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

import { GET_RECIPES, FILTER_FOR_DIET, GET_DETAIL, GET_ORDER } from "./actions";

const initialState = {
  recipes: [],
  diets: [],
  datail: {},
  filter:[]
};


export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      action.payload.map(recipe => {
        if (recipe.id.length > 10){
         recipe.diets = recipe.diets.map(diet =>{
            return diet.name
          })
        }
      })
     return {       
       recipes: action.payload,
       diets: [],
       datail: {},
       filter:[]
     }
     
    case FILTER_FOR_DIET:
      let filter = [];  
      
      if (state.filter.length > 0){
        for (let recipe of state.filter) {       
          let dietRecipe = recipe.diets.filter(d => d === action.diets )           
          if (dietRecipe.length > 0) {
           
            filter.push(recipe);
            
          }
        }
      
        return {
          ...state,
          diets: filter,
          filter: filter
        }
      }
        for (let recipe of action.payload) {       
         
          let dietRecipe = recipe.diets.filter(d => d === action.diets )
            
          if (dietRecipe.length > 0) {
           
            filter.push(recipe);
            
          }
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
    
    case GET_ORDER:
      
       return { ...state, filter: action.payload };

    default:
      return state;
  }
}

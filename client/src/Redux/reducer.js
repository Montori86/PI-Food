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
      // let db = [];
      // if (action.payload[0].id > 6)
        return { ...state, recipes: action.payload };
  //     }else{
  //     // console.log(action.payload[0].id)
  //    for (let recipe of action.payload) {       
      

  //     let dataDB = recipe.id.filter(id => id.length < 6)
  //     console.log(dataDB)
  //     // if (recipesDB.length > 0) {
       
  //     //   db.push(recipe);
        
  //     // }
  //   }
  //    return { ...state, recipes: db };
   
      
      
    case FILTER_FOR_DIET:
      let filter = [];   
           
        for (let recipe of state.recipes) {       
          
          let dietRecipe = recipe.diets.filter(diet => diet === action.payload)
          
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

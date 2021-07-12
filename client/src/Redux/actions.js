import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";
export const FILTER_FOR_DIET = "FILTER_FOR_DIET";
export const GET_DETAIL = "GET_DETAIL"
export const GET_ORDER = "GET_ORDER"


export  function getRecipes(name) {
  
 if (name){
 
  return async (dispatch) => {
    const requestApi = await axios.get(`/recipe?name=${name}`); 
    
    dispatch({
      type: "GET_RECIPES",
      payload: requestApi.data,
    });
  };
 }else{

  return async (dispatch) => {
    const requestApi = await axios.get("/recipe");

    dispatch({
      type: "GET_RECIPES",
      payload: requestApi.data,
    });
  };
}
}

export  function getDiet(diet){
  
  if (diet){

  return async (dispatch) => {
    const requestApi = await axios.get(`/recipe`);
    
    dispatch({
      type: "FILTER_FOR_DIET",
      payload: requestApi.data,
      diets: diet
     
    });
  };

}else{

  return async (dispatch) => {
    const requestApi = await axios.get("/recipe");

    dispatch({
      type: "GET_RECIPES",
      payload: requestApi.data,
    });
  };
}
}

export  function getDetails(id){
  
  return async (dispatch) => {
    const requestApi = await axios.get(`/recipe/${id}`);
  
    
    dispatch({
      type: "GET_DETAIL",
      payload: requestApi.data,
     
    });
  };

}

export  function getOrder(array){
  
  return  (dispatch) => {
    
    dispatch({
      type:"GET_ORDER",
      payload: array
    })
  }
  
}
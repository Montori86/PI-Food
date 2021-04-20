import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, getDiet } from "../../src/Redux/actions.js";

export default function Recipe() {
  const dispatch = useDispatch();
  const arrayRecipes = useSelector((state) => state.recipes);
  let aux = "";

 
  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  // function handleFilter() {
  //   let filter = document.getElementById("select");
  //   if (arrayRecipes) {
  //     dispatch(getDiet(filter.value));
  //   } 
  // }

  // function handleChange(e) {
  //   aux = e.target.value;
  // }

  // function handleClick() {
  //   dispatch(getRecipes(aux));

    
  
return (
 <div>+</div>
)

}

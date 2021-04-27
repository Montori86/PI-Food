import React, { useEffect, useState } from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";


export default function Card() {  
  const arrayRecipes = useSelector((state) => state.recipes);
  const arrayDiets = useSelector((state) => state.diets);
  const arrayFilter = useSelector((state) => state.filter)
  const [page, setPage] = useState(0);
  const [max, setMax] = useState(0);
  const [show, setShow] = useState([]);
  




useEffect(() => { 
  if (arrayFilter?.length > 0){
    setShow(arrayFilter)}
else if (arrayDiets?.length > 0){
   setShow(arrayDiets)}
   
else {setShow(arrayRecipes)}

})




  useEffect(() => {



    if (arrayRecipes && arrayRecipes.length > 0) {
      setMax(arrayRecipes && arrayRecipes.length-1)
      
    }
    if (arrayFilter && arrayFilter.length > 0) {
      setMax(arrayFilter && arrayFilter.length-1)
      setPage(0)
    }
  },[arrayFilter,arrayRecipes])
  
  const nextPage = ()=> {page < max && setPage(page + 5)};
  const prevPage= () =>{page >0 && setPage(page - 5)};

  
  return (

    <div className="container">
      { show?.map((recipe) => {
        return (
          <div className="card" key={recipe.id}>
            <div>
              <h4 className="text1">{recipe.title}</h4>
              <img src={recipe.image} />
              <tex>
                {"Diets: "}
              
                {recipe.diets.join(",")}
              </tex>
            </div>
            <NavLink to={`/details/${recipe.id}`}>
              <button className="boton">More Info</button>
            </NavLink>
          </div>
        )
      }) 
      }

      <br>
      </br>
      <br>
      </br>
      <div>
      <div >
          <button onClick={prevPage}>{"<--"}</button>          
          <button onClick={nextPage}>{"-->"}</button>
        </div> 
        
      </div>
    
    </div>
    
  );
}

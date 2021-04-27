import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, getDiet, getOrder } from "../../src/Redux/actions.js";


export default function Home() {
  const dispatch = useDispatch();
  const arrayRecipes = useSelector((state) => state.recipes);
  const arrayDiets = useSelector((state) => state.diets);
  const [order, setOrder] = useState("");
  const [filtered, setFiltered] = useState([]);
 
  var aux ="";
  

const AZ = (a, b) => { return b.title > a.title ? 1 : -1 }
const ZA = (a, b) => { return a.title > b.title ? 1 : -1 }
const MIN = (a, b) => { return b.healthScore - a.healthScore }
const MAX = (a, b) => { return a.healthScore - b.healthScore }

 


useEffect(() => {
  
  switch (order) {
        case 'AZ':   setFiltered([...arrayRecipes].sort(AZ));
        break;
        case 'ZA':  setFiltered ([...arrayRecipes].sort(ZA));
        break;
        case 'MAX':  setFiltered([...arrayRecipes].sort(MAX));
        break;
        case 'MIN': setFiltered([...arrayRecipes].sort(MIN));
        break;
        default:  setFiltered ([...arrayRecipes])
    }
    
   dispatch(getOrder(filtered)) 

},[order])






  useEffect(() => {
    dispatch(getRecipes());
  }, []);


function handleOrder (e){
  setOrder(e.target.value)
}

  function handleFilter (e)  {
    dispatch(getDiet(aux))
    
  }

  function handleChange(e) {      
 
   aux =e.target.value
  }
  function handleClick() {
    
    dispatch(getRecipes(aux));
    
  }





  return (
    <div className="contenedor-principal">
      <div>
        <label htmlFor="header-search">
          <span>Search recipes</span>
        </label>
        <input onChange={handleChange} type="text" placeholder="Recipe..." />
        <button onClick={handleClick}>Search</button>
        <select name="select" id="select" onChange={handleChange}>
          <option value="select diet">select diet</option>
          <option value="vegan">vegan</option>
          <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
          <option value="ketogenic">ketogenic</option>
          <option value="vegetarian">vegetarian</option>
          <option value="lacto vegetarian">lacto vegetarian</option>
          <option value="pescetarian">pescetarian</option>
          <option value="paleo">paleo</option>
          <option value="primal">primal</option>
          <option value="whole30">whole30</option>
        </select>
        <button onClick={handleFilter}>Filter</button>
        
        <div >
          <label>Ordenar por: </label>
          <select value={order} onChange={handleOrder} >
            <option value="" selected>Options</option>
            <option value="AZ">Nombre ↑</option>
            <option value="ZA">Nombre ↓</option>
            <option value="MAX">Puntuacion ↑</option>
            <option value="MIN">Puntuacion ↓</option>
            
          </select>
         
        </div>
      </div>
      <br>
      </br>
        <h3>Your selection:</h3>
      <br>
  
      </br>
     
  </div>
  );
}
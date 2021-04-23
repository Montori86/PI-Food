import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, getDiet } from "../../src/Redux/actions.js";


export default function Home() {
  const dispatch = useDispatch();
  const arrayRecipes = useSelector((state) => state.recipes);
  const arrayDiets = useSelector((state) => state.diets);
  const [order, setOrder] = useState("");
  
 var aux =[];
  






  useEffect(() => {
    dispatch(getRecipes());
  }, []);




  function handleFilter() {
    let filter = order;

    if (arrayDiets) {
      dispatch(getDiet(filter.value));
    }
  }

  function handleChange(e) {      
    console.log(aux)
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
        <button onClick={handleClick}>Filter</button>
        {arrayDiets.map((diets) => {
          return <h3>{diets}</h3>;
        })}
        <div >
          <label>Ordenar por: </label>
          <select value={order} onChange={(e) => {setOrder(e.target.value); }}>
            <option value="">Options</option>
            <option value="AZ">Nombre ↑</option>
            <option value="ZA">Nombre ↓</option>
            <option value="MAX">Puntuacion ↑</option>
            <option value="MIN">Puntuacion ↓</option>
            
          </select>
          <button onClick={handleFilter}>Filter</button>
        </div>
      </div>
      <br>
      </br>
      {/* {arrayRecipes.data.map((recipe) => {
        return (
          <div className="contenedor-principal" key={recipe.id}>
            <div className="caja-receta">
              <h3 className="">{recipe.title}</h3>
              <img src={recipe.image} />
              <p>{recipe.diets}</p>
            </div>
            <NavLink to={`/details/${recipe.id}`}>
              <button>Mas info</button>
            </NavLink>
          </div>
        );
      })} */}
     
      <br>
      </br>
  </div>
  );
}
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, getDiet, getOrder } from "../../src/Redux/actions.js";
import "./Home.css";





export default function Home() {
  const dispatch = useDispatch();
  const arrayRecipes = useSelector((state) => state.recipes);
  const arrayDiets = useSelector((state) => state.diets);
  const [order, setOrder] = useState("");
  const [filtered, setFiltered] = useState([]);
  
 
  var aux = "";

  const AZ = (a, b) => {
    return b.title > a.title ? 1 : -1;
  };
  const ZA = (a, b) => {
    return a.title > b.title ? 1 : -1;
  };
  const MAX = (a, b) => {
    return b.aggregateLikes - a.aggregateLikes;
  };
  const MIN = (a, b) => {
    return a.aggregateLikes - b.aggregateLikes;
  };

  useEffect(() => {
    if (arrayDiets.length > 0) {
      switch (order) {
        case "AZ":
          setFiltered(...arrayDiets.sort(ZA));
          break;
        case "ZA":
          setFiltered(...arrayDiets.sort(AZ));
          break;
        case "MAX":
          setFiltered(...arrayDiets.sort(MAX));
          break;
        case "MIN":
          setFiltered(...arrayDiets.sort(MIN));
          break;
        default:
          setFiltered(arrayDiets);
      }

      dispatch(getOrder(filtered));
    } else {
      switch (order) {
        case "AZ":
          setFiltered(...arrayRecipes.sort(ZA));
          break;
        case "ZA":
          setFiltered(...arrayRecipes.sort(AZ));
          break;
        case "MAX":
          setFiltered(...arrayRecipes.sort(MAX));
          break;
        case "MIN":
          setFiltered(...arrayRecipes.sort(MIN));
          break;
        default:
          setFiltered(arrayRecipes);
      }

      dispatch(getOrder(filtered));
    }
  }, [order]);

  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  function handleOrder(e) {
    setOrder(e.target.value);
  }

  function handleFilter() {
    dispatch(getDiet(aux));
  }

  function handleChange(e) {
    aux = e.target.value;
  }
  function handleClick() {
    dispatch(getRecipes(aux));
  }
 
  return (
    <div className="contenedor-principal">
      <div>
        <br></br>

        <select className="bot3"
          name="select"
          id="select"
          onChange={handleChange}
        >
          <option value="select diet">select diet</option>
          <option value="vegan">vegan</option>
          <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
          <option value="ketogenic">ketogenic</option>
          <option value="vegetarian">vegetarian</option>
          <option value="lacto vegetarian">lacto vegetarian</option>
          <option value="pescetarian">pescetarian</option>
          <option value="paleo">paleo</option>
          <option value="primal">primal</option>
          <option value="gluten free">gluten free</option>
          <option value="whole30">whole30</option>
        </select>
        <button className="bot2" onClick={handleFilter}>
          Filter
        </button>

          <label className="btn22">Order by: </label>
          <select className="bot3" value={order} onChange={handleOrder}>
            <option value="" selected>
              Options
            </option>
            <option value="AZ">Nombre ↑</option>
            <option value="ZA">Nombre ↓</option>
            <option value="MAX">Puntuacion ↑</option>
            <option value="MIN">Puntuacion ↓</option>
          </select>
        
      </div>
      <br></br>

      <br></br>
    </div>
  );
}

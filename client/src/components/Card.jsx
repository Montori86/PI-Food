import React, { useEffect, useState } from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


export default function Card() {  
  const arrayRecipes = useSelector((state) => state.recipes);
  const [page, setPage] = useState(0);
  const [max, setMax] = useState(20);

  const nextPage = () => {
    page < max && setPage(page + 4);
  };
  const prevPage = () => {
    page > 0 && setPage(page - 4);
  };



  return (
    <div className="container">
      {arrayRecipes.slice(page, page + 4).map((recipe) => {
        return (
          <div className="card" key={recipe.id}>
            <div>
              <h3>{recipe.title}</h3>
              <img src={recipe.image} />

              <p>
                {"Diets: "}
                {recipe.diets}
              </p>
            </div>
            <NavLink to={`/details/${recipe.id}`}>
              <button className="button">More Info</button>
            </NavLink>
          </div>
        );
      })}

      <br>
      </br>
      <br>
      </br>
      <div>
        <div className="button">
          <button onClick={prevPage}>{"<--"}</button>
          
          <button onClick={nextPage}>{"-->"}</button>
        </div>
      </div>
    </div>
  );
}
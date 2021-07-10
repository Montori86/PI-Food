import React, { useEffect, useState } from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";

export default function Card() {
  const arrayRecipes = useSelector((state) => state.recipes);
  const arrayDiets = useSelector((state) => state.diets);
  const arrayFilter = useSelector((state) => state.filter);
  const [page, setPage] = useState(0);
  const [max, setMax] = useState(0);
  const [show, setShow] = useState([]);

  useEffect(() => {
    if (arrayFilter?.length > 0) {
      setShow(arrayFilter);
    } else if (arrayDiets?.length > 0) {
      setShow(arrayDiets);
    } else {
      setShow(arrayRecipes);
    }
  });



  useEffect(() => {
    setMax(show.length - 5);
    setPage(0);
  }, [show]);

  const nextPage = () => {
    page < max && setPage(page + 5);
  };
  const prevPage = () => {
    page > 0 && setPage(page - 5);
  };

  return (
    <div className="container22">
      <div className="cardsdiv22"> 
        {show?.slice(page, page + 5).map((recipe) => {
          return (
            <div className="card" key={recipe.id}>
              <div>
                <h4 className="text1">{recipe.title}</h4>
                <img src={recipe.image} />
                <p>
                  {"Diets: "}
                  
                  {recipe.diets.join(",")}
                </p>
              </div>
              <NavLink to={`/details/${recipe.id}`}>
                <button className="boton">More Info</button>
              </NavLink>
            </div>
          );
        })}
      </div>

      <div>
        <button className="page" onClick={prevPage}>{"<"}</button>
        <button className="page" onClick={nextPage}>{">"}</button>
      </div>
    </div>
  );
}

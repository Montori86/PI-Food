import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetails } from "../Redux/actions.js";
import { NavLink } from "react-router-dom";
import "./Details.css";
export default function Datail(props) {

  const dispatch = useDispatch();
  const arrayDetails = useSelector((state) => state.detail);  
  let id = props.match.params.id;

  
  useEffect(() => {
    dispatch(getDetails(id));
    
  },[]);

  
  return (
    <div className="bkc1">
      <div className="bkc2">      
      <h1>Detalle de la recetas</h1>
      <h3 className="">{arrayDetails?.name}</h3>      
      <h3 className="">{arrayDetails?.diet}</h3>
      <p className="">{arrayDetails?.description.replace(/(<([^>]+)>)/ig, '')}</p>
      <h3 className="score">Score:</h3>
      <p className="">{arrayDetails?.healthScore}</p>
      <p className="">{arrayDetails?.steps}</p>
      </div>
      <NavLink to={`/home`}>
                <button className="still">Back to Home...</button>
      </NavLink>
    </div>
  );
}


  


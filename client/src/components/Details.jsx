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
      <h1 className="">{arrayDetails?.name}</h1>      
      <img className="image" src={arrayDetails?.image} /><h3 className="score">Score: {arrayDetails?.healthScore}</h3>
      <h3>Diets: {arrayDetails?.diet}</h3>
      <h3 className="">Step to step</h3>
      <p className="">{arrayDetails?.description.replace(/(<([^>]+)>)/ig, '')}</p>
      
      
      <p className="">{arrayDetails?.steps}</p>
      </div>
      <NavLink to={`/home`}>
                <button className="still">Back to Home...</button>
      </NavLink>
    </div>
  );
}


  


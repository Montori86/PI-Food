import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetails } from "../../src/Redux/actions.js";
import { NavLink } from "react-router-dom";

export default function Datail(props) {

  const dispatch = useDispatch();
  const arrayDetails = useSelector((state) => state.detail);  
  let id = props.match.params.id;

  
  useEffect(() => {
    dispatch(getDetails(id));
    
  },[]);

  
  return (
    <div   >
      <div>
        <NavLink to={`/home`}>
          <button>Home</button>
        </NavLink>
      </div>
      Detalle de la recetas
      <h3>{arrayDetails?.name}</h3>      
      <h3>{arrayDetails?.diet}</h3>
      <p>{arrayDetails?.description}</p>
      <p>{arrayDetails?.healthScore}</p>
      <p>{arrayDetails?.steps}</p>
    </div>
  );
}


  


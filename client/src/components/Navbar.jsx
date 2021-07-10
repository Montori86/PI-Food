import React from "react";
import './Navbar.css'
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, getDiet, getOrder } from "../../src/Redux/actions.js";



export default function NavBar() {
    const dispatch = useDispatch();
    var aux = "";



    function handleChange(e) {
        aux = e.target.value;
      }
      function handleClick() {
        dispatch(getRecipes(aux));
      }

    return (
    <nav className="box">              
          <div>
          <a className="btn2" href="/">Cook with us!</a>
          
        
        <input
          className="bot"
          onChange={handleChange}
          type="text"
          placeholder="Recipe..."
        />
        <button className="bot2" onClick={handleClick}>
          Search
        </button>      
            
          </div> 
          <div className="btn">
          <a  href="/addrecipe">Add your recipe</a> 
          </div>        
    </nav>
    )
}




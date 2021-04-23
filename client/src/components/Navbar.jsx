import React from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
        <ul className="menu">
          <li className="logo"><a href="/">Cook with us!</a></li>
         
         
          {/* <li className="">
<NavLink to={"/"} >{'Home'}</NavLink>
<NavLink className="btn2" to="/addrecipe" >{'Create your recipe'}</NavLink>
</li> */}
          
          <li className="item button"><a href="/home">Home</a></li>
          <li className="item button secondary"><a href="/addrecipe">Create your recipe</a></li>
          <li className="toggle"><a href="#"><i className="fas fa-bars"></i></a></li>
        </ul>
      </nav>
    )
}




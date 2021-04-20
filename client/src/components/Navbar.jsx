import React from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="navbar">
           
            <nav>
                <ul className="list ">
                    <li className="">
                        <NavLink to={"/"} >{'Home'}</NavLink>
                        <NavLink className="btn2" to="/addrecipe" >{'Create your recipe'}</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Welcome from "./components/Welcome.jsx";
import Home from "./components/Home.jsx";
import Recipes from "./components/Recipes.jsx";
import Navbar from "./components/Navbar.jsx";
import Details from "./components/Details.jsx"
import Card from "./components/Card.jsx"


function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Welcome} /> 
      <Route path="/home" component={Navbar} />       
      <Route path="/home" component={Home} />         
      <Route exact path="/addrecipe" component={Recipes} />      
      <Route path="/home" component={Card} />
      <Route exact path="/details/:id" component={Details} />
    </React.Fragment>
  );
}

export default App;

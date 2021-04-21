import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Recipes.css'

export default function Recipes() {
  const arrayDiets = useSelector((state) => state.diets);

  const [input, setInput] = useState({
    title: "",
    dishType: "",
    // diets: "",
    description: "",
    healthScore: "",
    steps: "",
  });
  console.log(input)
  const [diets, setDiets] = useState({    
    diets: []
  })

 

  function handleSubmit(e) {}

  function handleChange2(e) {
    let flag= false
    for (let i=0; i< diets.diets.length; i++){
        if (diets.diets[i] === e.target.value){
            flag=true
        }
    }
    if (!flag){
       
      setDiets({
        ...diets,
        diets: diets.diets.concat(e.target.value)
    })}

  }   
  
      
   function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name

    setInput({
        ...input,
        [name]: value
    });
}

  // function handleScore(e) {
  //   console.log(e.target.value)
  // }


  return (
    <form onSubmit={handleSubmit} className="container">
     <label for="nya">Recipe Name:</label>      
      <br />
      <input type="text" name="title" onChange={handleChange} />
      <br />
      <label for="score">Score:</label><input name="healthScore" type="range"min="0" max="100" onChange={handleChange} ></input>
      <br />
      <label for="nya">Type:</label>
      <br />
      <input type="text" name="dishType" onChange={handleChange} />
      <br />
      <br />
        <ul>
        <li><input onChange={handleChange2} id='1' type="checkbox" name='diets' value="Gluten Free"></input><label for="1">Gluten Free</label></li>
        <li><input onChange={handleChange2} id='2' type="checkbox" name='diets' value="ketogenic"></input><label for="2">Ketogenic</label></li>
        <li><input onChange={handleChange2} id='3' type="checkbox" name='diets' value="vegetarian"></input><label for="3">Vegetarian</label></li>
        <li><input onChange={handleChange2} id='4' type="checkbox" name='diets' value="lacto vegetarian"></input><label for="4">Lacto-Vegetarian</label></li>
        <li><input onChange={handleChange2} id='5' type="checkbox" name='diets' value="ovo vegetarian"></input><label for="5">Ovo-Vegetarian</label></li>
        </ul>
        <ul>
        <li><input onChange={handleChange2} id='6' type="checkbox" name='diets' value="vegan"></input><label for="6">Vegan</label></li>
        <li><input onChange={handleChange2} id='7' type="checkbox" name='diets' value="pescetarian"></input><label for="7">Pescetarian</label></li>
        <li><input onChange={handleChange2} id='8' type="checkbox" name='diets' value="paleo"></input><label for="8">Paleo</label></li>
        <li><input onChange={handleChange2} id='9' type="checkbox" name='diets' value="primal"></input><label for="9">Primal</label></li>
        <li><input onChange={handleChange2} id='10' type="checkbox" name='diets' value="whole30"></input><label for="10">Whole30</label></li>
        </ul>
        
      <br />
      
     
      <input type="submit" value="Enviar" />
    </form>
  );
}



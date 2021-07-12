import React, { useState } from "react";

import axios from 'axios'
import './Recipes.css'

export default function Recipes() {
 

  const [input, setInput] = useState({
    title: "",
    dishType: "",
    description: "",
    healthScore: "",
    steps: "",
  });
  
  const [diets, setDiets] = useState({    
    diets: []
  })

  
 

 async function handleSubmit(e) {
   alert('Se creo la receta!!')
    var obj = {}    
    await axios({
      method:'post',
      url:'/recipe',
      data:
      obj={
          ...input, ...diets
      }
    })

        
    
  }

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


  return (      
   
    <form onSubmit={handleSubmit} className="container_12">
      <nav className="box">              
          <a className="b" href="/home">Go Back</a>
          <div className="btn2"><a>Create your own recipe here!</a></div>            
    </nav>
     <br>
     </br>
     <label for="nya"className="btn2" >Recipe Name:</label>      
      <br />
      <input type="text" name="title" className="b2" onChange={handleChange} required />
      <br />
      <label for="score" className="btn2">Score: <output >{input.healthScore}%</output></label><input name="healthScore" className="slider" type="range" min="0" max="100" onChange={handleChange} required ></input>
     
      <br />
      <label for="nya" className="btn2">Type:</label>
      <br />
      <input type="text" name="dishType" className="b2" onChange={handleChange} required />
      <br />
      <br />
        <ul>
        <li><input  onChange={handleChange2} id='1' type="checkbox" name='diets' value="Gluten Free"></input><label for="1">Gluten Free</label></li>
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
      <label for="nya"className="btn2">Description:</label>      
      <br />
      <input className="b3" type="text" name="description" onChange={handleChange} required/>
      <br />
      <label className="btn2">Steps</label>
      <textarea className="b3" name="steps" rows="10" cols="50"onChange={handleChange} required></textarea>
      <br />      
      <input type="submit" value="CREAT" className="boton1"/>
    </form>
  );
}



const { Recipe } = require("../db");
const axios = require("axios");
const { v4: uuidv4 } = require('uuid');
const { response } = require("express");
const { API_KEY } = process.env;

async function addRecipe(req, res, next) {
  let {name, description, rating, healthyRating, instructions}= req.body
  if (!name || !description){
    res.status(400).send('Obligatory completed')
  }else{
    await Recipe.create({
      name, 
      id: uuidv4(),
      description,
      rating,
      healthyRating,
      instructions
    })
    res.send('Recipe added')

  }
}

async function getAllRecipes(req, res, next) {
  let name = req.query.name
  const recipeDB = await Recipe.findAll({
    where:{
      name:name
    }
  })
  const recipeApi = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}&addRecipeInformation=true&limit=9`
  );
  res.status(200).send(recipeDB.concat(recipeApi.data.results))
  
  }

 async function getRecipesForId (req, res, next) {
  let id = req.params.idRecipe
  const recipeApi = await axios.get(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&addRecipeInformation=true`
  );
  res.send(recipeApi.data)
 }


module.exports = {
  getAllRecipes,
  addRecipe,
  getRecipesForId
};
